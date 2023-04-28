import React, {useContext} from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {

  const store = useContext(StoreContext)

  let dialogsPageState = store.getState().dialogsPage

  let addMessage = () => {
    store.dispatch(addMessageAC())
  }

  let messageChange = (text: string) => {
    store.dispatch(updateNewMessageAC(text))
  }

  return <Dialogs
    messageChange={messageChange}
    addMessage={addMessage}
    dialogsPage={dialogsPageState}
  />
};
