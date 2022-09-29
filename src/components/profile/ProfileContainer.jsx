import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";
import * as axios from 'axios';

import { setUserProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
            .catch((err) => {
                let message = typeof err.response !== "undefined"
                    ? err.response.data.message
                    : err.message;
                console.warn("error", message);
            })
    }

    render() {
        return <Profile {...this.props} user={this.props.user} />
    }
}

const mapStateToProps = (state) => ({
    user: state.profile.user,
})

let WithURLDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithURLDataContainerComponent);