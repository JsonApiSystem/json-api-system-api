import React, {Component} from 'react';
import './Api.css'
import TopBar from './topbar/TopBar'
import Content from './content/Content'
class Api extends Component {
    render() {
        return (
            <div className="com-api">
                <div className="box-top-bar">
                    <TopBar/>
                </div>
                <div className="box-content">
                    <Content/>
                </div>
            </div>
        );
    }
}

export default Api;
