export type ElementSelector = {
  xpath: string;
  cssSelector: string;
};

export type ProductSelectors = {
  price: ElementSelector;
  title: ElementSelector;
  unit: ElementSelector;
};
