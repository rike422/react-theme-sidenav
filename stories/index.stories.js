import React from 'react';
import { BaseContainer } from "./common/BaseContainer";
import { ic_aspect_ratio } from "react-icons-kit/md/ic_aspect_ratio";
import { ic_business } from "react-icons-kit/md/ic_business";
import { ic_business_center } from "react-icons-kit/md/ic_business_center";
import { ic_format_list_bulleted } from "react-icons-kit/md/ic_format_list_bulleted";
import { ic_people } from "react-icons-kit/md/ic_people";
import { ic_shopping_cart } from "react-icons-kit/md/ic_shopping_cart";
import SvgIcon from "react-icons-kit";
import { Nav, NavIcon, NavText, SideNav, SubNav } from "react-sidenav";
import { Title } from "./common/Title";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import styled from "styled-components";

const Icon20 = props => <SvgIcon size={props.size || 20} icon={props.icon}/>;


storiesOf('BasicSideNav', module).add('Basic', () => {
  return (
    <BaseContainer style={{ background: "#2c3e50", color: "#FFF" }}>
      <SideNav>
        <Title> Basic SideNav </Title>
        <Nav id="dashboard">
          <NavIcon>
            <Icon20 icon={ic_aspect_ratio}/>
          </NavIcon>
          <NavText> Dashboard </NavText>
        </Nav>
        <Nav id="sales">
          <NavIcon>
            <Icon20 icon={ic_business}/>
          </NavIcon>
          <NavText> Sales </NavText>
        </Nav>
        <Nav id="products">
          <NavIcon>
            <Icon20 icon={ic_business_center}/>
          </NavIcon>
          <NavText> Products </NavText>
        </Nav>
        <SubNav id="customers">
          <NavIcon>
            <Icon20 icon={ic_people}/>
          </NavIcon>
          <NavText> Customers </NavText>
          <Nav id="dashboard2">
            <NavIcon>
              <Icon20 size={16} icon={ic_aspect_ratio}/>
            </NavIcon>
            <NavText> Search </NavText>
          </Nav>
          <Nav id="sales2">
            <NavIcon>
              <Icon20 size={16} icon={ic_business}/>
            </NavIcon>
            <NavText> Promoter </NavText>
          </Nav>
          <Nav id="products2">
            <NavIcon>
              <Icon20 size={16} icon={ic_business_center}/>
            </NavIcon>
            <NavText> Social Medias </NavText>
          </Nav>
        </SubNav>
        <Nav id="orders">
          <NavIcon>
            <Icon20 icon={ic_format_list_bulleted}/>
          </NavIcon>
          <NavText> Orders </NavText>
        </Nav>
      </SideNav>
    </BaseContainer>
  )
})

