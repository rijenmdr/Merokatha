import firebase from '../../../firebase/firebase'
import * as actionType from './AuthenticationType'
import * as actions from '../../../redux/actions'

const db = firebase.firestore()

export const authStart = () => {
    return {
        type: actionType.AUTH_START
    };
};

export const authFail = () => {
    return {
        type: actionType.AUTH_FAIL
    };
};

export const loginUserSuccess = (auth_user) => {
    return {
        type: actionType.LOGIN_USER_DETAIL,
        auth_user: auth_user,
    };
};

export const logoutSuccess = () => {
    return {
        type: actionType.USER_LOGOUT
    }
}

export const registerNewUser = (user, history) => dispatch => {
    dispatch(authStart())
    firebase.auth().createUserWithEmailAndPassword(user?.email, user?.password)
        .then(registeredUser => {
            if (registeredUser) {
                db.collection("users").doc(registeredUser?.user?.uid)
                    .set({
                        full_name: user?.name,
                        email: user?.email
                    }).then((res) => {
                        firebase.auth().signOut()
                        dispatch(actions.setToastState(true,"Success",`User Registered Successfully`))
                        dispatch(authFail())
                        history.push('/login')
                    }).catch(err => {
                        dispatch(actions.setToastState(true,"Error",`${err.message}`))
                        dispatch(authFail())
                    })
            }
        })
        .catch(err => {
            dispatch(actions.setToastState(true,"Error",`${err.message}`))
            dispatch(authFail())
        })
}

export const signInUser = (user, history) => dispatch => {
    dispatch(authStart())
    firebase.auth().signInWithEmailAndPassword(user?.email, user?.password)
        .then(signInUser => {
            const auth_user = {
                uid: signInUser?.user?.uid,
                email: signInUser?.user?.email
            }
            dispatch(loginUserSuccess(auth_user))
            history.push('/')
        })
        .catch(err => {
            dispatch(actions.setToastState(true,"Error",`${err.message}`))
            dispatch(authFail())
        })
}

export const checkAuthentication = () =>dispatch => {
    firebase.auth().onAuthStateChanged(async authenticatedUser => {
        if (authenticatedUser) {
            const auth_user = {
                uid: authenticatedUser?.uid,
                email: authenticatedUser?.email
            }
            const snapshot = await db.collection("users").doc(authenticatedUser.uid).get()
            const data = snapshot.data()
            dispatch(actions.setToastState(true,"Success",`Welcome Back ${data?.full_name}`))
            dispatch(loginUserSuccess(auth_user))
        }
    })
}

export const userLogout = () => dispatch => {
    firebase.auth().signOut().then(() => {
        dispatch(logoutSuccess())
        dispatch(actions.setToastState(true,"Success",`Logout Successful`))
    }).catch(err => {
        dispatch(actions.setToastState(true,"Success",`${err}`))
    })
}