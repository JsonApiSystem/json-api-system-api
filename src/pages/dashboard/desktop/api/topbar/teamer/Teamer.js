import React, {Component} from 'react';
import './Teamer.css'
class Teamer extends Component {
    render() {
        return (
            <div className="teamer">
                <div className="teamer-item">
                    <img src="/icon.jpg" alt="" className="teamer-icon"/>
                    <div className="teamer-state teamer-online"></div>
                </div>
                <div className="teamer-item">
                    <img src="/icon.jpg" alt="" className="teamer-icon"/>
                    <div className="teamer-state teamer-online"></div>
                </div>
                <div className="teamer-item">
                    <img src="/icon.jpg" alt="" className="teamer-icon"/>
                    <div className="teamer-state teamer-online"></div>
                </div>
                <div className="teamer-item">
                    <img src="/icon.jpg" alt="" className="teamer-icon"/>
                    <div className="teamer-state teamer-online"></div>
                </div>
            </div>
        );
    }
}

export default Teamer;
