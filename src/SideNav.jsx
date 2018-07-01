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
  background: ${(p) => p.theme.backGroundColor};
  color: ${(p) => p.theme.color};
`

function SideNavBase(props: PropTypes) {
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
