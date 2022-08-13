import React from "react";

import pi from './profileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    alt="ses"
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
            </div>
            <div className={pi.profileDescription}>
                <img
                    alt="ses"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' />
                <p className={pi.profileDescriptionText}>Description</p>
            </div>
        </div>
    )
}

export default ProfileInfo;