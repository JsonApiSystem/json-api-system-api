import React, {Component} from 'react';
import {browserHistory} from 'react-router'
import './NewProject.css'
import eventQueue from 'husky-event-notify'
import {projectCreate} from '../../../config/ApiService'
import UserLocalStorage from '../../../utils/localstorage/UserStorage'
class NewProject extends Component {
    static EVENT_NEW_PROJECT_CANCEL = 'EVENT_NEW_PROJECT_CANCEL'
    static EVENT_NEW_PROJECT_SURE = 'EVENT_NEW_PROJECT_SURE'

    constructor(props) {
        super(props)
        eventQueue.publish(NewProject.EVENT_NEW_PROJECT_CANCEL)
        eventQueue.publish(NewProject.EVENT_NEW_PROJECT_SURE)
        this.handleFormOnchange = this.handleFormOnchange.bind(this)
        this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this)
        this.handleSureBtnClick = this.handleSureBtnClick.bind(this)
        this.state = {
            name: '',
            summary: '',
            createDisable: false
        }
    }

    createToggle() {
        this.setState({
            createDisable: !this.state.createDisable
        })
    }

    handleCancelBtnClick() {
        this.createToggle();
        eventQueue.run(NewProject.EVENT_NEW_PROJECT_CANCEL)
    }

    handleSureBtnClick() {
        let data = {
            name: this.state.name,
            summary: this.state.summary,
            user_id: UserLocalStorage.getUserinfo()['id']
        }
        projectCreate(data, (data) => {
            this.createToggle();
            eventQueue.run(NewProject.EVENT_NEW_PROJECT_SURE, data)
            eventQueue.run(NewProject.EVENT_NEW_PROJECT_CANCEL)
            browserHistory.push("/dashboard/desktop/")

        }, (code) => {
            this.createToggle();
            console.log(code)
        })

    }

    handleFormOnchange(event) {
        let state = this.state
        state[event.target.name] = event.target.value
        this.setState(state)
    }


    render() {
        return (
            <div className="com-new-project">
                <h4 className="title">
                    创建新的项目
                </h4>
                <div className="form-group">
                    <label htmlFor="">项目名称:</label>
                    <input type="text" name="name" className="form-control" onChange={this.handleFormOnchange}
                           value={this.state.name}
                           placeholder="输入项目名称"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">项目名称:</label>
                    <textarea name="summary" id="" cols="30" rows="5"
                              onChange={this.handleFormOnchange} className="form-control summary"
                              placeholder="项目简介">
                    </textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.handleSureBtnClick}>{this.state.createDisable ?
                        <i className="fa fa-spinner fa-spin"/> : ''}保存
                    </button>
                    <button className="btn btn-link" onClick={this.handleCancelBtnClick}>取消</button>
                </div>
            </div>
        );
    }
}

export default NewProject;
