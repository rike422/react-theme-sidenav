// @flow
import React from "react";
import styled from "styled-components";
import { NavIcon } from "./NavIcon";
import { NavText } from "./NavText";
import { type Theme } from "./types";

const NavItemStyled = styled.div`
  padding: 8px 12px;
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
  const { children, onClick, theme, subNav, isHighlighted } = props;
  return (
    <NavItemStyled
      onClick={onClick}
      theme={theme}
      subNav={subNav}
      isHighlighted={isHighlighted}
    >
      {children}
    </NavItemStyled>
  );
};

export { NavItem, NavIcon, NavText };
