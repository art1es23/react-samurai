const CHANGE_FOLLOWING_USER = 'CHANGE-FOLLOWING-USER';
const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {

    usersData: [
        // { id: '1', followed: false, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png', name: 'Denys', status: 'Any status of user', location: { country: 'Ukraine', city: 'Lviv' } },
        // { id: '2', followed: true, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png', name: 'Dasha', status: 'Any status of user', location: { country: 'Ukraine', city: 'Lviv' } },
        // { id: '3', followed: false, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png', name: 'Vlad', status: 'Any status of user', location: { country: 'Ukraine', city: 'Lviv' } },
        // { id: '4', followed: true, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png', name: 'Ilya', status: 'Any status of user', location: { country: 'Ukraine', city: 'Lviv' } },
    ],
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
            usersData: [...usersData],
        }
    }

    const follow = (userID) => {

        console.log(userID);
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
    userID: userID
});

export const setUsersAC = (usersData) => ({
    type: SET_USERS,
    usersData: usersData
});

export const followAC = (userID) => ({
    type: FOLLOW,
    userID: userID
});

export const unfollowAC = (userID) => ({
    type: UNFOLLOW,
    userID: userID
});


export default usersReducer;

