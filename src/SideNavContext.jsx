import React, { createContext } from "react";
import type { Theme } from "./types";

const defaultTheme: Theme = {
  highlightColor: '#E91E63',
  highlightBgColor: '#00bcd4',
  hoverBgColor: "#2c3e50",
  hoverColor: "#f1f1f1f1"
}

const SideNavContext = createContext({
  theme: defaultTheme,
  subNav: false
})

const SideNavConsumer = SideNavContext.Consumer
const SideNavProvider = SideNavContext.Provider

export type SideNavContextType = {
  theme: Theme,
  highlightedId: string,
  onNavClick: (e: string) => void,
  subNav: boolean
}

export {
  SideNavProvider,
  SideNavConsumer
}