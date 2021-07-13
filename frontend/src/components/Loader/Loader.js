import React from 'react'
import './Loader.scss'

const Loader = () => {
    return (
        <div className="loading-background">
            <div className="loading-backdrop"></div>
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader
