// @flow
import React from "react";
import { compose, withState } from "recompose";
import { type SideNavContextType, SideNavProvider } from "./SideNavContext";
import { mergeTheme } from "./theme";

type PropTypes = {
  selected: string,
  defaultSelected: string,
  onItemSelection?: (...args) => void
};

const noop = () => {
};

function SideNavBase (props: PropTypes) {
  const {
    defaultSelected,
    selected,
    setSelected,
    theme,
    children
  } = props;

  const onNavClick = (id: string) => {
    console.log(`on nav click ${id}`)
    setSelected(id, () => {
      //onItemSelection(id, parent);
    });
    //if (defaultSelected) {
    //  //lets manage it
    //
    //} else {
    //  //onItemSelection(id, parent);
    //}
  };

  const currentSelected = selected;

  console.log(`selected ${selected}`)
  const context: SideNavContextType = {
    highlightedId: currentSelected,
    onNavClick: onNavClick,
    theme: mergeTheme(theme || {})
  };

  return (
    <SideNavProvider value={context}>
      {children}
    </SideNavProvider>
  );
}

const SideNav = compose(
  withState("selected", "setSelected", ""),
  withState("defaultSelected", "setDefaultSelected", "")
)(SideNavBase);

export { SideNav };
