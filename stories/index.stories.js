import React from 'react';
import { BaseContainer } from "./common/BaseContainer";
import { Nav, NavIcon, NavText, SideNav, SubNav } from "react-sidenav";
import { Title } from "./common/Title";
import { storiesOf } from '@storybook/react';
import { action, configureActions } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { TiAnchor, TiBriefcase, TiBusinessCard, TiGroup, TiThListOutline } from "react-icons/lib/ti/index";

storiesOf('SideNav', module).add('Basic', () => {
  return (
    <BaseContainer>
      <SideNav>
        <Title> Basic SideNav </Title>
        <Nav id="dashboard">
          <a onClick={action('lint to dashboard')} >
          <NavIcon>
            <TiAnchor size={20}/>
          </NavIcon>
          <NavText> Dashboard </NavText>
          </a>
        </Nav>
        <Nav id="sales">
          <a onClick={action('lint to sales')} >
          <NavIcon>
            <TiBusinessCard size={20}/>
          </NavIcon>
          <NavText> Sales </NavText>
          </a>
        </Nav>
        <Nav id="products">
          <a onClick={action('lint to products')} >

          <NavIcon>
            <TiBriefcase size={20}/>
          </NavIcon>
          <NavText> Products </NavText>
          </a>
        </Nav>
        <SubNav id="customers">

          <NavIcon>
            <TiGroup size={20}/>
          </NavIcon>
          <NavText> Customers </NavText>
          <Nav id="dashboard2">
            <a onClick={action('lint to customers/dashboard2')} >
            <NavIcon>
              <TiBusinessCard size={16}/>
            </NavIcon>
            <NavText> Search </NavText>
            </a>
          </Nav>
          <Nav id="sales2">
            <a onClick={action('lint to customers/sales2')} >
            <NavIcon>
              <TiBriefcase size={16}/>
            </NavIcon>
            <NavText> Promoter </NavText>
            </a>
          </Nav>
          <Nav id="products2">
            <a onClick={action('lint to customers/products2')} >
            <NavIcon>
              <TiBriefcase size={16}/>
            </NavIcon>
            <NavText> Social Medias </NavText>
            </a>
          </Nav>
        </SubNav>
        <Nav id="orders">
          <a onClick={action('lint to customers/orders')} >
          <NavIcon>
            <TiThListOutline size={16}/>
          </NavIcon>
          <NavText> Orders </NavText>
          </a>
        </Nav>
      </SideNav>
    </BaseContainer>
  )
})

