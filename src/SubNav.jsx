import React, { type HOC } from "react";
import { compose, withState } from "recompose";
import styled from "styled-components";
import { SideNavConsumer, type SideNavContextType, SideNavProvider } from "./SideNavContext";

const SubNabWrapper = styled.div`
  maxheight: ${p => {
    p.collapsed ? 0 : null;
  }};
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
  transition: all 0.2s ease-in-out;
`;


const SubNavBase = props => {
  const { id, highlightedId, childClicked, collapsed, children } = props;

  return (
    <SubNabWrapper collapsed={collapsed}>
      <SideNavConsumer>
        {(context: SideNavContextType) => {
          const onClick = (childId) => {
            context.onNavClick(`${id}/${childId}`)
          }
          const newContext = Object.assign({}, context, {
            onNavClick: onClick,
            subNav: true
          })
          return (
            <SideNavProvider value={newContext}>
              {children}
            </SideNavProvider>
          )
        }}
      </SideNavConsumer>
    </SubNabWrapper>
  );
};

const SubNav = compose(
  withState('collapsed', 'setCollapsed', false)
)(SubNavBase)

export { SubNav };
