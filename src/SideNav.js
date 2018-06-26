import React, { Children, cloneElement } from 'react';
import { compose, withContext } from 'recompose';
import Nav from './Nav';

type ContextTypes = {
  highlightColor?: string,
  highlightBgColor?: string,
  hoverBgColor?: string,
  hoverColor?: string
};

type PropTypes = {
  ...contextTypes,
  selected: string,
  defaultSelected: string,
  onItemSelection?: (...args) => void
};

const noop = () => {
};

function SideNavBase (props: PropTypes) {
  const { children, setSelected, defaultSelected, selected } = props;
  const callback = props.defaultSelected || noop

  const onNavClick = (id: string, parent = null) => {
    if (defaultSelected) {
      //lets manage it
      setSelected(id, () => {
        callback(id, parent)
      });
    } else {
      callback(id, parent)
    }
  };

  const items = Children.toArray(children).map(child => {
    if (child && child.type === Nav) {
      const currentSelected = (defaultSelected != null) ? defaultSelected : selected
      return cloneElement(child, {
        highlightedId: currentSelected,
        onClick: onNavClick
      });
    }
    return child;
  })

  return (
    <div>
      {...items}
    </div>
  );
}

const SideNav = compose(
  withContext({}, (props: ContextTypes) => {
      const {
        highlightColor,
        highlightBgColor,
        hoverBgColor,
        hoverColor
      } = props;
      return { highlightColor, highlightBgColor, hoverBgColor, hoverColor };
    }
  ),
  withState('selected', 'setSelected', ''),
  withState('defaultSelected', 'setDefaultSelected', '')
)(SideNavBase)

export {
  SideNav
}
