import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export function Dialogs(props: DialogsPropsType) {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
  let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let text = event.currentTarget.value
    props.messageChange(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea onChange={onMessageChange} value={state.newMessage}></textarea></div>
          <div><button onClick={addMessage}>Send message</button></div>
        </div>
      </div>
    </div>
  )
}
