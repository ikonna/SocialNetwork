import React from 'react';
import Post from "./Post/Post";
import s from "./Post/Post.module.css";


const MyPosts = () => {
    return (
        <div>
            <div className={s.item}>
                debugger
                <Post message='Wow that is so cool' l='43'/>
                <Post message='HI how are you' l='77'/>

            </div>
        </div>
    )
}

export default MyPosts;
