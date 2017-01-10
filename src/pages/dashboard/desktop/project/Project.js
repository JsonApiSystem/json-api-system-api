import React, {Component} from 'react';
import './Project.css'
import ProjectItem from './project-item/ProjectItem'
import evenQueue from 'husky-event-notify'
import Dashboard from '../../Dashboard'
import {projectGet} from '../../../../config/ApiService'
import UserStorage from '../../../../utils/localstorage/UserStorage'
import NewProject from '../../new-project/NewProject'
import Toast from '../../../_component/toast/Toast'
import { Link } from 'react-router'
class Project extends Component {
    static EVENT_NEW_PROJECT = 'EVENT_NEW_PROJECT'

    constructor(props) {
        super(props)
        this.handleOnContextMenu = this.handleOnContextMenu.bind(this)
        this.handleNewProjectBtnClick = this.handleNewProjectBtnClick.bind(this)
        this.state = {
            projects: []
        }

        evenQueue.publish(Project.EVENT_NEW_PROJECT);
        evenQueue.subscribe(Dashboard.EVENT_NEW_PROJECT_PAGE_SHOW, (data) => {
            this.newProjectAdd(data)
        })
        evenQueue.subscribe(NewProject.EVENT_NEW_PROJECT_SURE, (data) => {
            this.newProjectAdd(data)
            evenQueue.run(Toast.EVENT_TOAST_ADD,{
                summary:"创建新项目成功"
            })
        })
        projectGet({
            'user_id': UserStorage.getUserinfo()['id']
        }, (data) => {
            this.setState({
                projects: data
            })
        })
    }

    newProjectAdd(data) {
        this.setState({
            projects: [
                ...this.state.projects,
                data
            ]
        })
    }

    handleNewProjectBtnClick() {
        evenQueue.run(Project.EVENT_NEW_PROJECT)
    }

    handleOnContextMenu() {

    }


    render() {
        return (
            <div className="project">
                <p className="project-group-title">你的项目 <i className=" project-new fa fa-2x fa-plus-circle"
                                                           onClick={this.handleNewProjectBtnClick}/></p>
                <div className="project-group">
                    {this.state.projects.map((item, index) =>
                        <Link to={'/dashboard/desktop/'+item.id}>
                            <div  className="project-item-box" key={index} onContextMenu={this.handleOnContextMenu}>
                                <ProjectItem name={item.name} summary={item.summary}/>
                            </div>
                        </Link>
                    )}
                </div>
                <hr/>
                <p className="project-group-title">你参与的项目</p>
                <div className="project-group">
                    <div className="project-item-box" onContextMenu={this.handleOnContextMenu}>
                        <ProjectItem/>
                    </div>
                    <div className="project-item-box">
                        <ProjectItem/>
                    </div>
                    <div className="project-item-box">
                        <ProjectItem/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;
