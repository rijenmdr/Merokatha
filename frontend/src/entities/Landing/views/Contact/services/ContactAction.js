import firebase from '../../../../../firebase/firebase'
import * as actionType from './ContactType'
import * as actions from '../../../../../redux/actions'

const db = firebase.firestore()

export const fetchAllPartnerSuccess = (allPartners) => {
    return {
        type:actionType.FETCH_ALL_PARTNERS,
        allPartners:allPartners
    }
}

export const sendContactInfo = (contactInfo) => dispatch =>{
    dispatch(actions.setLoading(true))
    db.collection('contacts').doc()
    .set(contactInfo)
    .then(()=>{
        dispatch(actions.setToastState(true,"Success","Thanks for contacting us. We will be in touch very soon."))
        dispatch(actions.setLoading(false))
    })
    .catch(err=>{
        dispatch(actions.setToastState(true,"Error",`${err}`))
        dispatch(actions.setLoading(false))
    })
}

export const fetchAllPartners = () =>async dispatch => {
    let allPartners = []
    try{
       const partners = await db.collection('partners').get()
       partners.docs.forEach(item=>allPartners.push(item.data()))
       dispatch(fetchAllPartnerSuccess(allPartners))
    }
    catch(err){
        dispatch(actions.setToastState(true,"Error",`${err}`))
    }
}
