import React from 'react';
import './index.css';
import {state, subscribe} from "./redux/state";
import App from "./App";
import {addPost, StatePropsType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";


export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={addPost}
           updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()
subscribe(rerenderEntireTree)
