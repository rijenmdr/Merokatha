import * as actionType from './ContactType'

const intialState={
    allPartners : []
}

const homeReducer = (state=intialState,actions) =>{
    switch(actions.type){
        case actionType.FETCH_ALL_PARTNERS:
            return {
                ...state,
                allPartners:actions.allPartners
            }
        default:
            return state
    }
}

export default homeReducer