import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Contact from './Contact/Contact'
import HomeLayout from './Home/HomeLayout'
import AboutLayout from './About'

const LandingRoutes=()=> {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {/* <Route path="/contact" component={Contact}/> */}
                <Route path="/about" name="about" component={AboutLayout}/>
                <Route path="/" name="home" exact component={HomeLayout}/>
            </Switch>
        </React.Suspense>
    )
}

export default LandingRoutes
