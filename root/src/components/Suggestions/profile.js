import React from 'react';
import dummy_profile from '../../rsrcs/profile-dummy.jpg';

const Profile = () => {
    return (
        <div className="profile__wrapper container">
            <div className="profile__image">
                <img alt="Profile Image" src={dummy_profile} />
            </div>
            <div className="profile__info">
                <h3>@paul_deloria</h3>
                <small className="fullname">Andrian Paul Dango</small>
            </div>

            <div className="profile__switch">
                <a>Switch</a>
            </div>
        </div>
    )
}

export default Profile
