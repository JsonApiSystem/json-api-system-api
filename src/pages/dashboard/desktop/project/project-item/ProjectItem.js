import React, {Component} from 'react';
import './ProjectItem.css'
class ProjectItem extends Component {
    render() {
        return (
            <div className="project-item">
                <p className="project-name">name</p>
                <p className="project-summary">summary</p>
            </div>
        );
    }
}

export default ProjectItem;
