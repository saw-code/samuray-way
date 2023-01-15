import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          <NavLink to="/dialogs/1">DimOk</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Masha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Viktor</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  )
}
