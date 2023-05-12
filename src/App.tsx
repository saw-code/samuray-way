import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Music} from "./components/Music/Music";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {

  return (
    <div className="app-wrapper">
      <HeaderContainer/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
        {/*послу profile указали что у нас есть id пользователя. Вопросительный знак ставим чтобы указать что параметр может
        быть а может и не быть. Если без него перейдем просто на profile без параметра то страница будет пустой и не
        выведет нам профиль пользователя*/}
        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
        <Route path="/users" render={() => <UsersContainer/>}/>
        <Route path="/news" render={() => <News/>}/>
        <Route path="/music" render={() => <Music/>}/>
        <Route path="/settings" render={() => <Settings/>}/>
      </div>
    </div>
  )
}

export default App;
