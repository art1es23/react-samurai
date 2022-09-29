import React from "react";
import Post from './post/Post';

import mp from './my-posts.module.css';

const MyPosts = ({
    postsData,
    newPostText,
    addNewPost,
    updateNewPostText
}) => {

    const posts =
        postsData.map((item) => {
            return (
                <Post
                    key={item.id}
                    text={item.text}
                    number={item.id}
                    likes={item.likes} />
            )
        });

    let newPostElem = React.createRef()

    let onAddPost = () => {
        addNewPost();
    }

    let onChangePost = () => {
        let text = newPostElem.current.value;
        updateNewPostText(text);
    }

    return (
        <div className={mp.wrapper}>
            <h3>My posts</h3>
            <div className={mp.wrapperAdaddPost}>
                <textarea
                    onChange={onChangePost}
                    ref={newPostElem}
                    value={newPostText}
                    className={mp.wrapperAddPostField}
                />
                <button
                    onClick={onAddPost}
                    className={mp.wrapperAddPostButton}
                >Add post</button>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;

