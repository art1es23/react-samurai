import React from "react";
import { connect } from "react-redux";
import * as axios from 'axios';

import Users from './Users';

import {
    setUsers,
    follow,
    unfollow,
    changeFollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
} from "../../redux/users-reducer";

import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

                // console.log(response);
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
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })

    }

    render() {

        let { usersData, pageSize, totalUsersCount, currentPage, isFetching, follow, unfollow } = this.props;

        return <>
            {isFetching ? <Preloader /> : null}
            <Users
                onPageChanged={this.onPageChanged}
                usersData={usersData}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                isFetching={isFetching}
                follow={follow}
                unfollow={unfollow} />
        </>
    }

}

let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         changeFollow: (userID) => { dispatch(changeFollowCreator(userID)) },
//         setUsers: (usersData) => { dispatch(setUsersAC(usersData)) },
//         follow: (userID) => { dispatch(followAC(userID)) },
//         unfollow: (userID) => { dispatch(unfollowAC(userID)) },
//         setCurrentPage: (currentPage) => { dispatch(setCurrentPageAC(currentPage)) },
//         setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountAC(totalUsersCount)) },
//         toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) },
//     }
// }

export default connect(mapStateToProps, {
    changeFollow,
    setUsers,
    follow,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersContainer);
