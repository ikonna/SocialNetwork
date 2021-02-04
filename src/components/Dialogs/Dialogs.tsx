import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessegeType} from "../../Redux/state";



type DialogsPropsType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessegeType>
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let messagesElement = props.messagesData.map((el) => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;