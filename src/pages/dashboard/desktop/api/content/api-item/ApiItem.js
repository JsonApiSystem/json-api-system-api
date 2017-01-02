import React, {Component} from 'react';
import './ApiItem.css'
class ApiItem extends Component {
    render() {
        return (
            <div className="api-item">
                <div className="api-item-info">
                    <p className="api-item-title">USER_LOGIN</p>
                    <p className="api-item-summary">summary</p>
                </div>
                <div className="api-item-state api-item-state-publish">
                    发布
                </div>
            </div>
        );
    }
}

export default ApiItem;
