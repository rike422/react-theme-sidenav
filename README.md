# react-theme-sidenav

[![npm version](https://badge.fury.io/js/react-theme-sidenav.svg)](https://badge.fury.io/js/react-theme-sidenav)
[![Travis](https://travis-ci.org/rike422/react-theme-sidenav.svg?branch=master&style=flat-square)](https://travis-ci.org/rike422/react-theme-sidenav.svg?branch=master)

Side Navigation Component for React

## In Development Project

## Thanks

This project borrow codes from following projects:

- [react-sidenav](https://github.com/rike422/react-sidenav)

## Usage

Install via npm

```shell
npm install --save react-theme-sidenav
```

Then import it using es6 modules

```javascript
import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-theme-sidenav';
import { TiAnchor, TiBriefcase, TiThListOutline } from "react-icons/lib/ti/index";
const theme = {
    bgColor: '#f5f5f5',
    color: "#222222",
    highlightBgColor: "#00BEEF",
    highlightColor: "#FFF"
}

//specify the base color/background of the parent container if needed
const MySideNav = () => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
        <SideNav defaultSelected='sales' theme={theme}>       
            <Nav id='dashboard'>
                <NavIcon><TiAnchor size={20} /></NavIcon>    
                <NavText> Dashboard </NavText>
            </Nav>
            <Nav id='sales'>
                <NavIcon><TiBriefcase size={20} /></NavIcon>
                <NavText> Sales </NavText>
            </Nav>
        </SideNav>
    </div>
)

```

## Item Selection

To highlight any item selected, you can either let the SideNav instance manage it by specifying **defaultSelected** property,
or by passing **selected** property. If you pass the selected property then the SideNav is in what we say stateless mode.


```javascript
//managed SideNav, state is handled within the component
<SideNav defaultSelected='xyz'>
  ...
</SideNav>
```

```javascript
//stateless SideNav, state is handled within the component
<SideNav selected='xyz'>
  ...
</SideNav>
```

### Item Id

Note that a sub nav id only needs to be unique within its siblings. SideNav automatically uses / to identify sub navigation.

Nav id='sales'
  --- Nav id='list'

We can select list by setting the selected property to 'sales/list'


### Listening to item change

Register an **onItemSelection** props

```javascript
<SideNav selected='xyz' onItemSelection={ (id, parent) => {}}>
  <Nav />
  <Nav />
</SideNav>
```

If its a top level nav, then parent is null.

## Props

### SideNav

| Property        | Description           | Type  |
| ------------- |:-------------:| -----:|
| defaultSelected  | default id of selected item, will auto manage state | string |
| onItemSelection  | function called when an item is clicked (id, parent) | function |


### NavIcon and NavText

These 2 components now support style and className props


## Examples

The source code for the screenshot is under playground/index.jsx


## Development

1. Clone the repo
```shell
git clone https://github.com/rike422/react-theme-sidenav.git
```

2. Run npm install
```shell
cd react-theme-sidenav
npm install
```
3. Run playground script. The script below starts the dev server on port 8080.
```shell
npm run playground -- playground/index.jsx
```
To change the port, pass --port
```shell
npm run playground -- --port=8181 playground/index.jsx
```

## Contributing

Contributions are welcome in any form.
