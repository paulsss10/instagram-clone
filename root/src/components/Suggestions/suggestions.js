import React, { useState } from 'react'
import Profile from './profile'

const Suggestions = () => {
    const [toFollowSuggestions, setToFollowSuggestions] = useState([
        {
            userHandle: '@frenkiedejong',
            numOfFollowers: 28000000,
            userProfileImage: 'imageUrl'
        },
        {
            userHandle: '@frenkiedejong',
            numOfFollowers: 28000000,
            userProfileImage: 'imageUrl'
        },
    ])
    return (
        <div className="suggestions-section__wrapper container">
            <Profile />
            
            <div className="suggestionsForUser">
                <small>Suggestions For You</small>

                <div className="suggestions-wrapper">

                </div>
            </div>
        </div>
    )
}

export default Suggestions
