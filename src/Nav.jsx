import React, { Children, Component } from 'react';
import { findIcon, findText } from "./util";
import styled from 'styled-components';
import { renderSubNavIndicator } from './CollapsedIndicator'

export const NavIcon = () => {
  throw new Error('Should not render');
};
export const NavText = () => {
  throw new Error('Should not render');
};

const NavItemStyled = styled.div`
     padding: 8px 12px;
     cursor: pointer;
     position: relative;
     background: ${props => props.isHighlighted ? props.highlightBgColor : 'inherit'};
     color: ${props => props.isHighlighted ? props.highlightColor : 'inherit'};
     &:hover {
        color: ${props => props.hoverColor || props.highlightColor || 'inherit'} !important;
        background: ${props => props.hoverBgColor || props.highlightBgColor || 'inherit'} !important;
     }
`;

const NavIconCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    width: 42px;
`;

const NavTextCont = styled.div`
    vertical-align: middle;
    display: inline-flex;
    padding-right: 16px;
`;

const hasChildNav = children => {
  return Children.toArray(children).reduce((partial, next) => {
    return partial === false ? next.type === Nav : partial;
  }, false);
};


const collectStyleAndClsName = comp => {
  const { className = undefined, style = {} } = comp && comp.props
    ? comp.props
    : {};
  return { className, style };
};


type callback = (...args: Array<any>) => void;

type Props = {
  children?: React.Element<*>,
  highlightColor?: string,
  highlightBgColor?: string,
  isHighlighted?: boolean,
  id: string | number,
  onClick?: callback,
  onNavClick?: callback,
  highlightedId?: string | number,
  renderSubNavIndicator?: callback,
  hoverBgColor?: string,
  hoverColor?: string,
  expanded?: boolean,
  collapseIndicatorSize?: string
}

type ContextTypes = {
  highlightColor: string,
  highlightBgColor: string,
  hoverBgColor: string,
  hoverColor: string
}

const defaultProps = {
  onNavClick: identity,
  collapseIndicatorSize: "0.25em"
}
const setSubNavRef = (subNavEl) => {
  this.subNavEl = subNavEl;
}

function Nav(props) {
  const {
    hoverBgColor,
    hoverColor,
    highlightColor,
    highlightBgColor,
    children,
    highlightedId,
    onNavClick = identity,
    identity,
    id,
    collapsed,
    setCollapsed,
    onClick
  } = props;

  const onNavItemClicked = () => {
    const onClick = identity;
    setCollapsed(!collapsed), () => {
      onNavClick(id, null);
      onClick(id, null);
      if (this.subNavEl && !this.s) {
        this.subNavEl.style.maxHeight = !collapsed ? null : "0px";
      }
    }
  }
  const childClicked = (childId) => {
    const { onNavClick } = props;
    onNavClick(childId, props.id);
    onClick(childId, props.id);
  }
  const icon = findIcon(children);
  const text = findText(children);
  const itemProps = {
    hoverBgColor: hoverBgColor || this.context.hoverBgColor,
    hoverColor: hoverColor || this.context.hoverColor,
    onClick: onNavItemClicked,
    onNavClick,
    isHighlighted: id === highlightedId,
    highlightColor: highlightColor || this.context.highlightColor,
    highlightBgColor: highlightBgColor || this.context.highlightBgColor
  };

  return (
    <div>
      <NavItemStyled className="__rsnav___item" {...itemProps}>
        <NavIconCont {...collectStyleAndClsName(icon)}>
          {icon && icon.props ? icon.props.children : null}
        </NavIconCont>
        <NavTextCont {...collectStyleAndClsName(text)}>
          {text && text.props ? text.props.children : null}
        </NavTextCont>
        {hasChildNav(children) ? (
          <div
            style={{
              position: "absolute",
              right: "16px",
              bottom: "4px"
            }}
          >
            {this.renderSubNavIndicator()}{" "}
          </div>
        ) : null}
      </NavItemStyled>
      <div
        ref={this.setSubNavRef}
        style={{
          maxHeight: this.state.collapsed ? 0 : null,
          transition: "all 0.2s ease-in-out"
        }}
      >
        {Children.toArray(children)
          .filter(child => child.type === Nav && !this.state.collapsed)
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
    </div>
  );
}

compose(
  withState('collapsed', 'setCollapsed', false)
)
export default Nav;
