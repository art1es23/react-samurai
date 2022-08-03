import Users from "./Users";
import { connect } from "react-redux";

import { setUsersAC, followAC, unfollowAC, changeFollowCreator } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: (userID) => { dispatch(changeFollowCreator(userID)) },
        setUsers: (usersData) => { dispatch(setUsersAC(usersData)) },
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;