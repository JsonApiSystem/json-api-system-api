import React, {Component} from 'react';
import './ApiDetail.css'
import '../../../../../public/css/utils.scss'
class ApiDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render() {
        if (this.state.show) {
            return (
                <div className="com-api-detail">
                    <div className="box-api-panel">
                        <div>
                            <label htmlFor="" className="box-2">接口名称 : </label>
                            <div className="box-8">
                                <input type="text" className="form-control"/>

                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null
        }
    }
}

export default ApiDetail;
