import React, { useEffect } from 'react'
import './Contact.scss'
import { useForm } from 'react-hook-form'
import ContactForm from '../../components/ContactForm/ContactForm'
import ContactInfo from '../../components/ContactInfo/ContactInfo'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../redux/actions'
import Loader from '../../../../components/Loader/Loader'

const Contact = () => {
    const dispatch = useDispatch()

    const homeReducer = useSelector(state => state.HomeReducer)
    const { isLoading } = homeReducer

    const contactReducer = useSelector(state => state.contactReducer)
    const { allPartners } = contactReducer

    const authenticationReducer = useSelector(state => state.AuthenticationReducer)
    const { auth_user, isLoggedIn } = authenticationReducer

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        criteriaMode: 'all',
        mode: "onBlur",
    });

    const submitContactInfo = (data) => {
        dispatch(actions.sendContactInfo(data))
        if (isLoggedIn) {
            reset({
                phone: "",
                message: ""
            })
        } else {
            reset({
                name: "",
                email: "",
                phone: "",
                message: ""
            })
        }
    }

    useEffect(() => {
        if (auth_user) {
            setValue("name", auth_user.name)
            setValue("email", auth_user.email)
        }
    }, [auth_user])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        dispatch(actions.fetchAllPartners())
    }, [])

    return (
        <div className="contact-layout mb-40">
            {
                isLoading && <Loader />
            }
            <div className="background-image d-flex align-center relative">
                <ContactForm
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    submitContactInfo={submitContactInfo}
                    isLoggedIn={isLoggedIn}
                />
                <div className="contact-info d-flex flex-column absolute">
                    <ContactInfo />
                </div>
            </div>
            <div className="partners d-flex justify-between flex-wrap">
                {
                    allPartners && allPartners.map(partner => (
                        <a href={`${partner.page_url}`} target="_blank">
                            <img className="partner" src={partner.img_url} alt={`${partner.name}`} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Contact
