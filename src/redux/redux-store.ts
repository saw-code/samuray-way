import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type ReduxStoreType = typeof store

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
})

let store = legacy_createStore(reducers)


// //@ts-ignore
// window.store=store
//
// console.log(store.getState())

export default store;
