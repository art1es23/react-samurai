import React from 'react';

import mli from './messageListItem.module.css';

const MessageListItem = ({ text }) => {
    return (
        <div className={mli.item}>{text}</div>
    )
}

export default MessageListItem;
