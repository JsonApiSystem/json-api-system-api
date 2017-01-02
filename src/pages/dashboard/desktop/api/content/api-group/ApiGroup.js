import React, {Component} from 'react';
import './ApiGroup.css'
import ApiItem from '../api-item/ApiItem'

class ApiGroup extends Component {
    render() {
        return (
            <div className="api-group">
                <div>
                    <div className="api-group-count-box">
                        <p className="api-group-count">22/<span className="api-group-count-all">30</span></p>
                    </div>
                    <div className="api-group-title-box">
                        <p className="api-group-title">管理端</p>
                        <p className="api-group-summary">这是管理端啊管理端</p>
                    </div>
                    <div className="api-group-op-box">
                        <i className="fa fa-chevron-circle-down "></i>
                    </div>
                </div>

                <div className="api-item-box">
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                    <ApiItem/>
                </div>
            </div>
        );
    }
}

export default ApiGroup;
