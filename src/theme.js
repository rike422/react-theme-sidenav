import type { Theme } from "./types";

const defaultTheme: Theme = {
  highlightColor: "#2c3e50",
  highlightBgColor: "#f1f1f1f1",
  hoverBgColor: undefined,
  hoverColor: undefined
};

const mergeTheme = (theme: Theme): Theme => {
  return Object.assign({}, defaultTheme, theme);
};
export { defaultTheme, mergeTheme };
