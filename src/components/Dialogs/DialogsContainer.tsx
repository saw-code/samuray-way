import React from 'react';
import {addMessageAC, InitialStateType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
  dialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
  addMessage: () => void
  messageChange: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    addMessage: () => {dispatch(addMessageAC())},
    messageChange: (text: string) => {dispatch(updateNewMessageAC(text))}
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

// connect (позволяет подключиться к редаксовскому стору) создает контейнерную компоненту, внутри она рендерит
// презентационную компонетнту Dialogs и внутрь Dialogs в качестве
// пропсов передает то, что сидит внутри объектов (mapStateToProps и mapDispatchToProps)
// во вторую функцию он засунет что то вроде store.dispatch.bind(store)
// в общем dispatch засунет

//
// export const DialogsContainer = () => {
//
//   const store = useContext(StoreContext)
//
//   let dialogsPageState = store.getState().dialogsPage
//
//   let addMessage = () => {
//     store.dispatch(addMessageAC())
//   }
//
//   let messageChange = (text: string) => {
//     store.dispatch(updateNewMessageAC(text))
//   }
//
//   return <Dialogs
//     messageChange={messageChange}
//     addMessage={addMessage}
//     dialogsPage={dialogsPageState}
//   />
// };
