import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, StatePropsType} from "./redux/state";
import React from "react";

export let rerenderEntireTree = (state: StatePropsType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>, document.getElementById('root'));
}