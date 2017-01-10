/**
 * NAME : index
 * USER : FollowWinter
 * DATE : 02/01/2017
 * SUMMARY :
 */
import {createStore} from 'redux'
import {USER_LOGIN, INIT_MY_PROJECT, INCREMENT_MY_PROJECT} from '../actions'
const myApp = (state = [], action) => {
    switch (action.type) {

        case INIT_MY_PROJECT: {
            return {
                projects: []
            }
        }
        case INCREMENT_MY_PROJECT: {
            return {
                projects: [
                    ...state.projects,
                    {
                        'name': '111'
                    }
                ]
            }
        }
    }

}

const store = createStore(myApp)
export default  store