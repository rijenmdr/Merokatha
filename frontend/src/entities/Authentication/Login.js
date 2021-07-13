import React, { useState } from 'react'
import './Authentication.scss'
import AuthenticationBackground from './components/AuthenticationBackground/AuthenticationBackground'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useHistory } from 'react-router-dom'
import * as actions from '../../redux/actions'
import Loader from '../../components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const [passwordHidden, setPasswordHidden] = useState(true)

    const authenticationReducer = useSelector(state => state.AuthenticationReducer)
    const { loading } = authenticationReducer

    const dispatch = useDispatch()
    const history = useHistory()

    const showHidePassword = () => {
        setPasswordHidden(prevValue => !prevValue)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({
        criteriaMode: 'all',
        mode: "onBlur"
    });

    const loginForm = (data) => {
        dispatch(actions.signInUser(data, history))
    };
    return (
        <div className="authentication-layout d-flex">
            {
                loading && <Loader />
            }
            <AuthenticationBackground />
            <form onSubmit={handleSubmit(loginForm)} method="post" className="authentication-right d-flex flex-column">
                <div className="square-box-filled"></div>
                <div className="title">Welcome Back!</div>
                <div className="border-bottom-line w-10"></div>
                <div className="auth-message mt-10">
                    Log in with the data that you entered during your registration.
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
                    <div className="form-control relative">
                        <label htmlFor="password">Password</label>
                        <div className="input-control">
                            <input
                                className={`${errors && errors.password && 'validate-error'}`}
                                type={`${passwordHidden ? 'password' : 'text'}`}
                                placeholder="Enter your password"
                                name="password"
                                {...register("password", {
                                    required: "Password  is required.",
                                    pattern: {
                                        value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                                        message: 'Password must have minimum eight characters, at least one letter, one number and one special character.',
                                    }
                                })}
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
                    <div className="check-control d-flex align-center">
                        <input type="checkbox" name="keepLoggedIn"></input>
                        <label htmlFor="loggedIn">Keep me logged in</label>
                    </div>
                    <button type="submit" className="btn auth-btn">Login</button>
                </div>
                <div className="log-or-signup-mes mt-20 text-center">
                    Don’t have an account?<span className="bold pointer"> Sign up</span>
                </div>
                <div className="forget-password mt-20 text-center bold pointer">
                    Forgot Password?
                </div>
            </form>
        </div>
    )
}

export default Login