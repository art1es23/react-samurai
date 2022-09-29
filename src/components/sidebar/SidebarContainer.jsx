import { connect } from 'react-redux';
import Sidebar from './Sidebar';

const mapStateToProps = (state) => {
    return {
        linksData: state.sidebar.linksData,
        friendsListData: state.sidebar.friendsListData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;