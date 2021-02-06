import {addMessage, addPost, stateType} from "./Redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const renderTree = (state: stateType) => {
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
}