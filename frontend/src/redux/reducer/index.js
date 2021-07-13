import {combineReducers} from 'redux'
import HomeReducer from '../../entities/Landing/views/Home/services/HomeReducer'
import AuthenticationReducer from '../../entities/Authentication/services/AuthenticationReducer'

export default combineReducers({
    HomeReducer,
    AuthenticationReducer
})