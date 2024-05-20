import { useEffect, useRef } from "react";

export const useHighlightSelectedElement = () => {
  const lastElement = useRef<Element>();

  const onPointerMove = (e: PointerEvent) => {
    // starting from 1 because the first element is the overlay
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    console.log(elements?.map((e) => `${e.tagName}-${e.className}`));
    const element = elements[0];
    if (lastElement.current === element) {
      return;
    }

    if (lastElement.current) {
      lastElement.current.classList.remove("brevy-hover");
    }

    if (element) {
      element.classList.add("brevy-hover");
      lastElement.current = element;
    }
  };

  useEffect(() => {
    document.addEventListener("pointermove", onPointerMove);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);
};
