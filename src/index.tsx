import React from 'react';
import './index.css';
import App from "./App";
import {store} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";


export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}
           store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
