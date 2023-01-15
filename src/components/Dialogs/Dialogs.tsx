import React from "react";
import s from './Dialogs.module.css'

export function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>
          DimOk
        </div>
        <div className={s.dialog}>
          Masha
        </div>
        <div className={s.dialog}>
          Svets
        </div>
        <div className={s.dialog}>
          Sasha
        </div>
        <div className={s.dialog}>
          Viktor
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
