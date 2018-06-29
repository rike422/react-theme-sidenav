// @flow
import React from "react";
import { compose, withState } from "recompose";
import { type SideNavContextType, SideNavProvider } from "./SideNavContext";

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
    onItemSelection,
    children
  } = props;

  const onNavClick = (id: string, parent = null) => {
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

  const currentSelected =
    defaultSelected != null ? defaultSelected : selected;

  const context: SideNavContextType = {
    theme: theme,
    highlightedId: currentSelected,
    onNavClick: onNavClick
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
