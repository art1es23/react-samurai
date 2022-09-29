import React from "react";
import MyPostsContainer from "./my-posts/MyPostsContainer";

import p from './profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ({ user }) => {

    console.log('Profile: ', user);

    return (
        <main className={p.profile}>
            <ProfileInfo user={user} />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;