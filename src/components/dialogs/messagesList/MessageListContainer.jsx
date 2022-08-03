import { addNewMessageCreator, updateNewMessageTextCreator } from '../../../redux/dialogs-reducer';
import MessageList from './MessageList';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogs.newMessageText,
        messagesData: state.dialogs.messagesData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (text) => { dispatch(addNewMessageCreator(text)) },
        updateNewMessageText: (text) => { dispatch(updateNewMessageTextCreator(text)) },
    }
}

const MessageListContainer = connect(mapStateToProps, mapDispatchToProps)(MessageList);

export default MessageListContainer;