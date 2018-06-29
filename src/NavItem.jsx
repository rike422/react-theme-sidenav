// @flow
import React from "react";
import styled from "styled-components";
import { NavIcon } from "./NavIcon";
import { NavText } from "./NavText";

import { type Theme } from "./types";
import { SideNavConsumer, type SideNavContextType } from "./SideNavContext";

const NavItemStyled = styled.div`
  padding: ${p => (p.subNav) ? '8px 0px 0px 0px;' : "8px 12px;" }
  cursor: pointer;
  position: relative;
  background: ${props =>
    props.isHighlighted ? props.theme.highlightBgColor : "inherit"};
  color: ${props =>
    props.isHighlighted ? props.theme.highlightColor : "inherit"};
  &:hover {
    color: ${props =>
      props.theme.hoverColor ||
      props.theme.highlightColor ||
      "inherit"} !important;
    
    background: ${props =>
      props.theme.hoverBgColor ||
      props.theme.highlightBgColor ||
      "inherit"} !important;
  }
`;

type Props = {
  id: string,
  isHighlighted: boolean,
  theme: Theme,
  children?: React.Element<*>,
  onClick: (id: string) => void
};

const NavItem = (props: Props) => {
  const { id, children } = props;

  return (
    <SideNavConsumer>
      {(context: SideNavContextType ) => {
        const { theme, onNavClick, subNav } = context;
        const onItemClick = e => {
          onNavClick(id);
        };
        return(
          <NavItemStyled onClick={onItemClick} theme={theme} subNav={subNav}>
            {children}
          </NavItemStyled>
        )
      }}
    </SideNavConsumer>
  );
};

export { NavItem, NavIcon, NavText };
