import React from 'react'
import { useHistory } from 'react-router-dom'

const AuthenticationBackground = () => {
    const history = useHistory()
    return (
        <div className="authentication-left">
            <div className="logo" onClick={()=>history.push('/')}>Merokatha</div>
            <div className="welcome-info">
                <div className="welcome-title">
                    Welcome to our community
                </div>
                <div className="welcome-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>
    )
}

export default AuthenticationBackground
