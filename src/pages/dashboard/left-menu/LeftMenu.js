import React, {Component} from 'react'
import './LeftMenu.css'
import Icon from './icon/Icon'
import Menu from './menu/Menu'
class LeftMenu extends Component {
    render() {
        return (
            <div className="left-menu">
                <div className="icon-box">
                    <Icon/>
                </div>
                <div className="menu-box">
                    <Menu/>
                </div>
            </div>
        );
    }
}

export default LeftMenu;
