import React, { Children, type HOC } from 'react';
import { findIcon, findText } from "./util";
import Nav from "./Nav";

function SubNav () {
  return (
    <div
      style={{
        maxHeight: this.state.collapsed ? 0 : null,
        transition: "all 0.2s ease-in-out"
      }}
    >
      {Children.toArray(children)
        .filter(child => child.type === Nav && collapsed)
        .map((child, idx) => {
          const sicon = findIcon(child.props.children);
          const stext = findText(child.props.children);
          const isItemHighlighted =
            highlightedId === `${id}/${child.props.id}`;

          return (
            <NavItemStyled
              className={"__rsnav___itemchild"}
              key={idx}
              {...itemProps}
              onClick={() => {
                child.props.onNavClick(),
                  this.childClicked(`${id}/${child.props.id}`);
              }}
              isHighlighted={isItemHighlighted}
            >
              <NavIconCont {...collectStyleAndClsName(sicon)}>
                {null}
              </NavIconCont>
              <NavTextCont {...collectStyleAndClsName(stext)}>
                {stext ? stext.props.children : null}
              </NavTextCont>
            </NavItemStyled>
          );
        })}
    </div>
  )
}

export {
  SubNav
}