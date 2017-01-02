import React, {Component} from 'react';
import './ApiDetail.css'
class ApiDetail extends Component {
    render() {
        return (
            <div className="api-detail-box">
                <div className="api-detail-panel">
                    <div className="form-group row">
                        <label htmlFor="" className="col-md-2 control-label">资源 : </label>
                        <div className="col-md-5">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="" className="col-md-2 control-label">资源简介 : </label>
                        <div className="col-md-5">
                            <textarea name="" id="" rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-md-2 control-label">接口名称 : </label>
                            <div className="col-md-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-md-2 control-label">接口简介 : </label>
                            <div className="col-md-5">
                                <textarea name="" id="" rows="5" className="form-control"></textarea>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-md-2 control-label">接口地址 : </label>
                            <div className="col-md-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="" className="col-md-2 control-label">接口方法 : </label>
                            <div className="col-md-5">
                                <select name="" id="" className="form-control">
                                    <option value="1">GET</option>
                                    <option value="2">POST</option>
                                    <option value="3">FETCH</option>
                                    <option value="4">DELETE</option>
                                </select>
                            </div>
                        </div>

                        <p>接口参数 : </p>
                        <div className="form-group row">
                            <div className="col-md-offset-1 col-md-2">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-2">
                                <select name="" id="" className="form-control">
                                    <option >参数类型</option>
                                    <option value="1">int</option>
                                    <option value="2">float</option>
                                    <option value="3">json</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select name="" id="" className="form-control">
                                    <option >是否可空</option>
                                    <option value="1">int</option>
                                    <option value="2">float</option>
                                    <option value="3">json</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-offset-1  col-md-2">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-2">
                                <select name="" id="" className="form-control">
                                    <option >参数类型</option>
                                    <option value="1">int</option>
                                    <option value="2">float</option>
                                    <option value="3">json</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <select name="" id="" className="form-control">
                                    <option >是否可空</option>
                                    <option value="1">int</option>
                                    <option value="2">float</option>
                                    <option value="3">json</option>
                                </select>
                            </div>
                            <div className="col-md-2">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>

                    </div>
                    <hr/>
                    <p>测试参数 : </p>
                    <div>
                        <div>
                            <div className="form-group row">
                                <label htmlFor="" className="control-label col-md-2">参数1</label>
                                <div className="col-md-2">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="" className="control-label col-md-2">参数1</label>
                                <div className="col-md-2">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="control-label col-md-2">返回格式</label>
                        <div className="col-md-5">
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApiDetail;
