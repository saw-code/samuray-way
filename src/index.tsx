import React from 'react';
import './index.css';
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {StoreType} from "./redux/state";

export let rerenderEntireTree = (store: StoreType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}
           store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store)
// store.subscribe(rerenderEntireTree)
store.subscribe(() => {
  rerenderEntireTree(store)
})