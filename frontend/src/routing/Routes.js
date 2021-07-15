import React from 'react'
import { Switch,Route } from 'react-router-dom'
import LandingLayout from '../entities/Landing/LandingLayout'
import Login from '../entities/Authentication/Login'
import Register from '../entities/Authentication/Register'
import NotFound from '../components/NotFound'
import { useSelector } from 'react-redux'

const Routes=()=> {
    const authenticationReducer = useSelector(state=>state.AuthenticationReducer)
    const {isLoggedIn} = authenticationReducer
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path={`${!isLoggedIn && '/signup'}`} name="register" component={Register}/>
                <Route path={`${!isLoggedIn && '/login'}`} name="login" component={Login}/>
                <Route path="" name="landing" component={LandingLayout} exact/>
                <Route path="*" name="error" component={NotFound} exact/>
            </Switch>
        </React.Suspense>
    )
}

export default Routes
