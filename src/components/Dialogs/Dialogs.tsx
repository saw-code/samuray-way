import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type MessagePropsType = {
  id: number
  message: string
}

let dialogsData = [
  {id: 1, name: "DimOk"},
  {id: 2, name: "Masha"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Viktor"}
]

let messages = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How is your it-kamasutra?"},
  {id: 3, message: "Yo"}
]

let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
let messagesElements = messages.map(message => <Message message={message.message} id={message.id}/>)

export function Dialogs() {

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
