import {renderTree} from "../render";
export type DialogType = {
    id: number,
    name: string
}
export type PostType = {
    id: number,
    message: string,
    likes: number
}
export type MessegeType = {
    id: number,
    message: string
}
export type stateType = {
    postsData: Array<PostType>,
    dialogsData: Array<DialogType>,
    messagesData: Array<MessegeType>
}

let state: stateType = {
    postsData: [
        {id: 1, message: 'Wow that is so cool', likes: 44},
        {id: 2, message: 'HI how are you', likes: 33}
    ],
    dialogsData: [
        {id: 1, name: 'Dim'},
        {id: 2, name: 'Yas'},
        {id: 3, name: 'Ilo'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'yoyo'},
        {id: 3, message: 'jkkj'}
    ]
}

export let addPost = (postText: string) => {
    const newPost: any = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 77
    }
    state.postsData.push(newPost)
}

export const addMessage = (text: string) => {
    const newMessage: MessegeType = {
        id: 1,
        message: text
    }
    state.messagesData.push(newMessage)

    renderTree(state)
}

export default state;