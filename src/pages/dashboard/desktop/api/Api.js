import React, {Component} from 'react';
import './Api.css'
import TopBar from './topbar/TopBar'
import Content from './content/Content'
class Api extends Component {
    render() {
        return (
            <div className="api">
                <div className="top-bar-box">
                    <TopBar/>
                </div>
                <div className="content-box">
                    <Content/>
                </div>
            </div>
        );
    }
}

export default Api;
