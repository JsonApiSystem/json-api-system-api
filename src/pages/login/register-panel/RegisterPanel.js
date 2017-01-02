import React, {Component} from 'react';
import './RegisterPane.css'
class RegisterPanel extends Component {
    render() {
        return (
            <div className="register-panel">
                <div>
                    <input type="text" className="form-control" placeholder="电话号码"/>
                </div>
                <br/>
                <div className="register-panel-check-box row">
                    <div className="col-md-6  col-sm-6">
                        <input type="text" className="form-control" placeholder="验证码"/>
                    </div>
                    <button className="btn btn-link col-md-6  col-sm-6">获取验证码</button>
                </div>

                <br/>

                <div >
                    <button className="btn btn-danger login-btn">登 录</button>
                </div>
            </div>
        );
    }
}

export default RegisterPanel;
