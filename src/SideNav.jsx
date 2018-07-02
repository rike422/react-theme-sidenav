// @flow
import React from "react";
import { compose, withState } from "recompose";
import styled from 'styled-components';
import { type SideNavContextType, SideNavProvider } from "./SideNavContext";
import { mergeTheme } from "./theme";
import type { Theme } from "./types";

type PropTypes = {
  selected: string,
  defaultSelected: string,
  onItemSelection?: (...args) => void,
  theme: Theme,
};

const noop = () => {
};

const SideNavContainer = styled.div`
  height: 100%;
  width: 100%;
  background: ${(p) => p.theme.bgColor};
  color: ${(p) => p.theme.color};
  ::after {
  content: "";
    background: rgba(0, 0, 0, 0.15);
    background-color: rgba(0, 0, 0, 0.15);
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-attachment: scroll;
    background-image: none;
    background-size: auto auto;
    background-origin: padding-box;
    background-clip: border-box;
    position: absolute;
    display: block;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
-webkit-transform: translateZ(0px);
  }
`

function SideNavBase (props: PropTypes) {
  const { defaultSelected, selected, setSelected, theme, children } = props;
  const onItemSelection = props.onItemSelection || noop

  const onNavClick = (id: string) => {
    setSelected(id, () => {
      onItemSelection(id, parent);
    });
    //if (defaultSelected) {
    //  //lets manage it
    //
    //} else {
    //  //onItemSelection(id, parent);
    //}
  };
  const applyTheme = mergeTheme(theme || {})
  const currentSelected = selected;
  const context: SideNavContextType = {
    highlightedId: currentSelected,
    onNavClick: onNavClick,
    theme: applyTheme
  };

  return (
    <SideNavContainer theme={applyTheme}>
      <SideNavProvider value={context}>
        {children}
      </SideNavProvider>
    </SideNavContainer>);

}

const SideNav = compose(
  withState("selected", "setSelected", ""),
  withState("defaultSelected", "setDefaultSelected", "")
)(SideNavBase);

export { SideNav };
