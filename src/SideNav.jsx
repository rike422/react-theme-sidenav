import React from "react";
import { compose, withContext } from "recompose";

type ContextTypes = {
  highlightColor?: string,
  highlightBgColor?: string,
  hoverBgColor?: string,
  hoverColor?: string
};

type PropTypes = {
  ...contextTypes,
  selected: string,
  defaultSelected: string,
  onItemSelection?: (...args) => void
};

const noop = () => {};

function SideNavBase(props: PropTypes) {
  const { children, setSelected, defaultSelected, selected } = props;
  return <div>{...children}</div>;
}

const SideNav = compose(
  withState("selected", "setSelected", ""),
  withState("defaultSelected", "setDefaultSelected", ""),
  withContext({}, (props: ContextTypes) => {
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
    return {
      theme: theme,
      highlightedId: currentSelected,
      onNavClick: onNavClick
    };
  })
)(SideNavBase);

export { SideNav };
