// @flow
import React from "react";
import styled from "styled-components";

const NavTextCont = styled.div`
  vertical-align: middle;
  display: inline-flex;
  padding-right: 16px;
`;

const NavText = (props: Props) => {
  const { id, children } = props;
  return (
    <NavTextCont
    >
      {children}
    </NavTextCont>
  );
};

export { NavText };
