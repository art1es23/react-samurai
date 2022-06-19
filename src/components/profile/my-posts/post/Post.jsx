import React from "react";

import p from './post.module.css';

const Post = () => {
    console.log(this.props);

    const { text, number, likes } = this.props;
    return (
        <div className={p.item}>
            <h3>Post {number}</h3>
            <p>{text}</p>
            <button>Like {likes}</button>
        </div>
    )
}

export default Post;