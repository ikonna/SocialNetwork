import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings"
import {BrowserRouter, Route} from "react-router-dom"
import Photo from './components/Photo/Photo';

function App() {
    return (
        <BrowserRouter>
            <div className='site-wrapper'>
                <Header/>
                <Navbar/>
                <div className='site-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/photo' component={Photo}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
