import React, {Component} from 'react';
import './Desktop.css'
import Api from './api/Api'
import Store from '../../../store/Store'
import eventQueue from 'husky-event-notify'
import ApiDetail from './api-detail/ApiDetail'
import ProjectConfig from './project-config/ProjectConfig'
class Desktop extends Component {
    static EVENT_API_DETAIL_PAGE_SHOW = 'EVENT_API_DETAIL_PAGE_SHOW'
    static EVENT_PROJECT_CONFIG_PAGE_SHOW = 'EVENT_PROJECT_CONFIG_PAGE_SHOW'

    constructor(props) {
        super(props)
        Store.project_id = props.params['id']
        this.state = {
            show: 0
        }
        this.handlePanelBgClick = this.handlePanelBgClick.bind(this)
        eventQueue.publish(Desktop.EVENT_API_DETAIL_PAGE_SHOW)
        eventQueue.publish(Desktop.EVENT_PROJECT_CONFIG_PAGE_SHOW)
        eventQueue.subscribe(Desktop.EVENT_API_DETAIL_PAGE_SHOW, (data) => {
            this.setState({
                show: 1,
                api: data
            })
        })
        eventQueue.subscribe(Desktop.EVENT_PROJECT_CONFIG_PAGE_SHOW, (data) => {
            this.setState({
                show: 2,
                config: data
            })
        })
    }

    handlePanelBgClick(event) {
        this.setState({
            show: 0
        })
    }

    render() {
        return (
            <div className="com-desktop">
                <div className="box-panel">
                    {
                        this.state.show == 0 ? null :
                            (this.state.show == 1 ?
                                <div className="box-panel">
                                    <div className="close-panel">
                                        <i className="fa fa-arrow-circle-right fa-3x" onClick={this.handlePanelBgClick}/>
                                    </div>
                                    <ApiDetail api={this.state.api}/>
                                </div> :
                                <div className="box-panel" onClick={this.handlePanelBgClick}>
                                    <i className="fa fa-arrow-circle-right fa-3x close-panel"
                                       onClick={this.handlePanelBgClick}/>
                                    <ProjectConfig config={this.state.config}/>
                                </div>)
                    }
                </div>
                <div className="box-api">
                    <Api></Api>
                </div>
            </div>
        );
    }
}

export default Desktop;
