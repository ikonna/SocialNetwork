import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/settings">Settings</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to="/photo">Photo</NavLink>
        </div>
    </nav>
}

export default Navbar




