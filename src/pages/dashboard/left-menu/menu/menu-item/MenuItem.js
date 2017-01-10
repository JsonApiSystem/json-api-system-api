import React, { Component } from 'react'
import './MenuItem.css'
import {Link} from 'react-router'
class MenuItem extends Component {
    constructor(props){
        super(props)
        this.state={
            link:props.link,
            name:props.name,
            icon:props.icon
        }
    }
  render() {
    return (
      <div className="menu-item">
        <Link to={this.state.link}>
            <i className={'fa fa-'+this.state.icon+' fa-2x'}/>
            <p>{this.state.name}</p>
        </Link>
      </div>
    );
  }
}

export default MenuItem;
