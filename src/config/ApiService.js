import Http from '../utils/http/Http'
import {USER_LOGIN_TEL, PROJECT_CREATE,PROJECT_GET,PROJECT_GROUP_GET,API_CREATE} from './ApiConfig'

export function userLoginByTel(data, success, error = '') {
    Http.post(USER_LOGIN_TEL, data, success, error)
}
export function projectGet(data, success, error = '') {
    Http.post(PROJECT_GET, data, success, error)
}

export function projectCreate(data, success, error = '') {
    Http.post(PROJECT_CREATE, data, success, error)
}

export function projectGroupGet(data,success,error='') {
    Http.post(PROJECT_GROUP_GET, data, success, error)
}

export function apiCreate(data, success, error = '') {
    Http.post(API_CREATE, data, success, error)

}

