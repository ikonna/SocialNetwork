import React from 'react';
import s from './Navbar.module.css'

//let s = {
//    'nav': 'Navbar_navigation__gaxyV',
//    'item': 'Navbar_item__1Raqz'
//}
const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Messages</a>
        </div>
        <div className={s.item}>
            <a>Settings</a>
        </div>
        <div className={s.item}>
            <a>Photo</a>
        </div>
    </nav>
}

export default Navbar




