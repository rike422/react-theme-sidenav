import React, { type HOC } from "react";
import styled from "styled-components";
import { SideNavConsumer, type SideNavContextType, SideNavProvider } from "./SideNavContext";

const SubNabWrapper = styled.div`
  maxheight: ${p => {
  p.collapsed ? 0 : null;
}};
  transition: all 0.2s ease-in-out;
`;

const SubNav = props => {
  const { id, highlightedId, childClicked, collapsed, children } = props;

  return (
    <SubNabWrapper>
      <SideNavConsumer>
        {(context: SideNavContextType) => {
          const onClick = (childId) => {
            context.onNavClick(`${id}/${childId}`)
          }
          const newContext = Object.assign({}, context, {
            onNavClick: onClick
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

export { SubNav };
