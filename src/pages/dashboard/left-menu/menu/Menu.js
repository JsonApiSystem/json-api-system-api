import React, { Component } from 'react'
import './Menu.css'

import MenuItem from './menu-item/MenuItem'
class Menu extends Component {
  render() {
    return (
      <div >
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
      </div>
    );
  }
}

export default Menu;
