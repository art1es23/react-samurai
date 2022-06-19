import React from "react";
import Post from './post/Post';

// import mp from './my-posts.module.css';

const MyPosts = () => {

    // const arr = [
    //     { text: 'Somebody was told me', likes: 20, },
    //     { text: 'Babooka was told me', likes: 26, },
    //     { text: 'Let was told me', likes: 14, }
    // ]

    // const posts = (items) =>
    //     items.forEach((item) => {
    //         console.log('Log: ', item);
    //         return (
    //             <Post text={item.text} number={item} likes={item.likes} />
    //         )
    //     });


    // console.log(posts(arr));

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                {/* {posts(arr)} */}
                <Post text="Somebody was told me" number="1" />
                <Post text="Somebody was told me" number="2" />
                <Post text="Somebody was told me" number="3" />
            </div>
        </div>
    )
}

export default MyPosts;