import React from 'react';
import s from './ProfileInfo.module.css'
import MyPosts from "../MyPosts/MyPosts";

const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxc9O9M5mrlwvyIc4UIDA5tCvibktjpA55g&usqp=CAU'/>
        </div>
        <div className={s.DescriptionBlock}>
            ava +dd
        </div>
    </div>
}

export default ProfileInfo;