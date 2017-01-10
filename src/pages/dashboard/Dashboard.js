import React, {Component} from 'react';
import LeftMenu from './left-menu/LeftMenu'
import './Dashboard.css'
import NewProject from './new-project/NewProject'
import evenQueue from 'husky-event-notify'
import Project from './desktop/project/Project'
class Dashboard extends Component {
    static EVENT_NEW_PROJECT_PAGE_SHOW = 'EVENT_NEW_PROJECT_PAGE_SHOW'

    constructor(props) {
        super(props)
        evenQueue.publish(Dashboard.EVENT_NEW_PROJECT_PAGE_SHOW)
        this.state = {
            newProjectShow: false
        }
        evenQueue.subscribe(Project.EVENT_NEW_PROJECT, () => {
            this.setState({
                newProjectShow: true
            })
        })
        evenQueue.subscribe(NewProject.EVENT_NEW_PROJECT_CANCEL, () => {
            this.setState({
                newProjectShow: false
            })
        })
    }


    render() {
        return (
            <div>
                {this.state.newProjectShow === true ?
                    <div className="box-new-project">
                        <NewProject/>
                    </div> : null}
                <div className="left-menu-box">
                    <LeftMenu/>
                </div>
                <div className="desktop-box summary">
                    {this.props.children}
                </div>

            </div>
        );
    }
}

export default Dashboard;
