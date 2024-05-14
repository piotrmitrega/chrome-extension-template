export type ElementSelector = {
  xPath: string;
  cssSelector: string;
};

export type ProductSelectors = {
  price: ElementSelector;
  title: ElementSelector;
  unit: ElementSelector;
};
