import React from 'react';

import u from './user.module.css';

import userIcon from '../../../assets/img/user_icon.png';
import { NavLink } from 'react-router-dom';

// const ICON_PATH = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';

const User = ({
    id,
    followed,
    img,
    name,
    status,
    location,
    follow,
    unfollow,
    changeFollow
}) => {

    return (
        <div className={u.container}>
            <div className={u.imgWrapper}>
                <NavLink to={'/profile/' + id}>
                    <img
                        src={img != null ? img : userIcon}
                        alt='some'
                        width='50' />
                </NavLink>

                {
                    followed
                        ? <button
                            type='button'
                            onClick={() => unfollow(id)}>Unfollow</button>
                        : <button
                            type='button'
                            onClick={() => follow(id)}>Follow</button>
                }

            </div>
            <div className={u.descriptionWrapper}>
                <div className={u.name}>
                    <span>{name}</span>
                    <span>{status}</span>

                </div>
                <div className={u.country}>
                    <span>Ukraine</span>
                    <span>Lviv</span>
                </div>
            </div>

        </div>
    )
}

export default User;