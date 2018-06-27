import styled from "styled-components/typings/styled-components";
import React from 'react';

const NavItemStyled = styled.div`
     padding: 8px 12px;
     cursor: pointer;
     position: relative;
     background: ${props => props.isHighlighted ? props.theme.highlightBgColor : 'inherit'};
     color: ${props => props.isHighlighted ? props.theme.highlightColor : 'inherit'};
     &:hover {
        color: ${props => props.theme.hoverColor || props.theme.highlightColor || 'inherit'} !important;
        background: ${props => props.theme.hoverBgColor || props.theme.highlightBgColor || 'inherit'} !important;
     }
`;


const NavItem = (props) => {
  const { theme } = props
  return (
    <NavItemStyled theme={theme}>
      {props.text}
    </NavItemStyled>
  )
}

export {
  NavItem
}