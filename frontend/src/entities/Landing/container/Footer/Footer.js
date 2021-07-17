import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    window.addEventListener('scroll', checkScrollTop)

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            <div className="footer d-flex flex-column">
                <div className="footer-top d-flex flex-column align-center">
                    <div className="footer-top-title mb-20">
                        Get in touch with us.
                    </div>
                    <div className="footer-top-info mb-20">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit.
                    </div>
                    <div className="email-field d-flex justify-center mb-40">
                        <input placeholder="Your Email Address" type="email" />
                        <button className="btn send-email-btn ml-sm">
                            <span className="material-icons-outlined">
                                keyboard_arrow_right
                            </span></button>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-between mb-20">
                    <div className="row">
                        <div className="logo">Merokatha</div>
                    </div>
                    <div className="row">
                        <div className="footer-title bold">Navigation</div>
                        <div className="nav-items d-flex flex-column align-center">
                            <NavLink to="/" exact>Home</NavLink>
                            <NavLink to="/" exact>About</NavLink>
                            <NavLink to="/" exact>Services</NavLink>
                            <NavLink to="/" exact>Features</NavLink>
                            <NavLink to="/" exact>Contacts</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer-title bold">Categories</div>
                        <div className="stories d-flex flex-column align-center">
                            <NavLink to="/" exact>Popular</NavLink>
                            <NavLink to="/" exact>Latest</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer-title bold">Help and Support</div>
                        <div className="stories d-flex flex-column align-center">
                            <NavLink to="/" exact>FAQs</NavLink>
                            <NavLink to="/" exact>Help</NavLink>
                            <NavLink to="/" exact>Contacts</NavLink>
                        </div>
                    </div>
                    <div className="row">
                        <div className="footer-title bold">Connect with us</div>
                        <div className="contact-info">
                            <div className="info d-flex justify-between">
                                <div className="contacts">merokatha@gmail.com</div>
                                <span className="material-icons-outlined">email</span>
                            </div>
                            <div className="info d-flex justify-between">
                                <div className="contacts">Kathmandu,Nepal</div>
                                <span className="material-icons-outlined">location_on</span>
                            </div>
                            <div className="info d-flex justify-between">
                                <div className="contacts">+977-9812103122</div>
                                <span className="material-icons-outlined">phone</span>
                            </div>
                            <div className="social-media">
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook icon mr-lg"></i></a>
                                <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram icon mr-lg"></i></a>
                                <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter icon mr-lg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                    showScroll && <div className="back-to-top" onClick={scrollTop}>
                        <span className="back-to-top-icon material-icons">
                            arrow_upward
                        </span>
                    </div>
                }
            <div className="last-footer d-flex justify-center align-center">
                <div className="last-footer-text">
                    Merokatha  Pvt. Ltd 2021
                </div>
            </div>
        </>
    )
}

export default Footer
