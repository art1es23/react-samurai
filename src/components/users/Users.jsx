import React from 'react';
import User from './user/User';

import u from './users.module.css';


const Users = ({
    usersData,
    pageSize,
    totalUsersCount,
    currentPage,
    onPageChanged,
    follow,
    unfollow
}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // console.log('sad', pageSize);

    let pagesList = pages.map(number => {
        return <span
            key={number}
            onClick={(e) => { onPageChanged(number) }}
            className={currentPage === number
                ? `${u.listPageCounters_item + ' ' + u.selectedPage}`
                : u.listPageCounters_item}>{number}</span>
    })

    return (
        <div className={u.container}>

            <div className={u.listPageCounters}>
                {
                    pagesList
                }
            </div>

            <h3>Users</h3>
            {
                usersData.map((item) => {

                    let { followed, id, img, name, status, location } = item;
                    return (
                        <User
                            key={id}
                            id={id}
                            followed={followed}
                            img={img}
                            name={name}
                            status={status}
                            location={location}
                            follow={follow}
                            unfollow={unfollow}
                        ></User>
                    )
                })
            }

            <button
                type='button'
                className={u.showMoreBtn}>Show more</button>
        </div>
    )
}

export default Users;