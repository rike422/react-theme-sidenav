// @flow
import React from "react";
import styled from "styled-components";

const NavTextCont = styled.div`
  vertical-align: middle;
  display: inline-flex;
  padding-right: 16px;
`;

type PropTypes = {
  id: string,
  children: React.Element<*>
}
const NavText = (props: PropTypes) => {
  const { id, children } = props;
  return (
    <NavTextCont
    >
      {children}
    </NavTextCont>
  );
};

export { NavText };
