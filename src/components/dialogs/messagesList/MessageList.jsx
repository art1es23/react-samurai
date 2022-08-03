import React from 'react';
import MessageListItem from './messageListItem/MessageListItem';

import ml from './messageList.module.css';

const MessageList = ({ messagesData, newMessageText, sendMessage, updateNewMessageText }) => {

    let newMessageElem = React.createRef()

    const messages =
        messagesData.map(item => {
            return (
                <MessageListItem text={item.text} id={item.id} />
            )
        });

    let onSendMessage = () => {
        let text = newMessageElem.current.value;
        sendMessage(text);
    }

    let onChangeMessage = () => {
        let text = newMessageElem.current.value;
        updateNewMessageText(text)
    }

    return (
        <div className={ml.messagesList}>
            <div className={ml.listMessagesItems}>
                {messages}
            </div>
            <div className={ml.newMessage}>
                <textarea
                    onChange={onChangeMessage}
                    ref={newMessageElem}
                    className={ml.textarea}
                    value={newMessageText}
                ></textarea>
                <button
                    onClick={onSendMessage}
                    className={ml.sendBtn}
                >Send</button>
            </div>
        </div>
    )
}

export default MessageList;