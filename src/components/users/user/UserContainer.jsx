import User from "./User";
import { connect } from "react-redux";

import { changeFollowCreator, followAC, unfollowAC } from "../../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: () => { dispatch(followAC()) },
        unfollow: () => { dispatch(unfollowAC()) },
        changeFollowingUser: () => { dispatch(changeFollowCreator()) },
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;