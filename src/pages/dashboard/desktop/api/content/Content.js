import React, {Component} from 'react';
import './Content.css'
import ApiGroup from './api-group/ApiGroup'
class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
                <div className="api-group-box">
                    <ApiGroup></ApiGroup>
                </div>
            </div>
        );
    }
}

export default Content;
