import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings"
import {BrowserRouter, Route} from "react-router-dom"
import Photo from './components/Photo/Photo';
import {DialogType, MessegeType, PostType} from "./Redux/state";


type AppPropsType = {

    appState: {
        dialogsData: Array<DialogType>,
        messagesData: Array<MessegeType>,
        postsData: Array<PostType>
    }
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='site-wrapper'>
                <Header/>
                <Navbar/>
                <div className='site-wrapper-content'>
                    <Route exact path='/dialogs' render={() => <Dialogs
                        dialogsData={props.appState.dialogsData}
                        messagesData={props.appState.messagesData}/>}/>
                    <Route exact path='/profile' render={() => <Profile
                        postData={props.appState.postsData}/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                    <Route exact path='/photo' render={() => <Photo/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;