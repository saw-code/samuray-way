import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
  name: string
  id: number
}

type MessagePropsType = {
  id: number
  message: string
}

const DialogItem = (props: DialogPropsType) => {
  let path = "/dialogs/" + props.id

  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}

let dialogsData = [
  {id: 1, name: "DimOk"},
  {id: 2, name: "Masha"},
  {id: 3, name: "Sveta"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Viktor"}
]

let messagesData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "How is your it-kamasutra?"},
  {id: 3, message: "Yo"}
]

export function Dialogs() {

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
      </div>

      <div className={s.messages}>
        <Message message={messagesData[0].message} id={messagesData[0].id}/>
        <Message message={messagesData[1].message} id={messagesData[1].id}/>
        <Message message={messagesData[2].message} id={messagesData[2].id}/>
      </div>
    </div>
  )
}
