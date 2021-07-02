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
        const featured_category = await db.collection('featured_category').get()
        let mainListItems = [];
        featured_category && featured_category.forEach(async doc => {
            let newItem = doc.data();
            newItem.id = doc.id;
            if (newItem.category_ref) {
                const category = await newItem.category_ref.get()
                if (category) {
                    newItem.userData = category.data()
                    mainListItems.push(newItem);
                } else {
                    console.log("Error")
                }
                dispatch(fetchFeaturedCategoriesSucess(mainListItems))
            } else {
                mainListItems = [];
                dispatch(fetchFeaturedCategoriesSucess(mainListItems))
            }

        });
    } catch (error) {
        console.log(error)
    }
}

export const fetchFeaturedStories = () => async dispatch => {
    try {
        const featuredStories = await db.collection('featured_stories').get()
        let featuredStoriesList = []
        if (featuredStories) {
            featuredStories.forEach(async doc => {
                let newItem = doc.data()
                newItem.id = doc.id
                if (newItem.story_ref) {
                    const story = await newItem.story_ref.get()
                    newItem.storyData = story.data()
                    if (newItem.storyData.category_ref) {
                        const category = await newItem.storyData.category_ref.get()
                        newItem.category = category.data()
                    }
                    featuredStoriesList.push(newItem)
                    dispatch(fetchFeaturedStoriesSuccess(featuredStoriesList))
                }
            })
        }
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
            if (newItem.category_ref && newItem.user_ref) {
                const category = await newItem.category_ref.get()
                newItem.category = category.data()
                const author = await newItem.user_ref.get()
                newItem.author = author.data()
                dailyStories.push(newItem)
                dispatch(fetchDailyStoriesSuccess(dailyStories))
            }
        })
    }
    catch (error) {
        console.log(error)
    }
}