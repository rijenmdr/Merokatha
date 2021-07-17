import * as actionType from './HomeTypes'

const intialState={
    featuredCategories:[],
    featuredStories:[],
    dailyStories:[],
    isLoading:false
}

const homeReducer = (state=intialState,actions) =>{
    switch(actions.type){
        case actionType.GET_FEATURED_CATEGORIES:
            return {
                ...state,
                featuredCategories:actions.featuredCategories
            }
        case actionType.GET_FEATURED_STORIES:
            return {
                ...state,
                featuredStories:actions.featuredStories
            }
        case actionType.GET_DAILY_STORIES:
            return {
                ...state,
                dailyStories:actions.dailyStories
            }
        case actionType.SET_LOADING:
            return {
                ...state,
                isLoading:actions.isLoading
            }
        default:
            return state
    }
}

export default homeReducer