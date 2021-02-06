import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../Redux/state";

type ProfilePropsType={
    postData: Array<PostType>
    addPost: (text: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return <div>
        <ProfileInfo/>
        <MyPosts postData={props.postData} addPost={props.addPost}/>
    </div>
}

export default Profile;