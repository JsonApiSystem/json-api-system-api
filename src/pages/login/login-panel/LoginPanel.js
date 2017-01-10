import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import './LoginPanel.css'
import {userLoginByTel} from '../../../config/ApiService'
import UserStorage from '../../../utils/localstorage/UserStorage'
import eventQueue from 'husky-event-notify'
import Toast from '../../_component/toast/Toast'
class LoginPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tel: '',
            pwd: '',
            loginDisable: false
        }
        this.handleLoginBtnClick = this.handleLoginBtnClick.bind(this)
        this.handleFormOnchange = this.handleFormOnchange.bind(this)
    }

    loginToggle() {
        this.setState({
            loginDisable: !this.state.loginDisable
        })
    }

    handleLoginBtnClick() {
        this.loginToggle()
        userLoginByTel({
                tel: this.state.tel,
                pwd: this.state.pwd
            },
            (data) => {
                this.loginToggle()
                console.log(data)
                UserStorage.setUserinfo(data)
                browserHistory.push("/dashboard")
            }, (code) => {
                this.loginToggle()
                switch (code) {
                    case 201: {

                        eventQueue.run(Toast.EVENT_TOAST_ADD, {
                            summary: "账户或者密码错误"
                        })
                    }
                }
            })

    }

    handleFormOnchange(event) {
        let state = this.state
        state[event.target.name] = event.target.value
        this.setState(state)
    }

    render() {
        return (
            <div className="login-panel">
                <div>
                    <input type="text" name="tel" className="form-control" onChange={this.handleFormOnchange}
                           placeholder="电话" value={this.state.tel}/>
                </div>
                <br/>
                <div>
                    <input type="password" name="pwd" className="form-control" onChange={this.handleFormOnchange}
                           value={this.state.pwd}/>
                </div>
                <br/>
                <div >

                    <button className="btn btn-primary login-btn" onClick={this.handleLoginBtnClick}
                            disabled={this.state.loginDisable}>{this.state.loginDisable ?
                        <i className="fa fa-spinner fa-spin"/> : ''} 登 录
                    </button>
                </div>
            </div>

        );
    }
}

export default LoginPanel;
