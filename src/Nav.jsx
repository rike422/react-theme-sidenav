// @flow
import React, { type HOC } from "react";
import { compose, withState } from "recompose";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { SideNavConsumer, type SideNavContextType } from "./SideNavContext";

import type { Theme } from "./types";

type callback = (...args: Array<any>) => void;

type Props = {
  id: string | number,
  children?: React.Element<*>
};

const NavBase = props => {
  const { children, id } = props;

  const onNavItemClicked = onNavClick => {
    return () => {
      onNavClick(id, null);
    };
  };

  return (
    <SideNavConsumer>
      {(context: SideNavContextType) => {
        const { theme, onNavClick, highlightedId, subNav } = context;
        const clicked = onNavItemClicked(onNavClick);
        const isHighlighted = id === highlightedId;
        return (
          <NavItem
            onClick={clicked}
            theme={theme}
            isHighlighted={isHighlighted}
            subNav={subNav}
          >
            {children}
          </NavItem>
        );
      }}
    </SideNavConsumer>
  );
};

const Nav = compose(withState("collapsed", "setCollapsed", false))(NavBase);

export { Nav };
