import React from 'react';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/state";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
  store: StoreType
}

export const DialogsContainer = (props: DialogsContainerType) => {

  let dialogsPageState = props.store.getState().dialogsPage

  let addMessage = () => {
    props.store.dispatch(addMessageAC())
  }

  let messageChange = (text: string) => {
    props.store.dispatch(updateNewMessageAC(text))
  }

  return <Dialogs
    messageChange={messageChange}
    addMessage={addMessage}
    dialogsPage={dialogsPageState}
  />
};
