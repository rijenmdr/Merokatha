import React from 'react'
import Header from './container/Header/Header'
import Nav from './container/Nav/Nav'
import './LandingLayout.scss'

const LandingLayout=()=> {
    return (
        <div className="landing">
            <Header/>
            <Nav/>
        </div>
    )
}

export default LandingLayout
