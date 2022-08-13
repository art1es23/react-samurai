const CHANGE_FOLLOWING_USER = 'CHANGE-FOLLOWING-USER';
const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

let initialState = {

    usersData: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {

    const changeFollow = (userID) => {
        return {
            ...state,
            usersData: state.usersData.map(user => {
                return user.id === userID ? { ...user, followed: !user.followed } : user;
            })

        }
    }

    const setup = (usersData) => {
        return {
            ...state,
            usersData: usersData,
        }
    }

    const setCurrentPage = (currentPage) => {
        return {
            ...state,
            currentPage: currentPage,
        }
    }

    const setTotalUsersCount = (totalUsersCount) => {
        return {
            ...state,
            totalUsersCount: totalUsersCount,
        }
    }

    const follow = (userID) => {

        return {
            ...state,
            usersData: state.usersData.map(user => {
                return user.id === userID ? { ...user, followed: !user.followed } : user;
            })

        }
    }

    const unfollow = (userID) => {
        return {
            ...state,
            usersData: state.usersData.map(user => {
                return user.id === userID ? { ...user, followed: !user.followed } : user;
            })

        }
    }

    switch (action.type) {
        case CHANGE_FOLLOWING_USER:
            return changeFollow(action.userID);
        case SET_USERS:
            return setup(action.usersData);
        case SET_CURRENT_PAGE:
            return setCurrentPage(action.currentPage);
        case SET_TOTAL_USER_COUNT:
            return setTotalUsersCount(action.totalUsersCount);
        case FOLLOW:
            return follow(action.userID);
        case UNFOLLOW:
            return unfollow(action.userID);
        default:
            return state;
    }

}

export const changeFollowCreator = (userID) => ({
    type: CHANGE_FOLLOWING_USER,
    userID
});

export const setUsersAC = (usersData) => ({
    type: SET_USERS,
    usersData
});

export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount
});

export const followAC = (userID) => ({
    type: FOLLOW,
    userID
});

export const unfollowAC = (userID) => ({
    type: UNFOLLOW,
    userID
});


export default usersReducer;

