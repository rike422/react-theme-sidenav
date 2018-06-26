import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const NavIcon = () => {
  throw new Error('Should not render');
};
export const NavText = () => {
  throw new Error('Should not render');
};

const findComponent = ComponentToFind => children => {
  return Children.toArray(children).reduce((found, next) => {
    if (found === null && next !== null && next.type === ComponentToFind) {
      return next;
    }
    return found;
  }, null);
};

const findIcon = findComponent(NavIcon);
const findText = findComponent(NavText);
const identity = () => {
};

const NavItemStyled = styled.div`
     padding: 8px 12px;
     cursor: pointer;
     position: relative;
     background: ${props =>
  props.isHighlighted ? props.highlightBgColor : 'inherit'};
     color: ${props =>
  props.isHighlighted ? props.highlightColor : 'inherit'};

     &:hover {
        color: ${props =>
  props.hoverColor || props.highlightColor || 'inherit'} !important;
        background: ${props =>
  props.hoverBgColor || props.highlightBgColor || 'inherit'} !important;
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

const CollapsedIndicator = styled.div`
    &:before {
        border-style: solid;
        border-width: 0.15em 0.15em 0 0;
        content: '';
        display: inline-block;
        height: ${props => props.size};
        left: 0;
        position: relative;
        top: 0.15em;
        transform: rotate(${props => (!props.collapsed ? '135deg' : '45deg')});
        vertical-align: top;
        width: ${props => props.size};
    }
`;

const collectStyleAndClsName = comp => {
  const { className = undefined, style = {} } = comp && comp.props
    ? comp.props
    : {};
  return { className, style };
};

export class Nav extends Component {
  static contextTypes = {
    highlightColor: PropTypes.string,
    highlightBgColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverColor: PropTypes.string
  };

  static propTypes = {
    children: PropTypes.node,
    highlightColor: PropTypes.string,
    highlightBgColor: PropTypes.string,
    isHighlighted: PropTypes.bool,
    id: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ]),
    onClick: PropTypes.func,
    onNavClick: PropTypes.func,
    highlightedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    renderSubNavIndicator: PropTypes.func,
    hoverBgColor: PropTypes.string,
    hoverColor: PropTypes.string,
    expanded: PropTypes.bool,
    collapseIndicatorSize: PropTypes.string
  };

  static defaultProps = {
    onNavClick: identity,
    collapseIndicatorSize: '0.25em'
  }

  constructor (props) {
    super(props);
    this.state = {
      collapsed: !props.expanded
    };
  }
}
