import React, { Component } from "react";
import Post from './post/Post';

import mp from './my-posts.module.css';

const MyPosts = () => {

    // const posts = (item, key) => {
    //     for (let i=0; i < 3; i++) {
    //         return (

    //         )
    //     }
    // }

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;