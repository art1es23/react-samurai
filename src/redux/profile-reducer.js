const ADD_POST = 'ADD-POST';
const UPDATE_TEXTAREA_POST = 'UPDATE-TEXTAREA-POST';

let initialState = {
    postsData: [
        { id: '1', text: 'Somebody was told me', likes: 20, },
        { id: '2', text: 'Babooka was told me', likes: 26, },
        { id: '3', text: 'Let was told me', likes: 14, }
    ],

    newPostText: 'Shrek Donkey',
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

    switch (action.type) {
        case ADD_POST:
            return addPost();
        case UPDATE_TEXTAREA_POST:
            return updateTextareaPost(action.text);
        default:
            return state;
    }

}

export const addPostCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_TEXTAREA_POST,
    text: text,
})

export default profileReducer;
