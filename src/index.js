import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, browserHistory} from 'react-router'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.css'
import '../public/font/css/font-awesome.min.css'
import App from './pages/App'
import LoginPanel from  './pages/login/login-panel/LoginPanel'
import RegisterPanel from  './pages/login/register-panel/RegisterPanel'
import ApiDetail from './pages/dashboard/desktop/api-detail/ApiDetail'
import Desktop from './pages/dashboard/desktop/Desktop'
import {createStore} from 'redux'
import ProjectConfig from './pages/dashboard/desktop/project-config/ProjectConfig'
import {Provider} from 'react-redux';
import Project from './pages/dashboard/desktop/project/Project'

import reducer from './redux/reducer/index'

const routes = {
    path: '/',
    component: App,
    indexRoute: {component: App},
    childRoutes: [
        {
            path: 'login',
            component: Login,
            indexRoute: {component: LoginPanel},
            childRoutes: [
                {
                    path: 'normal',
                    component: LoginPanel
                },
                {
                    path: 'quick',
                    component: RegisterPanel
                }
            ]
        },
        {
            path: 'dashboard',
            component: Dashboard,
            indexRoute: {component: Project},
            childRoutes: [
                {
                    path: 'project',
                    component: Project
                },
                {
                    path: 'desktop',
                    component: Desktop,
                    childRoutes: [
                        {
                            path: 'detail',
                            component: ApiDetail
                        },
                        {
                            path: 'config',
                            component: ProjectConfig
                        }
                    ]
                }
            ]
        },

    ]
}
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')

);
