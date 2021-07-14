import React from 'react'
import Nav from './container/Nav/Nav'
import './LandingLayout.scss'
import '../../assets/scss/theme.scss'
import LandingRoutes from './views/LandingRoutes'
import Footer from './container/Footer/Footer'
import Toast from '../../components/Toast/Toast'

const LandingLayout=()=> {
    return (
        <div className="landing">
            <Toast/>
            <Nav/>
            <LandingRoutes/>
            <Footer/>
        </div>
    )
}

export default LandingLayout
