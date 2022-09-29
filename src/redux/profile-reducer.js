const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_POST = 'UPDATE-TEXTAREA-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        { id: '1', text: 'Somebody was told me', likes: 20, },
        { id: '2', text: 'Babooka was told me', likes: 26, },
        { id: '3', text: 'Let was told me', likes: 14, }
    ],

    newPostText: 'Shrek Donkey',

    user: null,
}

const profileReducer = (state = initialState, action) => {

    const addPost = () => {
        return {
            ...state,
            newPostText: '',
            postsData: [...state.postsData, {
                id: 5,
                text: state.newPostText,
                likes: 15,
            }]
        };
    }

    const updateTextareaPost = (text) => {
        return {
            ...state,
            newPostText: text,
        };
    }

    const setUserProfile = (user) => {
        return {
            ...state,
            user
        }
    }

    switch (action.type) {
        case ADD_POST:
            return addPost();
        case UPDATE_TEXTAREA_POST:
            return updateTextareaPost(action.text);
        case SET_USER_PROFILE:
            return setUserProfile(action.user);
        default:
            return state;
    }

}

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_TEXTAREA_POST,
    text,
})

export const setUserProfile = (user) => ({
    type: SET_USER_PROFILE,
    user,
})

export default profileReducer;
