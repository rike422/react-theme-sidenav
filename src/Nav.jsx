import React, { Children, type HOC } from 'react';
import { findIcon, findText } from "./util";
import { renderSubNavIndicator } from './CollapsedIndicator'


const hasChildNav = children => {
  return Children.toArray(children).reduce((partial, next) => {
    return partial === false ? next.type === Nav : partial;
  }, false);
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

function Nav (props) {
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
    hoverBgColor: hoverBgColor,
    hoverColor: hoverColor,
    onClick: onNavItemClicked,
    onNavClick,
    isHighlighted: id === highlightedId,
    highlightColor: highlightColor,
    highlightBgColor: highlightBgColor
  };

  return (
    <div>
      <NavItemStyled className="__rsnav___item" {...itemProps}>
        <NavTextCont {...collectStyleAndClsName(text)}>
          {text?.props?.children}
        </NavTextCont>
        {hasChildNav(children) ? (
          <div
            style={{
              position: "absolute",
              right: "16px",
              bottom: "4px"
            }}
          >
            {renderSubNavIndicator()}{" "}
          </div>
        ) : null}
      </NavItemStyled>
      );
      }

      compose(
      withState('collapsed', 'setCollapsed', false),
      getContext({

    })
      )
      export default Nav;
