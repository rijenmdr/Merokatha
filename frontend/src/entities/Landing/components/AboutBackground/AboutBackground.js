import React from 'react'
import BackgroundImage from '../../../../assets/images/background.png'

const AboutBackground = () => {
    return (
            <div className="background-image d-flex align-center relative">
                <div className="background-text">
                    <div className="background-title">
                        Who are we?
                    </div>
                    <div className="background-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus sed nec suspendisse nullam magna ut  ipsum dolor sit amet, consectetur 
                    adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus sed nec suspendisse nullam magna ut  ipsum dolor sit amet, consectetur 
                    adipiscing elit. </div>
                </div>
                <div className="absolute-info absolute">
                    We help you bring out the creativity within you
                </div>
            </div>
    )
}

export default AboutBackground
