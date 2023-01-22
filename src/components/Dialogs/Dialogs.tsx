import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {PropsPostsType} from "../../redux/state";



export function Dialogs(props: PropsPostsType) {

  let dialogsElements = props.dialogsData?.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
  let messagesElements = props.messages?.map(message => <Message message={message.message} id={message.id}/>)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}
