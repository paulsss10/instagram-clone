import React from 'react'
import Profile from './profile'

const Suggestions = () => {
    return (
        <div className="suggestions-section__wrapper container">
            <Profile />
            
            <div className="suggestionsForUser">
                <small>Suggestions For You</small>
            </div>
        </div>
    )
}

export default Suggestions
