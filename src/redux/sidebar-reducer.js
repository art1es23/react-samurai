let initialState = {
    linksData: [
        { id: '1', name: 'Profile', src: '/profile' },
        { id: '2', name: 'Dialogs', src: '/dialogs' },
        { id: '3', name: 'News', src: '/news' },
        { id: '4', name: 'Music', src: '/music' },
        { id: '5', name: 'Settings', src: '/settings' },
        { id: '6', name: 'Users', src: '/users' },
    ],

    friendsListData: [
        { id: '1', name: 'Denys', src: '/dialogs', imgSrc: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        { id: '2', name: 'Denys', src: '/dialogs', imgSrc: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        { id: '3', name: 'Denys', src: '/dialogs', imgSrc: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
    ],
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;