const USER_INFO = 'USER_INFO'
class UserStorage {

    setUserinfo(userinfo) {
        localStorage.setItem(USER_INFO, JSON.stringify(userinfo))
    }

    getUserinfo() {
        return JSON.parse(localStorage.getItem(USER_INFO))
    }
}
export default new UserStorage()