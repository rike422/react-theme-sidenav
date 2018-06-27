import React from "react";
import styled from "styled-components";

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
    <CollapsedIndicator collapsed={collapsed} size={collapseIndicatorSize} />
  );
};

export { CollapsedIndicator, renderSubNavIndicator };
