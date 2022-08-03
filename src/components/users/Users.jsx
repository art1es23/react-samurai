import React from 'react';
import * as axios from 'axios';
import User from './user/User';

import u from './users.module.css';


class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://api.jsonbin.io/v3/b/62eaa1335c146d63ca5c9d2d/")
            .then(response => {
                console.log(response);
                props.setUsers(response.data.record.items);
            })
            .catch((err) => {
                let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                console.warn("error", message);
            })

        console.log(props.usersData);

        this.users = props.usersData.map((item) => {

            console.log(item);

            let { followed, id, img, name, status, location } = item;
            return (
                <User key={id} id={id} followed={followed} img={img} name={name} status={status} location={location} changeFollow={props.changeFollow}
                ></User>
            )
        });

    }

    // users = this.props.usersData.map((item) => {

    //     console.log(item);

    //     let { followed, id, img, name, status, location } = item;
    //     return (
    //         <User key={id} id={id} followed={followed} img={img} name={name} status={status} location={location} changeFollow={this.props.changeFollow}
    //         ></User>
    //     )
    // });


    // getUsers = () => {
    //     if (this.props.usersData.length === 0) {

    //         axios.get("https://api.jsonbin.io/v3/b/62eaa1335c146d63ca5c9d2d/")
    //             .then(response => {
    //                 this.props.setUsers(response.data.record.items);
    //             })
    //             .catch((err) => {
    //                 let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
    //                 console.warn("error", message);
    //             })
    //     }
    // }

    render() {
        return (
            <div className={u.container}>
                <h3>Users</h3>
                {/* <button onClick={this.getUsers}>Get USers</button> */}

                {this.users}

                <button type='button' className={u.showMoreBtn}>Show more</button>
            </div>
        )
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

export default Users;