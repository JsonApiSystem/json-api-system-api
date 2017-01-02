import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import './LoginPanel.css'
import {userLoginByTel} from '../../../config/ApiService'
import UserStorage from '../../../utils/localstorage/UserStorage'
class LoginPanel extends Component {

    constructor(props) {
        super(props)
        this.handleLoginBtnClick = this.handleLoginBtnClick.bind(this)
    }

    handleLoginBtnClick() {
        userLoginByTel({
                'type': 'TEL',
                'tel': '1',
                'pwd': '123'
            },
            (data) => {
                UserStorage.setUserinfo(data)
                browserHistory.push("/dashboard")
            }
        )
    }

    render() {
        return (
            <div className="login-panel">
                <div>
                    <input type="text" className="form-control" placeholder="电话"/>
                </div>
                <br/>
                <div>
                    <input type="password" className="form-control"/>
                </div>
                <br/>
                <div >
                    <button className="btn btn-danger login-btn" onClick={this.handleLoginBtnClick}>登 录</button>
                </div>
            </div>

        );
    }
}

export default LoginPanel;
