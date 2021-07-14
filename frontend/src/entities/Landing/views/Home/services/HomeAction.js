import firebase from '../../../../../firebase/firebase'
import * as actionType from './HomeTypes'

const db = firebase.firestore()

const fetchFeaturedCategoriesSucess = (featuredCategories) => {
    return {
        type: actionType.GET_FEATURED_CATEGORIES,
        featuredCategories: featuredCategories
    }
}

const fetchFeaturedStoriesSuccess = (featuredStories) => {
    return {
        type: actionType.GET_FEATURED_STORIES,
        featuredStories: featuredStories
    }
}

export const fetchDailyStoriesSuccess = (dailyStories) => {
    return {
        type: actionType.GET_DAILY_STORIES,
        dailyStories: dailyStories
    }
}

export const fetchFeaturedCategories = () => async (dispatch) => {
    try {
        const featured_category = await db.collection('category').where("is_featured",'==',true).get()
        let mainListItems = [];
        featured_category && featured_category.forEach(doc => {
            let newItem = doc.data();
            newItem.id = doc.id;
            mainListItems.push(newItem)
        });
        dispatch(fetchFeaturedCategoriesSucess(mainListItems))
    } catch (error) {
        console.log(error)
    }
}

export const fetchFeaturedStories = () => async dispatch => {
    try {
        const featuredStories = await db.collection('stories').where("is_featured",'==',true).get()
        let featuredStoriesList = []
        featuredStories && featuredStories.forEach(doc => {
            let newItem = doc.data()
            newItem.id = doc.id
            featuredStoriesList.push(newItem)
        })
        dispatch(fetchFeaturedStoriesSuccess(featuredStoriesList))
    }
    catch (error) {
        console.log(error)
    }

}

export const fetchDailyStories = () => async dispatch => {
    try {
        const stories = await db.collection("stories").limit(4).get()
        let dailyStories = []
        stories.forEach(async doc => {
            let newItem = doc.data()
            newItem.id = doc.id
            dailyStories.push(newItem)
        })
        dispatch(fetchDailyStoriesSuccess(dailyStories))
    }
    catch (error) {
        console.log(error)
    }
}