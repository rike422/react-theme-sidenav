import type { Theme } from "./types";

const defaultTheme: Theme = {
  highlightColor: '#E91E63',
  highlightBgColor: '#00bcd4',
  hoverBgColor: "#2c3e50",
  hoverColor: "#f1f1f1f1"
}

const mergeTheme = (theme: Theme): Theme => {
  return Object.assign({}, defaultTheme, theme)
}
export {
  defaultTheme,
  mergeTheme
}