import React from 'react'
import Header from './container/Header/Header'
import Nav from './container/Nav/Nav'
import './LandingLayout.scss'
import '../../assets/scss/theme.scss'
import LandingRoutes from './views/LandingRoutes'
import Footer from './container/Footer/Footer'

const LandingLayout=()=> {
    return (
        <div className="landing">
            <Header/>
            <Nav/>
            <LandingRoutes/>
            <Footer/>
        </div>
    )
}

export default LandingLayout
