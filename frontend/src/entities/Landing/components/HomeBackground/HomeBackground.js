import React from 'react'
import BackgroundImage from '../../../../assets/images/background.png'

const HomeBackground = () => {
    return (
        <div className="home-layout">
            <div className="background-image d-flex flex-column justify-between">
                <div></div>
                <div className="background-text">
                    <div className="motto">Everybody has a story</div>
                    <div className="info">Discover how different people view life through their own lenses!</div>
                    <div className="explore">EXPLORE</div>
                </div>
                <div className="background-bottom d-flex justify-between align-center full-width">
                    <div className="bottom-left d-flex flex-column align-center">
                        <div className="oval">
                            <div className="oval-line"></div>
                        </div>
                        <div className="bottom-line">

                        </div>
                    </div>
                    <div className="social-media">
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook mr-xl"></i></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram mr-xl"></i></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter mr-xl"></i></a>
                    </div>
                </div>
                {/* <img
                    src={BackgroundImage}
                    alt="images"
                /> */}
            </div>
        </div>
    )
}

export default HomeBackground
