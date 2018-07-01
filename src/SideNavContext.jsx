import React, { createContext } from "react";
import type { Theme } from "./types";
import { defaultTheme } from "./theme";

const SideNavContext = createContext({
  theme: defaultTheme,
  subNav: false
});

const SideNavConsumer = SideNavContext.Consumer;
const SideNavProvider = SideNavContext.Provider;

export type SideNavContextType = {
  theme: Theme,
  highlightedId: string,
  onNavClick: (e: string) => void,
  subNav: boolean
};

export { SideNavProvider, SideNavConsumer };
