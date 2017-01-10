import React, {Component} from 'react';
import './ApiItem.css'
import {Link} from 'react-router'
import eventQueue from 'husky-event-notify'
import Desktop from '../../../Desktop'
class ApiItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            api: props.api
        }
        this.handleApiItemClick=this.handleApiItemClick.bind(this)
    }
    handleApiItemClick(){
        eventQueue.run(Desktop.EVENT_API_DETAIL_PAGE_SHOW,{api_id:this.state.api.id})
    }
    render() {
        return (
            <div className="api-item" onClick={this.handleApiItemClick}>
                <div className="api-item-info">
                    <p className="api-item-title">{this.state.api.name}</p>
                    <p className="api-item-summary">{this.state.api.summary}</p>
                </div>
                <div className="api-item-state api-item-state-publish">
                    发布
                </div>
            </div>
        );
    }
}

export default ApiItem;
