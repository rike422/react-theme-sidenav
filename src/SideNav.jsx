// @flow
import React from "react";
import { compose, withState } from "recompose";
import { type SideNavContextType, SideNavProvider } from "./SideNavContext";

type PropTypes = {
  ...contextTypes,
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
    onItemSelection
  } = props;
  const onNavClick = (id: string, parent = null) => {
    if (defaultSelected) {
      //lets manage it
      setSelected(id, () => {
        onItemSelection(id, parent);
      });
    } else {
      onItemSelection(id, parent);
    }
  };

  const currentSelected =
    defaultSelected != null ? defaultSelected : selected;

  const context: SideNavContextType = {
    theme: theme,
    highlightedId: currentSelected,
    onNavClick: onNavClick
  };
  return (
    <div>
      <SideNavProvider value={context}>
        {...children}
      </SideNavProvider>
    </div>);
}

const SideNav = compose(
  withState("selected", "setSelected", ""),
  withState("defaultSelected", "setDefaultSelected", "")
)(SideNavBase);

export { SideNav };
