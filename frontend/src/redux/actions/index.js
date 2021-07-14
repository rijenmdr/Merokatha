export {
    fetchFeaturedCategories,
    fetchFeaturedStories,
    fetchDailyStories
} from '../../entities/Landing/views/Home/services/HomeAction';

export {
    registerNewUser,
    signInUser,
    authStart,
    authFail,
    checkAuthentication,
    userLogout
} from '../../entities/Authentication/services/AuthenticationAction';

export {
    setToastState
} from '../../components/Toast/services/ToastAction'