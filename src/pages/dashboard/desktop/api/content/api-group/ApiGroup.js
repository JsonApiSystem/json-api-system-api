import React, {Component} from 'react';
import './ApiGroup.css'
import ApiItem from '../api-item/ApiItem'
import NewApi from './new-api/NewApi'
import eventQueue from 'husky-event-notify'
import Store from '../../../../../../store/Store'


class ApiGroup extends Component {

    static EVENT_NEW_API_PAGE_SHOW = 'EVENT_NEW_API_PAGE_SHOW'

    constructor(props) {
        super(props)
        this.state = {
            group: this.props.group,
            num: this.validApiCount(),
            showApiCreate: false
        }
        this.handleCreateNewApiClick = this.handleCreateNewApiClick.bind(this)
        eventQueue.publish(ApiGroup.EVENT_NEW_API_PAGE_SHOW)
        eventQueue.subscribe(ApiGroup.EVENT_NEW_API_PAGE_SHOW, (data) => {
            if(this.state.showApiCreate){
                this.setState({
                    showApiCreate: false
                })
            }

        })
        eventQueue.subscribe(NewApi.EVENT_API_CREATE_SAVE, (data) => {
            let group = this.state.group
            group.apis = [
                ...group.apis,
                data
            ]
            this.setState({
                group: group
            })
            // console.log(group)
            this.setState({
                showApiCreate: false
            })
        })
        eventQueue.subscribe(NewApi.EVENT_API_CREATE_CANCEL, (data) => {
            this.setState({
                showApiCreate: false
            })
        })
    }

    handleCreateNewApiClick() {
        eventQueue.run(ApiGroup.EVENT_NEW_API_PAGE_SHOW)
        this.setState({
            showApiCreate: true
        })
        Store['group_id'] = this.state.group.id
    }

    apiCreateToggle() {
        this.setState({
            showApiCreate: !this.state.showApiCreate
        })
    }

    validApiCount() {
        let count = 0
        for (let i = 0; i < this.props.group.apis.length; i++) {
            if (this.props.group.apis[i].state == 1) {
                count++
            }
        }
        return count
    }

    render() {
        return (
            <div className="api-group">
                <div>
                    <div className="api-group-count-box">
                        <p className="api-group-count">{this.state.num}/<span
                            className="api-group-count-all">{this.state.group.apis.length}</span></p>
                    </div>
                    <div className="api-group-title-box">
                        <p className="api-group-title">{this.state.group.name}</p>
                        <p className="api-group-summary">{this.state.group.summary}</p>
                    </div>
                    <div className="api-group-op-box">
                        <i className="fa fa-chevron-circle-down "/>
                    </div>
                </div>

                {
                    this.state.group.apis.map((item, index) => (
                        <div className="api-item-box" key={index}>
                            <ApiItem api={item}/>
                        </div>
                    ))
                }
                <div className="box-create-api">
                    {
                        this.state.showApiCreate == true
                            ? <NewApi/> :
                            <p className="create-api" onClick={this.handleCreateNewApiClick}><i
                                className="fa fa-plus-circle"/> 新建api</p>
                    }
                </div>
            </div>
        );
    }
}

export default ApiGroup;
