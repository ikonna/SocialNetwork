import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/state";
import {addPost, addMessage} from './Redux/state'

ReactDOM.render(
  <React.StrictMode>
    <App
        appState={state}
        addPost={addPost}
        addMessage={addMessage}
    />
  </React.StrictMode>,
  document.getElementById('root')
);