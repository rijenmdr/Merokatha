import firebase from '../../../firebase/firebase'
import * as actionType from './AuthenticationType'

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
                        dispatch(authFail())
                        history.push('/login')
                    }).catch(err => {
                        console.log(err)
                        dispatch(authFail())
                    })
            }
        })
        .catch(err => {
            console.log(err)
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
            console.log(err)
            dispatch(authFail())
        })
}

export const checkAuthentication = () => dispatch => {
    firebase.auth().onAuthStateChanged(authenticatedUser => {
        console.log(authenticatedUser)
        if (authenticatedUser) {
            const auth_user = {
                uid: authenticatedUser?.uid,
                email: authenticatedUser?.email
            }
            dispatch(loginUserSuccess(auth_user))
        }
    })
}

export const userLogout = () => dispatch => {
    firebase.auth().signOut().then(() => {
        dispatch(logoutSuccess())
        console.log("User Logout Successful")
    }).catch(err => {
        console.log(err)
    })
}