import React from 'react';
import * as axios from 'axios';

import Users from './Users';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://api.jsonbin.io/v3/b/62f23db9a1610e6386f5a7b4?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.record.items);
                this.props.setTotalUsersCount(response.data.record.totalCount);
            })
            .catch((err) => {
                let message = typeof err.response !== "undefined"
                    ? err.response.data.message
                    : err.message;
                console.warn("error", message);
            })
    }

    componentDidUpdate() {

    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);

        axios.get(`https://api.jsonbin.io/v3/b/62f23db9a1610e6386f5a7b4?page=${currentPage}&pageSize=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.record.items);
            })

    }

    render() {

        let { usersData, pageSize, totalUsersCount, currentPage, follow, unfollow } = this.props;

        return <Users
            onPageChanged={this.onPageChanged}
            usersData={usersData}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            follow={follow}
            unfollow={unfollow} />
    }

}


// let Users1 = new Users({ usersData, setUsers, follow, unfollow, changeFollow });


// const Users = ({ usersData, setUsers, follow, unfollow, changeFollow }) => {

//     let getUsers = () => {
//         if (usersData.length === 0) {

//             axios.get("https://api.jsonbin.io/v3/b/62eaa1335c146d63ca5c9d2d/")
//                 .then(response => {
//                     // debugger;
//                     setUsers(response.data.record.items);
//                 })
//                 .catch((err) => {
//                     let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
//                     console.warn("error", message);
//                 })
//         }

//     }

//     const users = usersData.map((item) => {

//         let { followed, id, img, name, status, location } = item;
//         return (
//             <User key={id} id={id} followed={followed} img={img} name={name} status={status} location={location}
//                 follow={follow} unfollow={unfollow}
//                 changeFollow={changeFollow}
//             ></User>
//         )
//     });

//     return (
//         <div className={u.container}>
//             <h3>Users</h3>
//             <button onClick={getUsers}>Get USers</button>

//             {users}

//             <button type='button' className={u.showMoreBtn}>Show more</button>
//         </div>
//     )
// }

export default UsersAPIComponent;