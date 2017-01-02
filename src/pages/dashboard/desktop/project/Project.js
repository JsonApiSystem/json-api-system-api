import React, {Component} from 'react';
import './Project.css'
import ProjectItem from './project-item/ProjectItem'
class Project extends Component {
    constructor(props) {
        super(props)
        this.handleOnContextMenu = this.handleOnContextMenu.bind(this)
    }

    handleOnContextMenu() {

    }

    render() {
        return (
            <div className="project">
                <p className="project-group-title">你的项目</p>
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
