import React, { useState } from 'react'
import AuthenticationBackground from './components/AuthenticationBackground/AuthenticationBackground'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { ErrorMessage } from '@hookform/error-message'
import FacebookLogo from '../../assets/images/facebook.png'
import GoogleLogo from '../../assets/images/google.png'
import * as actions from '../../redux/actions'
import Loader from '../../components/Loader/Loader'

const Register = () => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [passwordHidden, setPasswordHidden] = useState(true)
    const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true)

    const authenticationReducer = useSelector(state => state.AuthenticationReducer)
    const { loading } = authenticationReducer

    const dispatch = useDispatch()
    const history = useHistory()

    const showHidePassword = () => {
        setPasswordHidden(prevValue => !prevValue)
    }

    const showHideConfirmPassword = () => {
        setConfirmPasswordHidden(prevValue => !prevValue)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
        mode: "onBlur"
    });

    const update = (value) => {
        setCurrentPassword(value)
    }

    const registerForm = (data) => {
        dispatch(actions.registerNewUser(data, history))
    };

    return (
        <div className="authentication-layout d-flex">
            {
                loading && <Loader />
            }
            <AuthenticationBackground />
            <div className="authentication-right d-flex flex-column">
                <div className="square-box-filled"></div>
                <div className="title">Get Started!</div>
                <div className="border-bottom-line w-10"></div>
                <div className="auth-form mt-40 d-flex flex-column">
                    <div className="form-control">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-control">
                            <input
                                type="text"
                                className={`${errors && errors.name && 'validate-error'}`}
                                placeholder="Enter your full name"
                                name="name"
                                {...register("name", {
                                    required: "Name is required"
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="name"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className={'error'}>{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>
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
                    <div className="form-control relative">
                        <label htmlFor="password">Password</label>
                        <div className="input-control">
                            <input
                                type={`${passwordHidden ? 'password' : 'text'}`}
                                name="password"
                                className={`${errors && errors.password && 'validate-error'}`}
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password  is required.",
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message: 'Password must have minimum eight characters, at least one letter, one number and one special character.',
                                    }
                                })}
                                onChange={(e) => update(e.target.value)}
                            />
                            {
                                passwordHidden ?
                                    <i className={`material-icons-outlined eye-btn ${errors && errors.password ? 'top-error' : 'top-no-error'}`} onClick={showHidePassword}>visibility_off</i> :
                                    <i className={`material-icons-outlined eye-btn ${errors && errors.password ? 'top-error' : 'top-no-error'}`} onClick={showHidePassword}>visibility</i>
                            }
                            <ErrorMessage
                                errors={errors}
                                name="password"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className={'error'}>{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>
                    <div className="form-control relative">
                        <label htmlFor="password">Confirm Password</label>
                        <div className="input-control">
                            <input
                                type={`${confirmPasswordHidden ? 'password' : 'text'}`}
                                className={`${errors && errors.confirmPassword && 'validate-error'}`}
                                placeholder="Enter confirm password"
                                name="confirmPassword"
                                {...register("confirmPassword", {
                                    validate: value => value === currentPassword || "Confirm passwords do not match",
                                })}
                            />
                            {
                                confirmPasswordHidden ?
                                    <i className={`material-icons-outlined eye-btn ${errors && errors.confirmPassword ? 'top-error' : 'top-no-error'}`} onClick={showHideConfirmPassword}>visibility_off</i> :
                                    <i className={`material-icons-outlined eye-btn ${errors && errors.confirmPassword ? 'top-error' : 'top-no-error'}`} onClick={showHideConfirmPassword}>visibility</i>
                            }
                            <ErrorMessage
                                errors={errors}
                                name="confirmPassword"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className={'error'}>{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>
                    <div className="check-control d-flex align-center">
                        <input
                            type="checkbox"
                            name="keepLoggedIn"
                            {...register('keepLoggedIn', {
                                required: true
                            })}
                        />
                        <label htmlFor="loggedIn">By creating an account,
                            you agree to the <span className="bold">Terms of Service </span>and <span className="bold">Privacy Policy</span></label>
                    </div>
                    <button className="btn auth-btn" onClick={handleSubmit(registerForm)}>Sign up</button>
                </div>
                <div className="log-or-signup-mes mt-20 text-center">
                    Already have an account?<span className="bold pointer"> Log in</span>
                </div>
                <div className="or-separator d-flex justify-between align-center">
                    <span className="border-line"></span>
                    <p className="or">Or</p>
                    <span className="border-line"></span>
                </div>
                <div className="other-signup d-flex">
                    <button className="btn signup-btn">
                        <img src={GoogleLogo} alt="google-logo" />
                        <span>Sign up with Google</span>
                    </button>
                    <button className="btn signup-btn">
                        <img src={FacebookLogo} alt="facebook-logo" />
                        <span>Sign up with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
