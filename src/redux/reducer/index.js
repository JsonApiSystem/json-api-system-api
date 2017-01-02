/**
 * NAME : index
 * USER : FollowWinter
 * DATE : 02/01/2017
 * SUMMARY :
 */
import {USER_LOGIN} from '../actions'
const myApp = (state = [], action) => {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                user: action.user
            }
        }
    }
}
export default myApp