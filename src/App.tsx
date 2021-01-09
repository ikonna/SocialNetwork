import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className='site-wrapper'>
             <Header/>
             <Navbar/>
             <Profile/>
        </div>
);
}

export default App;
