import React from "react";
import MyPosts from './my-posts/MyPosts';

import p from './profile.module.css';

const Profile = () => {
    return (
        <main className={p.profile}>
            <div>
                <img alt="ses" src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div className={p.profileDescription}>
                <img alt="ses" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' />
                <p>Description</p>
            </div>
            <div>
                {/* <MyPosts /> */}
            </div>

        </main>
    )
}

export default Profile;