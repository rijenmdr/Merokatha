import React, { useState } from 'react'
import './Authentication.scss'
import AuthenticationBackground from './components/AuthenticationBackground/AuthenticationBackground'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useHistory } from 'react-router-dom'
import * as actions from '../../redux/actions'
import Loader from '../../components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import Toast from '../../components/Toast/Toast'

const ForgetPassword = () => {
    const authenticationReducer = useSelector(state => state.AuthenticationReducer)
    const { loading } = authenticationReducer

    const dispatch = useDispatch()
    const history = useHistory()

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
        mode: "onBlur"
    });

    const submitEmail = (data) => {
        dispatch(actions.forgetPassword(data,history))
    };
    return (
        <div className="authentication-layout d-flex">
            <Toast/>
            {
                loading && <Loader />
            }
            <AuthenticationBackground />
            <div method="post" className="authentication-right d-flex flex-column">
                <div className="square-box-filled"></div>
                <div className="title">Password Reset!</div>
                <div className="auth-message mt-20">
                   Enter your email address that you used to register.
                   We will send you an email with link to reset your password.
                </div>
                <div className="auth-form mt-40 d-flex flex-column">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <div className="input-control">
                            <input
                                type="email"
                                className={`${errors && errors.email && 'validate-error'}`}
                                placeholder="Enter your email address"
                                name="email"
                                {...register("email", {
                                    required: "Email  is required.",
                                    pattern: {
                                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Please ensure email is valid.',
                                    }
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="email"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className={'error'}>{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>
                    <div className="d-flex">
                        <button 
                            onClick={()=>history.goBack()}  
                            className="btn cancel-btn flex-1 mr-10">
                            Cancel
                        </button>
                        <button 
                            onClick={handleSubmit(submitEmail)} 
                            type="submit" 
                            className="btn auth-btn flex-1">
                            Send
                        </button>
                    </div>
                    <div className="log-or-signup-mes mt-20 text-center">
                        Don’t have an account?<a href="/signup" className="bold pointer dark-text-color"> Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
