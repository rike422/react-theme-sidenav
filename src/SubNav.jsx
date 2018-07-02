import React, { type HOC } from "react";
import { compose, withState } from "recompose";
import styled from "styled-components";
import {
  SideNavConsumer,
  type SideNavContextType,
  SideNavProvider
} from "./SideNavContext";
import { renderSubNavIndicator } from "./CollapsedIndicator";

const SubNabWrapper = styled.div`
  max-height: ${p => {
    return p.collapsed ? 0 : "100%";
  }};
  overflow-y: hidden;
  cursor: pointer;
  position: relative;
  padding-left: 1rem;
  border-left: 3px solid transparent;
  border-left-color: ${props => (!props.collabsed) ? props.theme.highlightBgColor : "inherit"};
  background: ${props =>
    props.isHighlighted ? props.theme.highlightBgColor : "inherit"};
  color: ${props =>
    props.isHighlighted ? props.theme.highlightColor : "inherit"};
  
  transition-property: max-height border-left-color;
  transition: all 0.5s ease-in-out;
  transition-timing-function: cubic-bezier(0.35, 0, 0.25, 1)
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
`;
const SubNavBase = props => {
  const { id, collapsed, setCollapsed, children } = props;

  const arrayChildren = React.Children.toArray(children);
  const iconIndex = arrayChildren.findIndex(c => c.type.name == "NavIcon");
  const icon = arrayChildren.splice(iconIndex, 1);
  const textIndex = arrayChildren.findIndex(c => c.type.name == "NavText");
  const title = arrayChildren.splice(textIndex, 1);
  return (
    <SideNavConsumer>
      {(context: SideNavContextType) => {
        const onClick = childId => {
          context.onNavClick(`${id}/${childId}`);
        };
        const toggle = () => {
          setCollapsed(!collapsed, () => {
            context.onNavClick(`${id}`);
          });
        };
        const newContext = Object.assign({}, context, {
          onNavClick: onClick,
          subNav: true
        });
        const isHighlighted = id === context.highlightedId;
        return (
          <SideNavProvider value={newContext}>
            <SubNabHeader
              isHighlighted={isHighlighted}
              onClick={toggle}
              theme={newContext.theme}
            >
              {icon}
              {title}
              <div
                style={{
                  position: "absolute",
                  right: "16px",
                  bottom: "4px"
                }}
              >
                {renderSubNavIndicator(props)}{" "}
              </div>
            </SubNabHeader>
            <SubNabWrapper collapsed={collapsed} theme={newContext.theme}>
              {arrayChildren}
            </SubNabWrapper>
          </SideNavProvider>
        );
      }}
    </SideNavConsumer>
  );
};

const SubNav = compose(withState("collapsed", "setCollapsed", true))(
  SubNavBase
);

export { SubNav };
