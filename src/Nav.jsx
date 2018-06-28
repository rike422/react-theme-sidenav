// @flow
import React, { type HOC } from "react";
import { compose, getContext, withContext, withState } from "recompose";
import { NavItem } from './NavItem'

import type { Theme } from "./types";

type callback = (...args: Array<any>) => void;

type Props = {
  id: string | number,
  children?: React.Element<*>,
  theme: Theme,
  isHighlighted?: boolean,
  onClick?: callback,
  onNavClick?: callback,
  highlightedId?: string | number,
  renderSubNavIndicator?: callback,
  expanded?: boolean,
  collapseIndicatorSize?: string
};

type ContextTypes = {
  highlightColor: string,
  highlightBgColor: string,
  hoverBgColor: string,
  hoverColor: string
};

// const defaultProps = {
//   onNavClick: identity,
//   collapseIndicatorSize: "0.25em"
//};
const setSubNavRef = subNavEl => {
  this.subNavEl = subNavEl;
};

function Nav (props) {
  const {
    children,
    collapsed,
    onNavClick,
    onClick,
    highlightedId,
    theme,
    identity,
    id,
    setCollapsed
  } = props;

  const onNavItemClicked = () => {
    const onClick = identity;
    setCollapsed(!collapsed),
      () => {
        onNavClick(id, null);
        onClick(id, null);
      };
  };
  // const childClicked = childId => {
  //   const { onNavClick } = props;
  //   onNavClick(childId, props.id);
  //   onClick(childId, props.id);
  // };

  const itemProps = {
    theme: theme,
    onClick: onNavItemClicked,
    isHighlighted: id === highlightedId
  };

  return (
    <NavItem  {...itemProps}>
      {children}
    </NavItem>
  );
}

compose(
  withState("collapsed", "setCollapsed", false),
  getContext({}, props => {
    const { theme, onNavClick } = props;
    return {
      theme: theme,
      onNavClick: onNavClick
    };
  }),
  withContext({}, props => {
  })
);
export { Nav };
