const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_TEXTAREA_MESSAGE = 'UPDATE-TEXTAREA-MESSAGE';

let initialState = {
    dialogsData: [
        { id: '1', name: 'Denys' },
        { id: '2', name: 'Dasha' },
        { id: '3', name: 'Vlad' },
        { id: '4', name: 'Sasha' }
    ],
    messagesData: [
        { id: '1', text: 'Why you so serious?' },
        { id: '2', text: 'Could you provide me with your domain name?' },
        { id: '3', text: 'Could you repeat again your request?' }
    ],

    newMessageText: 'Input your text',
}

const dialogsReducer = (state = initialState, action) => {


    const updateTextareaMessage = (text) => {
        return {
            ...state,
            newMessageText: text
        };
    }

    const addNewMessage = () => {

        return {
            ...state,
            newMessageText: '',
            messagesData: [...state.messagesData, {
                id: 4,
                text: state.newMessageText
            }],
        };
    }

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return addNewMessage();
        // return stateCopy;
        case UPDATE_TEXTAREA_MESSAGE:
            return updateTextareaMessage(action.text)

        // return stateCopy;
        default:
            return state;
    }

}

export const addNewMessageCreator = (text) => ({
    type: ADD_NEW_MESSAGE,
    text: text,
})

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_TEXTAREA_MESSAGE,
    text: text,
})

export default dialogsReducer;