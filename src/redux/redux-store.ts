import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import UsersReducer from "./users-reducer";

export type ReduxStoreType = typeof store
export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: UsersReducer,
  sidebar: sidebarReducer
})

let store = legacy_createStore(rootReducer)


// //@ts-ignore
// window.store=store
//
// console.log(store.getState())

export default store;
