import React, { type HOC } from 'react';
import type { Theme } from "./types";

type callback = (...args: Array<any>) => void;

type Props = {
  id: string | number,
  children?: React.Element<*>,
  theme: Theme,
  isHighlighted?: boolean,
  onClick?: callback,
  onNavClick?: callback,
  highlightedId?: string | number,
  renderSubNavIndicator?: callback,
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
    theme,
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
    }
  }
  const childClicked = (childId) => {
    const { onNavClick } = props;
    onNavClick(childId, props.id);
    onClick(childId, props.id);
  }

  const itemProps = {
    theme: theme,
    onClick: onNavItemClicked,
    onNavClick,
    isHighlighted: id === highlightedId,
  };

  return (
    <div>
      <NavItemStyled className="__rsnav___item" {...itemProps}>
        {...children}
      </NavItemStyled>
    </div>
  );

}

compose(
  withState('collapsed', 'setCollapsed', false),
  getContext({}, (props) => {
    const { theme } = props
    return {
      theme: theme
    }
  }),
  withContext({}, (props) => {

  })
)
export default Nav;
