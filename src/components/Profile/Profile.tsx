import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIxc9O9M5mrlwvyIc4UIDA5tCvibktjpA55g&usqp=CAU'/>
        <div>
            <MyPosts />
        </div>
    </div>
}

export default Profile;