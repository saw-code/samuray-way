import React from "react";
import s from './../Dialogs.module.css'
import {MessagePropsType} from "../../../redux/dialogs-reducer";

export const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}
