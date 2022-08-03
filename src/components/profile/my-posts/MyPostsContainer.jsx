
import { addPostCreator, updateNewPostTextCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profile.newPostText,
        postsData: state.profile.postsData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => { dispatch(addPostCreator()) },
        updateNewPostText: (text) => { dispatch(updateNewPostTextCreator(text)) },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;

