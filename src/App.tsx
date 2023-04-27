import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, StatePropsType, StoreType} from "./redux/state";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type StateType = {
  state: StatePropsType
  dispatch: (action: ActionsTypes) => void
  store: StoreType
}

function App(props: StateType) {

  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>
          <Route path="/profile" render={() => <Profile store={props.store}/>}/>
          <Route path="/news" render={() => <News/>}/>
          <Route path="/music" render={() => <Music/>}/>
          <Route path="/settings" render={() => <Settings/>}/>
        </div>
      </div>
  )
}

export default App;
