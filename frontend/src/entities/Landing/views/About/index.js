import React, { useEffect } from 'react'
import AboutBackground from '../../components/AboutBackground/AboutBackground'
import './About.scss'
import PersonOne from '../../../../assets/images/person1.jpg' 
import PersonSecond from '../../../../assets/images/person2.jpg' 
import PersonThird from '../../../../assets/images/person3.jpg' 

const AboutLayout=()=> {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
    }, [])
    return (
        <div className="about-layout mb-40">
            <AboutBackground/>
            <div className="about-content">
            <div className="square-box-empty absolute"></div>
            <div className="square-box-filled absolute"></div>
                <div className="how-we-work">
                    <div className="title">How we Work ?
                        <div className="border-bottom-line w-5"></div>
                    </div>
                    <div className="work-steps relative">
                        <div className="step ml-xl">
                            <div className="step-no absolute">01</div>
                            <div className="sub-title">Log in or Sign up</div>
                            <div className="step-info mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus sed nec suspendisse nullam magna ut ipsum dolor sit amet, 
                                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Phasellus sed nec suspendisse nullam magna ut ipsum 
                                dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="step ml-xl mt-15vh">
                            <div className="step-no absolute">02</div>
                            <div className="sub-title">Create a Story/Blog</div>
                            <div className="step-info mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus sed nec suspendisse nullam magna ut ipsum dolor sit amet, 
                                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Phasellus sed nec suspendisse nullam magna ut ipsum 
                                dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="step ml-xl mt-15vh">
                            <div className="step-no absolute">03</div>
                            <div className="sub-title">Share it with everyone!</div>
                            <div className="step-info mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus sed nec suspendisse nullam magna ut ipsum dolor sit amet, 
                                consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit. Phasellus sed nec suspendisse nullam magna ut ipsum 
                                dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="create-background d-flex flex-column align-center justify-center">
                    <div className="create-title title">Start Writing Now!</div>
                    <div className="create-info mt-20">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet 
                        sint.Velit officia consequat duis enim velit mollit.
                    </div>
                    <button className="btn mt-20 create-btn">Create a Story</button>
                </div> 
                <div className="our-team">
                    <div className="title">Our Team
                        <div className="border-bottom-line w-5"></div>
                    </div>
                    <div className="teams d-flex flex-column">
                    <div className="team d-flex align-center">
                        <img className="profile-pic" src={PersonOne} alt="team"/>
                        <div class="team-info">
                            <div className="job-title">Founding Member</div>
                            <div className="job-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus sed nec suspendisse nullam magna ut ipsum dolor sit amet, consectetur 
                                adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                                sed nec suspendisse nullam magna ut ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="name">
                                Ram Khadka
                            </div>
                        </div>
                    </div>
                    <div className="team d-flex align-center">
                        <img className="profile-pic" src={PersonSecond} alt="team"/>
                        <div class="team-info">
                            <div className="job-title">Founding Member</div>
                            <div className="job-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus sed nec suspendisse nullam magna ut ipsum dolor sit amet, consectetur 
                                adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                                sed nec suspendisse nullam magna ut ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="name">
                                Ram Khadka
                            </div>
                        </div>
                    </div>
                    <div className="team d-flex align-center">
                        <img className="profile-pic" src={PersonThird} alt="team"/>
                        <div class="team-info">
                            <div className="job-title">Founding Member</div>
                            <div className="job-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Phasellus sed nec suspendisse nullam magna ut ipsum dolor sit amet, consectetur 
                                adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                                sed nec suspendisse nullam magna ut ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                            <div className="name">
                                Ram Khadka
                            </div>
                        </div>
                    </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default AboutLayout
