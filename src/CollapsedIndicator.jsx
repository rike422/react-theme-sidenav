import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
    width: ${p => p.collapseIndicatorSize || "15px"}
    height: ${p => p.collapseIndicatorSize || "15px"}
    > path {
      stroke: ${props => props.isHighlighted ? props.theme.highlightColor : props.theme.color};
			fill: none;
			stroke-linecap: round;
			stroke-width: 5;
			stroke-dasharray: 29 40;
			transition: stroke-dashoffset .3s;
			stroke-dashoffset: ${p => (!p.collapsed ? -15 : null)};
		}
		parent:hover {
		  > path {
		  }
	  }
`;

const CollapsedIndicator = (props) => {
  return (
    <Icon
      viewBox="0 0 26 26"
      {...props}
    >
      <path d="M11,1 L21,11 L11,21 L1,11"/>
    </Icon>
  );
};

export { CollapsedIndicator };
