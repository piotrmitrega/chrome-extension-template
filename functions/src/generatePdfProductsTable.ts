import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import PdfPrinter from "pdfmake";
import path from "path";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import axios from "axios"; // Import node-fetch for making HTTP requests

const fontDescriptors = {
  Roboto: {
    normal: path.join(__dirname, "./fonts/Roboto-Regular.ttf"),
    bold: path.join(__dirname, "./fonts/Roboto-Medium.ttf"),
    italics: path.join(__dirname, "./fonts/Roboto-Italic.ttf"),
    bolditalics: path.join(__dirname, "./fonts/Roboto-MediumItalic.ttf"),
  },
};

const logger = functions.logger;

const printer = new PdfPrinter(fontDescriptors);

admin.initializeApp();

const db = admin.firestore();

export default functions.region("europe-west1").https.onRequest(async (req, res) => {
  logger.info("Hello pdf!", { structuredData: true });

  const uid = req.query.uid as string; // Assumes uid is provided as a query parameter
  try {
    const productsSnapshot = await db
      .collection("productsByUser")
      .doc(uid)
      .collection("products")
      .get();

    if (productsSnapshot.empty) {
      res.status(404).send("No products found");
      return;
    }

    logger.info(`Got products! ${productsSnapshot.size}`, { structuredData: true });

    const converted = [];

    for (const doc of productsSnapshot.docs) {
      const product = doc.data();
      let imageData;

      if (product.imageUrl) {
        try {
          const response = await axios.get(product.imageUrl, { responseType: "arraybuffer" });
          if (response.status === 200) {
            const base64Image = Buffer.from(response.data, "binary").toString("base64");
            imageData = `data:${response.headers["content-type"]};base64,${base64Image}`;
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }
      const row = [
        product.title,
        product.price,
        imageData ? { image: imageData, fit: [50, 50] } : "No image",
      ];
      converted.push(row);
    }

    // Create a document definition for pdfmake
    const documentDefinition: TDocumentDefinitions = {
      content: [
        { text: "Products", style: "header" },
        { text: "\n" }, // Add some spacing
        // Table containing product data
        {
          table: {
            headerRows: 1,
            widths: ["*", "*", "*"],
            body: [["Title", "Price", "Image"], ...converted],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
      },
    };

    const pdfDoc = printer.createPdfKitDocument(documentDefinition);

    // Create a buffer to store PDF content
    const chunks = [];
    pdfDoc.on("data", (chunk) => {
      chunks.push(chunk);
    });

    pdfDoc.on("end", () => {
      const pdfBuffer = Buffer.concat(chunks);
      // Send the PDF as a response
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=products.pdf");
      res.send(pdfBuffer);
    });

    pdfDoc.end(); // Finalize the PDF document
  } catch (error) {
    console.error("Error generating PDF: ", error);
    res.status(500).send("Internal Server Error");
  }
});
