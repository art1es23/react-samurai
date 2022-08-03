import React from "react";
import MyPostsContainer from "./my-posts/MyPostsContainer";

import p from './profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {

    return (
        <main className={p.profile}>
            <ProfileInfo />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;