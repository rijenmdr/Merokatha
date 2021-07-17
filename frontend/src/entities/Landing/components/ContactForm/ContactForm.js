import React from 'react'
import { ErrorMessage } from '@hookform/error-message'

const ContactForm = (props) => {
    const {
        register,
        handleSubmit,
        errors,
        submitContactInfo,
        isLoggedIn
    } = props

    return (
        <div className="contact-form pt-20">
            <div className="white-title">
                Contact Us
            </div>
            <div className="form-info mt-20">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit.
            </div>
            <div className="main-form mt-20 d-flex flex-column">
                <div className="form-control">
                    <div className="field-control flex-1">
                        <label className="mb-10" htmlFor="name">Full Name</label>
                        <div className="input-control mb-20">
                            <input
                                type="text"
                                className={`${errors && errors.name && 'validate-error'}`}
                                placeholder="Enter your full name"
                                name="name"
                                readOnly={isLoggedIn}
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
                </div>
                <div className="form-control d-flex">
                    <div className="field-control flex-1">
                        <label className="mb-10" htmlFor="email">Email</label>
                        <div className="input-control mb-20">
                            <input
                                type="email"
                                className={`${errors && errors.email && 'validate-error'}`}
                                placeholder="Enter your email address"
                                name="email"
                                readOnly={isLoggedIn}
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
                    <div className="field-control flex-1 ml-md">
                        <label className="mb-10" htmlFor="email">Phone Number</label>
                        <div className="input-control mb-20">
                            <input
                                type="text"
                                className={`${errors && errors.phone && 'validate-error'}`}
                                placeholder="Enter your phone number"
                                name="phone"
                                {...register("phone", {
                                    required: false,
                                    pattern: {
                                        value: /^(?:\+977[- ])?\d{2}-?\d{7,8}/,
                                        message: 'Please ensure phone number is valid.',
                                    }
                                })}
                            />
                            <ErrorMessage
                                errors={errors}
                                name="phone"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className={'error'}>{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div className="field-control flex-1">
                        <label className="mb-10" htmlFor="name">Message</label>
                        <div className="input-control mb-20">
                            <textarea
                                name="message"
                                className={`${errors && errors.message && 'validate-error'}`}
                                placeholder="Enter your message"
                                {...register("message", {
                                    required: "Message is required"
                                })}
                            >
                            </textarea>
                            <ErrorMessage
                                errors={errors}
                                name="message"
                                render={({ messages }) =>
                                    messages &&
                                    Object.entries(messages).map(([type, message]) => (
                                        <p key={type} className={'error'}>{message}</p>
                                    ))
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="btn-area">
                    <button onClick={handleSubmit(submitContactInfo)} className="btn contact-btn">Contact us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
