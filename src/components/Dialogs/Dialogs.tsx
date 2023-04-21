import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
  state: DialogsPageType
}

export function Dialogs(props: DialogsType) {

  let [message, setMessage] = useState("")

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>)

  let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }

  let addMessage = () => {
    return alert(message)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
        <textarea onChange={onChangeHandler}></textarea>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}
