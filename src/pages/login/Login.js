import React, {Component} from 'react';
import './Login.css'
import {Link} from 'react-router'
import LoginThird from './login-third/LoginThird'
class Login extends Component {
    render() {
        return (
            <div className="login-page-box">
                <div className="login-box">
                    <div className="login-tab">
                        <Link to="/login/normal" activeClassName={'tab_active'}>登录</Link>
                        <Link to="/login/quick" activeClassName={'tab_active'}>快捷登录/注册</Link>
                    </div>
                    <div className="login-content">
                        {this.props.children}
                    </div>
                    <LoginThird/>
                </div>
            </div>
        );
    }
}

export default Login;
