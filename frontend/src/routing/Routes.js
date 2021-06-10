import React from 'react'
import { Switch,Route } from 'react-router-dom'
import LandingLayout from '../entities/Landing/LandingLayout'

const Routes=()=> {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="" name="landing" component={LandingLayout} exact/>
            </Switch>
        </React.Suspense>
    )
}

export default Routes
