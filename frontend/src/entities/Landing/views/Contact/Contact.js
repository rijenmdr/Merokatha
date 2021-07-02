import React from 'react'
import ContactImage from '../../../../assets/images/contact.png'
import './Contact.scss'

const Contact=()=> {
    return (
        <div className="contact">
            <div className="contact-title mb-10">GET IN TOUCH</div>
            <div className="contact-description mb-40">Do you have any enquiry? Get in touch with us.</div>
            <div className="d-flex justify-between">
                <div className="contact-left d-flex flex-column align-center">
                    <img src={ContactImage} alt="contact-image"/>
                    <iframe className="map mt-20" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14129.668200296057!2d85.2834579208171!3d27.70440687251289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb186002f3060b%3A0xe01a8ab3bafc3cb4!2sTahachal%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1623859933851!5m2!1sen!2snp" 
                        allowfullscreen=""
                    loading="lazy"></iframe>
                </div>
                <div className="contact-right">
                    <div className="card">
                            <div className="input-group full-width">
                                <label>Email</label>
                                <div className="input-box">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder={"Email"}
                                    />
                                </div>
                            </div>
                            <div className="input-group full-width">
                                <label>Phone</label>
                                <div className="input-box">
                                    <input
                                        type="number"
                                        name="contact_no"
                                        placeholder={"Phone no"}
                                    />
                                </div>
                            </div>
                            <div className="input-group full-width">
                                <label>Message</label>
                                <div className="input-box">
                                    <textarea
                                        style={{resize: "none"}}
                                        name="question"
                                        rows={6}
                                        cols={40}
                                        placeholder={"Please enter your message here"}
                                    />
                                </div>
                    </div>
                    <div className="address-container d-flex flex-wrap mt-md">
                        <button className="btn primary">
                            Send
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
