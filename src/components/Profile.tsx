import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZTPBifRk4nLz9dLqgKsJxFIkt8HgzGfqNQ&usqp=CAU'/>
        </div>
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdUOfpis-6LPzE7ICUB5wwhqktW4g2yyy9Dw&usqp=CAU'/>
            </div>

            <div className={s.posts}>
                <div className={s.item}>
                    ill Ilon
                </div>
                <div className={s.item}>
                    23 jii
                </div>
                <div className={s.item}>
                    student
                </div>
                <div className={s.item}>
                    Barista
                </div>
                <div className={s.item}>
                    Himout
                </div>
            </div>
        </div>
    </div>
}

export default Profile;