import {combineReducers} from 'redux'
import HomeReducer from '../../entities/Landing/views/Home/services/HomeReducer'
import AuthenticationReducer from '../../entities/Authentication/services/AuthenticationReducer'
import utilReducer from '../../components/Toast/services/ToastReducer'

export default combineReducers({
    HomeReducer,
    AuthenticationReducer,
    utilReducer
})