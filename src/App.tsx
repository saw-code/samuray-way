import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StatePropsType, state} from "./redux/state";

function App(props: StatePropsType) {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route exact path="/dialogs" render={() => <Dialogs messages={props.messagesPage?.messages} dialogsData={props.profilePage?.dialogsData}/>}/>
          <Route path="/profile" render={() => <Profile posts={props.profilePage?.posts}/>}/>
          <Route path="/news" render={() => <News />}/>
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
