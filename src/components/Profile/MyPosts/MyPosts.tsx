import React from 'react';
import Post from "./Post/Post";
import s from "./Post/Post.module.css";
import {PostType} from "../../../Redux/state";

type MyPostPropsType = {
    postData: Array<PostType>
    addPost: (text: string) => void
}

const MyPosts = (props: MyPostPropsType) => {
    let postElements =
        props.postData.map((el) => <Post message={el.message} likes={el.likes}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()

   function addPost () {
        let text = newPostElement.current?.value
       if(text){
        props.addPost(text)}
   }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.item}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;