import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './friends.module.css';


const Friends = ({ friends }) => {

    let links = friends.linksData.map(item => {
        return (
            <div className={s.item}>
                <NavLink to={item.src}>{item.name}</NavLink>
            </div>
        )
    });

    return (
        <nav className={s.sidebar}>
            {links}
        </nav>
    )
}


export default Friends;