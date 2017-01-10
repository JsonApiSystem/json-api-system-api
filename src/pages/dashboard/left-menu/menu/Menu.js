import React, { Component } from 'react'
import './Menu.css'

import MenuItem from './menu-item/MenuItem'
class Menu extends Component {
  render() {
    return (
      <div >
          <MenuItem name="项目"  link="/dashboard/project" icon="reorder"/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
      </div>
    );
  }
}

export default Menu;
