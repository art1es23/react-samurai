import Users from "./Users";
import { connect } from "react-redux";

import { setUsersAC, followAC, unfollowAC, changeFollowCreator, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/users-reducer";

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
        changeFollow: (userID) => { dispatch(changeFollowCreator(userID)) },
        setUsers: (usersData) => { dispatch(setUsersAC(usersData)) },
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)) },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;