import React, {Component} from 'react';
import './NewApi.css'
import eventQueue from 'husky-event-notify'
import {apiCreate} from '../../../../../../../config/ApiService'
import Store from '../../../../../../../store/Store'

class NewApi extends Component {
    static EVENT_API_CREATE_SAVE = 'EVENT_API_CREATE_SAVE'
    static EVENT_API_CREATE_CANCEL = 'EVENT_API_CREATE_CANCEL'

    constructor(props) {
        super(props)
        eventQueue.publish(NewApi.EVENT_API_CREATE_SAVE)
        this.state={
            name:'',
            summary:''
        }
        this.handleCancelClick=this.handleCancelClick.bind(this)
        this.handleFormChange=this.handleFormChange.bind(this)
        this.handleSaveClick=this.handleSaveClick.bind(this)
    }

    handleFormChange(event) {
        let data = this.state
        data[event.target.name] = event.target.value
        this.setState(data)
    }

    handleSaveClick() {
        apiCreate({
            name: this.state.name,
            summary: this.state.summary,
            project_id: Store['project_id'],
            group_id: Store['group_id']
        },(data)=>{
            eventQueue.run(NewApi.EVENT_API_CREATE_SAVE,data)
        },(code)=>{
            console.log(code)
        })
    }

    handleCancelClick() {
        eventQueue.run(NewApi.EVENT_API_CREATE_CANCEL)
    }

    render() {
        return (
            <div className="com-new-api">
                <div>
                    <input type="text" name="name" className="form-control name" placeholder="接口名称"
                           value={this.state.name} onChange={this.handleFormChange}/>
                    <input type="text" name="summary" className="form-control summary" placeholder="接口简介"
                           value={this.state.summary} onChange={this.handleFormChange}/>
                </div>
                <div>
                    <button className="btn btn-primary" onClick={this.handleSaveClick}>保存</button>
                    <button className="btn btn-link" onClick={this.handleCancelClick}>取消</button>
                </div>
            </div>
        );
    }
}

export default NewApi;
