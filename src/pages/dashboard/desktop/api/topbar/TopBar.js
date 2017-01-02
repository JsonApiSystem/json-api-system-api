import React, {Component} from 'react';
import './TopBar.css'
import Teamer from './teamer/Teamer'
class TopBar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-title">
                    <p className="title">API接口列表</p>

                </div>
                <div className="teamer-box">
                    <Teamer/>
                </div>
            </div>
        );
    }
}

export default TopBar;
