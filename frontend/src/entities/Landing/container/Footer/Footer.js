import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Footer=()=> {
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
        <div className="footer d-flex flex-column">
            <div className="footer-top d-flex justify-between mb-20">
                <div className="row-1">
                    <div className="title bold">Navigation</div>
                    <div className="nav-items d-flex flex-column align-center">
                        <NavLink to="/" exact>Home</NavLink>
                        <NavLink to="/" exact>About</NavLink>
                        <NavLink to="/" exact>Contact</NavLink>
                    </div>
                </div>
                <div className="row-2">
                    <div className="title bold">Stories</div>
                    <div className="stories d-flex flex-column align-center">
                        <NavLink to="/" exact>Popular</NavLink>
                        <NavLink to="/" exact>Latest</NavLink>
                    </div>
                </div>
                <div className="row-3">
                    <div className="title bold">Help and Support</div>
                    <div className="stories d-flex flex-column align-center">
                        <NavLink to="/" exact>FAQs</NavLink>
                        <NavLink to="/" exact>Help</NavLink>
                        <NavLink to="/" exact>Contacts</NavLink>
                    </div>
                </div>
                <div className="row-4">
                    <div className="title bold">Connect with us</div>
                    <div className="contact-info">
                        <div className="info d-flex justify-between">
                            <div className="contacts">merokatha@gmail.com</div>
                            <span class="material-icons-outlined">email</span>
                        </div>
                        <div className="info d-flex justify-between">
                            <div className="contacts">+977-9812103122</div>
                            <span class="material-icons-outlined">phone</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom d-flex flex-column align-center">
                <div className="social-media">
                    <a href="https://facebook.com/" class="fa fa-facebook" target="_blank"></a>
                    <a href="https://instagram.com/" class="fa fa-instagram" target="_blank"></a>
                    <a href="https://twitter.com/" class="fa fa-twitter" target="_blank"></a>
                </div>
                <div className="copyright-info">
                    <div className="copyright">&#169; Copyrights 2021. Merokatha </div>
                </div>
            </div>
            {
                showScroll && <div className="back-to-top use" onClick={scrollTop}>
                    <span className="back-to-top-icon material-icons">
                        arrow_upward
                </span>
                </div>
            }
        </div>
    )
}

export default Footer
