import React, {Component} from 'react';
import './ProjectConfig.css'
class ProjectConfig extends Component {
    render() {
        return (
            <div className="project-config-box">
                <div className="project-config-panel">
                    <div className="form-group row">
                        <label className="col-md-2 col-sm-2">项目名称 :</label>
                        <div className="col-md-5 col-sm-5">
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" col-md-2 col-sm-2">项目简介 :</label>
                        <div className="col-md-5 col-sm-5">
                            <textarea className="form-control" rows="5"></textarea>
                        </div>
                    </div>
                    <hr/>
                    <p>全局路径</p>
                    <div>
                        <div className="form-group row">
                            <label className="  col-sm-offset-1 col-md-offset-1 col-md-2 col-sm-2"><input type="checkbox"/> 路径1 : </label>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" col-sm-offset-1  col-md-offset-1 col-md-2 col-sm-2"><input type="checkbox"/> 路径2 :</label>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" col-sm-offset-1  col-md-offset-1 col-md-2 col-sm-2"><input type="checkbox"/> 路径3 :</label>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className=" col-sm-offset-1  col-md-offset-1 col-md-2 col-sm-2"><input type="checkbox"/> 路径4 :</label>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>

                    </div>
                    <p>全局参数</p>
                    <div>
                        <div className="form-group row">
                            <label className="col-md-2 col-sm-2">参数 1 : </label>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-md-2 col-sm-2">参数 2 : </label>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-5 col-sm-5">
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectConfig;
