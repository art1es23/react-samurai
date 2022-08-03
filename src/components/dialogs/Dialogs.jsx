import React from 'react';

import MessageListContainer from './messagesList/MessageListContainer';

import d from './dialogs.module.css';
import DialogsListContainer from './dialogsList/DialogsListContainer';

const Dialogs = () => {

    return (
        <div className={d.wrapper}>
            <DialogsListContainer />
            {/* <DialogsList dialogsData={dialogsData} /> */}
            <MessageListContainer />
        </div>
    )
}

export default Dialogs;