import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessegeType} from "../../Redux/state";


type DialogsPropsType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessegeType>
    addMessage: (text: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsData.map((el) => <DialogItem name={el.name} id={el.id}/>)
    let messagesElement = props.messagesData.map((el) => <Message message={el.message}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    function addMessage() {
        let text = newPostElement.current?.value
        if (text) {
            props.addMessage(text)
        }
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogsElement}
                </div>

                <div className={s.messages}>
                    {messagesElement}
                </div>

                <div>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;