import React from "react";
import styled from "styled-components";

const NavIconCont = styled.div`
  vertical-align: middle;
  display: inline-flex;
  width: 42px;
`;

const NavIcon = props => {
  return <NavIconCont>{props.children}</NavIconCont>;
};

export { NavIcon };
