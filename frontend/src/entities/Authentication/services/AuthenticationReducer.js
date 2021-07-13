import * as actionType from './AuthenticationType'

const initialState = {
    auth_user: {},
    loading: false,
    isLoggedIn: false
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case actionType.AUTH_START:
            return {
                ...state,
                loading: true
            }
        case actionType.AUTH_FAIL:
            return initialState
        case actionType.LOGIN_USER_DETAIL:
            return {
                ...state,
                auth_user: actions.auth_user,
                isLoggedIn: true,
                loading: false
            };
        case actionType.USER_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                auth_user: {}
            }
        default:
            return state
    }
}

