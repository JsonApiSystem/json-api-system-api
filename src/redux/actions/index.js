/**
 * NAME : index
 * USER : FollowWinter
 * DATE : 02/01/2017
 * SUMMARY :
 */
export const USER_LOGIN = 'USER_LOGIN'
export const userLogin = (user) => {
    return {
        type: USER_LOGIN,
        user: user
    }
}