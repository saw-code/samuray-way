import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogPropsType = {
  name: string
  id: string
}

type MessagePropsType = {
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

export function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={"DimOk"} id="1"/>
        <DialogItem name={"Masha"} id="2"/>
        <DialogItem name={"Sveta"} id="3"/>
        <DialogItem name={"Sasha"} id="4"/>
        <DialogItem name={"Viktor"} id="5"/>
      </div>

      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="How is your it-kamasutra?"/>
        <Message message="Yo"/>
      </div>
    </div>
  )
}
