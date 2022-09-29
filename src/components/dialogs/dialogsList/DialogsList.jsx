import React from "react";
import DialogsListItem from "./dialogListItem/DialogListItem";

import dl from './dialogsList.module.css';

const DialogsList = ({ dialogsData }) => {

    const dialogs =
        dialogsData.map(element => {
            return (
                <DialogsListItem name={element.name} id={element.id} />
            )
        });

    return (
        <div className={dl.dialogsList}>
            {dialogs}
        </div>
    )
}

export default DialogsList;