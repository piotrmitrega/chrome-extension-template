interface XPathSegment {
  elementName: string;
  index: number;
}

export function xPathFromElement(element: any) {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return null;
  }

  const segments: XPathSegment[] = [];

  while (element && element.nodeType === Node.ELEMENT_NODE) {
    let siblingIndex = 1; // Start with 1 as XPath indices are 1-based
    for (let sibling = element.previousSibling; sibling; sibling = sibling.previousSibling) {
      if (
        sibling.nodeType === Node.ELEMENT_NODE &&
        sibling.nodeName.toLowerCase() === element.nodeName.toLowerCase()
      ) {
        siblingIndex++;
      }
    }

    segments.unshift({
      elementName: element.nodeName.toLowerCase(),
      index: siblingIndex,
    });

    element = element.parentNode as Element;
  }

  if (!segments.length) {
    return null;
  }

  return segments.map((segment) => `/${segment.elementName}[${segment.index}]`).join("");
}
