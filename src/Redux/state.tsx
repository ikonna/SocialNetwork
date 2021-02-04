import React from "react";

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



let dialogsData = [
    {id: 1, name: 'Dim'},
    {id: 2, name: 'Yas'},
    {id: 3, name: 'Ilo'}
]
let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'yoyo'},
    {id: 3, message: 'jkkj'}
]
let postsData = [
    {id: 1, message: 'Wow that is so cool', likes: 44},
    {id: 2, message: 'HI how are you', likes: 33}
]


let state = {
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


export default state;