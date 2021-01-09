import React from 'react';
import Post from "./Post/Post";
import s from "./Post/Post.module.css";


const MyPosts = () => {
    return (
        <div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <div className={s.item}>
                <textarea></textarea>
                <button>Like</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default MyPosts;