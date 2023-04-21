import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import {message} from "antd";

type DialogsType = {
  state: DialogsPageType
}

export function Dialogs(props: DialogsType) {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = props.state.messages.map(message => <Message message={message.message} id={message.id}/>)

  let messageElements = React.createRef<HTMLTextAreaElement>()

  let addMessage = () => {
    if (messageElements.current) {
      let message = messageElements.current.value
      alert(message)
    }
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
        <textarea ref={messageElements}></textarea>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  )
}
