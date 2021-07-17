export {
    fetchFeaturedCategories,
    fetchFeaturedStories,
    fetchDailyStories,
    setLoading
} from '../../entities/Landing/views/Home/services/HomeAction';

export {
    registerNewUser,
    signInUser,
    loginWithOtherAccount,
    authStart,
    authFail,
    checkAuthentication,
    userLogout,
    forgetPassword
} from '../../entities/Authentication/services/AuthenticationAction';

export {
    setToastState
} from '../../components/Toast/services/ToastAction';

export {
    sendContactInfo,
    fetchAllPartners
} from '../../entities/Landing/views/Contact/services/ContactAction';