import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeLayout from './Home/HomeLayout'
import AboutLayout from './About'
import Contact from './Contact/Contact'
import NotFound from '../../../components/NotFound'

const LandingRoutes=()=> {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/about" name="about" exact component={AboutLayout}/>
                <Route path="/" name="home" exact component={HomeLayout}/>
                <Route path="*" name="home" component={NotFound} />
            </Switch>
        </React.Suspense>
    )
}

export default LandingRoutes
