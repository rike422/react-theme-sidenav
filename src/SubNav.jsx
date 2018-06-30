import React, { type HOC } from "react";
import { compose, withState } from "recompose";
import styled from "styled-components";
import { SideNavConsumer, type SideNavContextType, SideNavProvider } from "./SideNavContext";

const SubNabWrapper = styled.div`
  max-height: ${p => {
  console.table(p)
  return p.collapsed ? 0 : null;
}};
  cursor: pointer;
  position: relative;
  background: ${props =>
  props.isHighlighted ? props.theme.highlightBgColor : "inherit"};
  color: ${props =>
  props.isHighlighted ? props.theme.highlightColor : "inherit"};

  transition: all 0.2s ease-in-out;
`;

const SubNabHeader = styled.div`
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
`
const SubNavBase = props => {
  const { id, collapsed, setCollapsed, children } = props;
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  const arrayChildren = React.Children.toArray(children)
  const iconIndex = arrayChildren.findIndex(c => c.type.name == 'NavIcon')
  const icon = arrayChildren.splice(iconIndex, 1)
  const textIndex = arrayChildren.findIndex(c => c.type.name == 'NavText')
  const title = arrayChildren.splice(textIndex, 1)
  return (
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
            <SubNabHeader onClick={toggle} theme={newContext.theme}>
              {icon}
              {title}
            </SubNabHeader>
            <SubNabWrapper collapsed={collapsed} theme={newContext.theme}>
              {arrayChildren}
            </SubNabWrapper>
          </SideNavProvider>
        )
      }}
    </SideNavConsumer>
  );
};

const SubNav = compose(
  withState('collapsed', 'setCollapsed', false)
)(SubNavBase)

export { SubNav };
