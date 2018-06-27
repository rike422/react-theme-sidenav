import React, { Children, type HOC } from 'react';
import styled from 'styled-components'
import Nav from "./Nav";
import { NavItem } from "./NavItem";

SubNabWrapper = styled.div`
  maxHeight: ${(p) => {
    p.collapsed ? 0 : null
  }};
  transition: all 0.2s ease-in-out
`

const SubNav = (props) => {
  const { id, highlightedId, childClicked } = props

  return (
    <SubNabWrapper>
      {Children.toArray(children)
        .filter(child => child.type === Nav && collapsed)
        .map((child, idx) => {
          const isItemHighlighted =
            highlightedId === `${id}/${child.props.id}`;

          return (
            <NavItem
              key={idx}
              onClick={(e) => {
                props.onNavClick()
                childClicked(`${id}/${child.props.id}`);
              }}
              isHighlighted={isItemHighlighted}
            >
              {...children}
            </NavItem>
          );
        })}
    </SubNabWrapper>
  )
}

export {
  SubNav
}