import React, { Component } from 'react'
import './MenuItem.css'
class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item">
        <i className="fa fa-th fa-2x"></i>
        <p>项目</p>
      </div>
    );
  }
}

export default MenuItem;
