import React from 'react';

import h from './header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <img alt="ses" src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/2560px-Playstation_logo_colour.svg.png' />
        </header>
    )
}

export default Header;