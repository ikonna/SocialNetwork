import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string;
    likes: number
}

const Post = (props: PostPropsType ) => {
    return <div className={s.content}>
        <div className={s.posts}>
            <div className={s.item}>
                <img src={""}/>
                {props.message}
                <div>
                    <span>Like</span>
                    <span>DisLike</span> {props.likes}
                </div>
            </div>
        </div>
    </div>
}

export default Post;