import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
    width: ${p => p.collapseIndicatorSize || "15px"}
    height: ${p => p.collapseIndicatorSize || "15px"}
		> path {
		  stroke: ${p => p.collapsed ? '':  p.theme. };
			fill: none;
			stroke: #aaa;
			stroke-linecap: round;
			stroke-width: 2;
			stroke-dasharray: 29 40;
			transition: stroke-dashoffset .3s;
			stroke-dashoffset: ${p => (!p.collapsed ? -15 : null)}
		}
`;
const CollapsedIndicator = styled.div`
  &:before {
    border-style: solid;
    border-width: 0.15em 0.15em 0 0;
    content: "";
    display: inline-block;
    height: ${props => props.size};
    left: 0;
    position: relative;
    top: 0.15em;
    transform: rotate(${props => (!props.collapsed ? "135deg" : "45deg")});
    vertical-align: top;
    width: ${props => props.size};
  }
`;

const renderSubNavIndicator = props => {
  const { renderSubNavIndicator, collapsed, collapseIndicatorSize } = props;
  if (renderSubNavIndicator) {
    const subNavInd = renderSubNavIndicator(collapsed);
    if (!subNavInd && typeof console !== "undefined") {
      console.warn("subNavIndicator returned undefined or null");
    }
    return subNavInd || null;
  }
  return (
    <Icon
      viewBox="0 0 26 26"
      collapsed={collapsed}
      collapseIndicatorSize={collapseIndicatorSize}
    >
      <path d="M11,1 L21,11 L11,21 L1,11" />
    </Icon>
  );
};

export { CollapsedIndicator, renderSubNavIndicator };
