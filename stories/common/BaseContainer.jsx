import React from 'react';
import styled from "styled-components";

const BaseContainer = props => (
  <div
    style={{
      display: "inline-block",
      paddingTop: 16,
      paddingBottom: 16,
      fontFamily: "Roboto",
      width: 240,
      height: 500,
      ...props.style
    }}
  >
    {props.children}
  </div>
);

export {
  BaseContainer
}