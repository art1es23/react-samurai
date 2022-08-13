import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './sidebar.module.css';


const Sidebar = ({
    linksData,
    friendsListData
}) => {

    let links = linksData.map(item => {
        return (
            <div key={item.id} className={s.item}>
                <NavLink to={item.src}>
                    {item.name}
                </NavLink>
            </div>
        )
    });

    let friends = friendsListData.map(item => {
        return (
            <div key={item.id} className={s.friendsListItem}>
                <NavLink to={item.src}>{item.name}</NavLink>
            </div>
        )
    });

    return (
        <nav className={s.sidebar}>
            <div className={s.sidebarLinks}>
                {links}
            </div>
            <div className={s.friends}>
                <h3>Friends</h3>
                <div className={s.friendsList}>
                    {friends}
                </div>
            </div>
        </nav>
    )
}


export default Sidebar;