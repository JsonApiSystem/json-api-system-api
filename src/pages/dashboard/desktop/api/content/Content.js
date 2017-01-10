import React, {Component} from 'react';
import './Content.css'
import ApiGroup from './api-group/ApiGroup'
import {projectGroupGet} from '../../../../../config/ApiService'
import Store from '../../../../../store/Store'
import eventQueue from 'husky-event-notify'
import NewApi from './api-group/new-api/NewApi'

class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            groups: []
        }
        this.initProjectApi()
        // eventQueue.subscribe(NewApi.EVENT_API_CREATE_SAVE, () => {
        //     this.initProjectApi()
        // })
    }

    initProjectApi() {
        projectGroupGet({
            project_id: Store.project_id
        }, (data) => {
            this.setState({
                groups: data
            })
        }, (code) => {

        })
    }


    render() {
        return (
            <div className="com-content">
                {
                    this.state.groups.map((item, index) => (
                        <div className="box-api-group" key={index}>
                            <ApiGroup group={item}></ApiGroup>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Content;
