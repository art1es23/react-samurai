import React from "react";
import Preloader from "../../common/preloader/Preloader";

import pi from './profileInfo.module.css';

const ProfileInfo = ({ user }) => {

    if (!user) {
        return <Preloader />
    }

    let { aboutMe, photos, contacts, fullName, lookingForAJob, lookingForAJobDescription } = user;

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
                    src={photos.small} />
                <p className={pi.fullName}>{fullName}</p>
                <p className={pi.profileDescriptionText}>{aboutMe}</p>

                <ul className={pi.socialMenu}>
                    <li className={pi.socialMenuItem}>{contacts.facebook}</li>
                    <li className={pi.socialMenuItem}>{contacts.website}</li>
                    <li className={pi.socialMenuItem}>{contacts.vk}</li>
                    <li className={pi.socialMenuItem}>{contacts.twitter}</li>
                    <li className={pi.socialMenuItem}>{contacts.instagram}</li>
                    <li className={pi.socialMenuItem}>{contacts.youtube}</li>
                    <li className={pi.socialMenuItem}>{contacts.github}</li>
                    <li className={pi.socialMenuItem}>{contacts.mainlink}</li>
                </ul>

                <div className={pi.jobSearching}>
                    <span className={pi.jobSearchingItem}>{lookingForAJob}</span>                    <span className={pi.jobSearchingItem}>{ }</span>
                    <span className={pi.jobSearchingItem}>{lookingForAJobDescription}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;