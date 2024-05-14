import { HtmlIdentifierPattern } from "@src/types/htmlIdentifierPattern";

export const categorizeHtmlIdentifierPattern = (identifier: string): HtmlIdentifierPattern => {
  const randomPattern = new RegExp("^[a-zA-Z0-9_-]{8,}$");
  const wordPattern = new RegExp("^([a-zA-Z]+[0-9]?[-_])*[a-zA-Z]+[0-9]?$");

  if (randomPattern.test(identifier) && !wordPattern.test(identifier)) {
    return HtmlIdentifierPattern.RANDOM;
  } else if (wordPattern.test(identifier)) {
    return HtmlIdentifierPattern.WORD;
  }

  return HtmlIdentifierPattern.UNCLASSIFIED;
};
