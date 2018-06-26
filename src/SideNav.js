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

const state = {
  selected: props.defaultSelected,
  defaultSelected: props.defaultSelected
};


function SideNav (props: PropTypes) {
  const { children, setSelected, onItemSelection } = props;
  const cb = () => {
    if (onItemSelection != undefined) {
      onItemSelection(id)
    }
  }
  const onNavClick = (id: string, parent = null) => {
    if (props.defaultSelected) {
      //lets manage it
      setSelected(id, () => {
        onItemSelection(id, parent);
      });
    } else {
      onItemSelection(id, parent);
    }
  };

  const items = Children.toArray(children).map(child => {
    if (child && child.type === Nav) {
      const currentSelected = props.defaultSelected
        ? this.state.selected
        : this.props.selected;

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

compose(
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
)
export {
  SideNav
}
