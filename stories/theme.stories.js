import React from 'react';
import { BaseContainer } from "./common/BaseContainer";
import { Nav, NavIcon, NavText, SideNav, SubNav } from "react-sidenav";
import { Title } from "./common/Title";
import { storiesOf } from '@storybook/react';
import { withState, compose } from 'recompose';

import { TiAnchor, TiBriefcase, TiBusinessCard, TiGroup, TiThListOutline } from "react-icons/lib/ti/index";

const theme1 = {
  backGroundColor: "#FFF",
  color: "#FFF",
}

const theme2 = {
  backGroundColor: "#D34C5E",
  color: "#FFFFFF"
}

const theme3 = {}

const ThemeNavBase = (props) => {
  const { setTheme, theme } = props;
  return (
    <div>
      <BaseContainer>
        <SideNav theme={theme}>
          <Title> Basic SideNav </Title>
          <Nav id="dashboard">
            <NavIcon>
              <TiAnchor size={20}/>
            </NavIcon>
            <NavText> Dashboard </NavText>
          </Nav>
          <Nav id="sales">
            <NavIcon>
              <TiBusinessCard size={20}/>
            </NavIcon>
            <NavText> Sales </NavText>
          </Nav>
          <Nav id="products">
            <NavIcon>
              <TiBriefcase size={20}/>
            </NavIcon>
            <NavText> Products </NavText>
          </Nav>
          <SubNav id="customers">
            <NavIcon>
              <TiGroup size={20}/>
            </NavIcon>
            <NavText> Customers </NavText>
            <Nav id="dashboard2">
              <NavIcon>
                <TiBusinessCard size={16}/>
              </NavIcon>
              <NavText> Search </NavText>
            </Nav>
            <Nav id="sales2">
              <NavIcon>
                <TiBriefcase size={16}/>
              </NavIcon>
              <NavText> Promoter </NavText>
            </Nav>
            <Nav id="products2">
              <NavIcon>
                <TiBriefcase size={16}/>
              </NavIcon>
              <NavText> Social Medias </NavText>
            </Nav>
          </SubNav>
          <Nav id="orders">
            <NavIcon>
              <TiThListOutline size={16}/>
            </NavIcon>
            <NavText> Orders </NavText>
          </Nav>
        </SideNav>
      </BaseContainer>
      <button onClick={() => setTheme(theme1)}> theme1</button>
      <button onClick={() => setTheme(theme2)}> theme2</button>
      <button onClick={() => setTheme(theme1)}> theme3</button>
    </div>
  )
}

const ThemeNav = compose(
  withState('theme', 'setTheme', theme1)
)(ThemeNavBase)

storiesOf('SideNav', module).add('Theme', ThemeNav)