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
import {PropsPostsType} from "./redux/state";


function App(props: PropsPostsType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route exact path="/dialogs" render={() => <Dialogs messages={props.appState.messages} dialogsData={props.appState.dialogsData}/>}/>
          <Route path="/profile" render={() => <Profile posts={props.appState.posts}/>}/>
          <Route path="/news" render={() => <News />}/>
          <Route path="/music" render={() => <Music />}/>
          <Route path="/settings" render={() => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
