import React from "react";
import { connect } from "react-redux";
import * as axios from 'axios';

import Users from './Users';

import {
    setUsersAC,
    followAC,
    unfollowAC,
    changeFollowCreator,
    setCurrentPageAC,
    setTotalUsersCountAC
} from "../../redux/users-reducer";

class UsersContainer extends React.Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
