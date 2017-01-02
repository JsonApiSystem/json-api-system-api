import React, {Component} from 'react';
import LeftMenu from './left-menu/LeftMenu'
import './Dashboard.css'
class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="left-menu-box">
                    <LeftMenu/>
                </div>
                <div className="desktop-box">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Dashboard;
