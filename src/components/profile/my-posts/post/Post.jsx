import React from "react";

import p from './post.module.css';

const Post = (props) => {

    const { text, number, likes } = props;
    return (
        <div className={p.item}>
            <h3>Post {number}</h3>
            <p>{text}</p>
            <button className={p.itemBtn}>Like {likes}</button>
        </div>
    )
}

export default Post;