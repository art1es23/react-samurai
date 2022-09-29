const CHANGE_FOLLOWING_USER = 'CHANGE-FOLLOWING-USER';
const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {

    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}

const usersReducer = (state = initialState, action) => {

    const changeFollow = (userID) => {
        return {
            ...state,
            usersData: state.usersData.map(user => {
                return user.id === userID
                    ? { ...user, followed: !user.followed }
                    : user;
            })

        }
    }

    const setup = (usersData) => {
        return {
            ...state,
            usersData,
        }
    }

    const setCurrentPage = (currentPage) => {
        return {
            ...state,
            currentPage,
        }
    }

    const setTotalUsersCount = (totalUsersCount) => {
        return {
            ...state,
            totalUsersCount,
        }
    }

    const follow = (userID) => {

        return {
            ...state,
            usersData: state.usersData.map(user => {
                return user.id === userID
                    ? { ...user, followed: !user.followed }
                    : user;
            })

        }
    }

    const unfollow = (userID) => {
        return {
            ...state,
            usersData: state.usersData.map(user => {
                return user.id === userID
                    ? { ...user, followed: !user.followed }
                    : user;
            })

        }
    }

    const toggleIsFetching = (isFetching) => {
        return {
            ...state,
            isFetching,
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
        case TOGGLE_IS_FETCHING:
            return toggleIsFetching(action.isFetching);
        default:
            return state;
    }

}

export const changeFollow = (userID) => ({
    type: CHANGE_FOLLOWING_USER,
    userID
});

export const setUsers = (usersData) => ({
    type: SET_USERS,
    usersData
});

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount
});

export const follow = (userID) => ({
    type: FOLLOW,
    userID
});

export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID
});

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export default usersReducer;

