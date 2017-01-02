import React, {Component} from 'react';
import './Desktop.css'
import Api from './api/Api'
class Desktop extends Component {
    render() {
        return (
            <div className="desktop">
                <Api></Api>
                {this.props.children}
            </div>
        );
    }
}

export default Desktop;
