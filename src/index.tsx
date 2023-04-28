import React from 'react';
import './index.css';
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";
import {StoreType} from "./redux/state";
import {Provider} from "./StoreContext";

export let rerenderEntireTree = (store: StoreType) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store)
// store.subscribe(rerenderEntireTree)
store.subscribe(() => {
  rerenderEntireTree(store)
})