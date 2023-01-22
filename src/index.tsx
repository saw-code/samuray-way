import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PropsPostsType, state} from "./redux/state";

const renderTree = (state: PropsPostsType) => {
  ReactDOM.render(<App appState={state}/>, document.getElementById('root'));
}

renderTree(state)