import React from "react";
import s from './../Dialogs.module.css'
import {MessagePropsType} from "../../../redux/state";


export const Message = (props: MessagePropsType) => {
  return <div className={s.message}>{props.message}</div>
}



