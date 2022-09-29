import React from "react";
import { NavLink } from 'react-router-dom';

import dli from './dialogsListItem.module.css';

const DialogsListItem = ({
    name,
    id
}) => {
    return (
        <div className={dli.dialogsList__item}>
            <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default DialogsListItem;