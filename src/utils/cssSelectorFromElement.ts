import { categorizeHtmlIdentifierPattern } from "@src/utils/categorizeHtmlIdentifierPattern";
import { HtmlIdentifierPattern } from "@src/types/htmlIdentifierPattern";

export const cssSelectorFromElement = (element: Element): string | null => {
  if (element.id) {
    return `#${element.id}`;
  }

  let selector = "";

  // Add class selectors if any. This is based on all classes, which might be over-specific in some cases.
  const classList = [...element.classList];
  if (
    classList.every(
      (className) => categorizeHtmlIdentifierPattern(className) !== HtmlIdentifierPattern.WORD,
    )
  ) {
    console.warn("Element has random class names and we won't use them", classList);
    return null;
  }

  if (classList.length > 0) {
    selector += `.${Array.from(classList).join(".")}`;
  }

  return element.tagName.toLowerCase() + selector;
};
