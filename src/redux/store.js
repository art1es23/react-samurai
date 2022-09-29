import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _subscriber() { },
    _state: {
        profile: {
            postsData: [
                { id: '1', text: 'Somebody was told me', likes: 20, },
                { id: '2', text: 'Babooka was told me', likes: 26, },
                { id: '3', text: 'Let was told me', likes: 14, }
            ],

            newPostText: 'Shrek Donkey',
        },

        dialogs: {
            dialogsData: [
                { id: '1', name: 'Denys' },
                { id: '2', name: 'Dasha' },
                { id: '3', name: 'Vlad' },
                { id: '4', name: 'Sasha' }
            ],
            messagesData: [
                { id: '1', text: 'Why you so serious?' },
                { id: '2', text: 'Could you provide me with your domain name?' },
                { id: '3', text: 'Could you repeat again your request?' }
            ],

            newMessageText: 'Input your text',
        },

        sidebar: {
            linksData: [
                { name: 'Profile', src: '/profile' },
                { name: 'Messages', src: '/dialogs' },
                { name: 'News', src: '/news' },
                { name: 'Music', src: '/music' },
                { name: 'Settings', src: '/settings' },
            ],

            friendsListData: [
                { name: 'Denys', src: '/dialogs', imgSrc: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
                { name: 'Denys', src: '/dialogs', imgSrc: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
                { name: 'Denys', src: '/dialogs', imgSrc: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
            ],

        },
    },

    get() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._subscriber();
    },

}

export default store;
