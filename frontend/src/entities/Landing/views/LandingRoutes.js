import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeLayout from './Home/HomeLayout'

const LandingRoutes=()=> {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/" name="home" exact component={HomeLayout}/>
            </Switch>
        </React.Suspense>
    )
}

export default LandingRoutes
