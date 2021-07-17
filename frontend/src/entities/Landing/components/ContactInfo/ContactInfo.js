import React from 'react'

const ContactInfo = () => {
    return (
        <>
            <div className="contact-detail d-flex flex-column mb-20">
                <div className="contact-title">Contact Details</div>
                <div className="info d-flex align-center">
                    <span className="material-icons-outlined">email</span>
                    <div className="contacts">merokatha@gmail.com</div>
                </div>
                <div className="info d-flex align-center">
                    <span className="material-icons-outlined">location_on</span>
                    <div className="contacts">Kathmandu,Nepal</div>
                </div>
                <div className="info d-flex align-center">
                    <span className="material-icons-outlined">phone</span>
                    <div className="contacts">+977-9812103122</div>
                </div>
            </div>
            <div className="contact-detail d-flex flex-column">
                <div className="contact-title">
                    Opening Hours
                </div>
                <div className="info d-flex align-center">
                    <span className="material-icons-outlined">date_range</span>
                    <div className="contacts">Monday-Friday</div>
                </div>
                <div className="info d-flex align-center">
                    <span className="material-icons-outlined">schedule</span>
                    <div className="contacts">9:00 am - 5:00 pm</div>
                </div>
            </div>
            <div className="social-media mt-20">
                <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook icon mr-lg"></i></a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram icon mr-lg"></i></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter icon mr-lg"></i></a>
            </div>
        </>
    )
}

export default ContactInfo
