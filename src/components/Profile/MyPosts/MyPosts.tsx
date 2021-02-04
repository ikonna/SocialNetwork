import React from 'react';
import Post from "./Post/Post";
import s from "./Post/Post.module.css";
import {PostType} from "../../../Redux/state";

type MyPostPropsType = {
    postData: Array<PostType>
}

const MyPosts = (props: MyPostPropsType) => {
    let postElements =
        props.postData.map((el) => <Post message={el.message} likes={el.likes}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.item}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;