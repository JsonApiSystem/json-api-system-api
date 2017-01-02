import Http from '../utils/http/Http'
import {USER_LOGIN_TEL} from './ApiConfig'

export function userLoginByTel(data, success, failure, error = '') {
    Http.post(USER_LOGIN_TEL, data, success, failure, error)
}

