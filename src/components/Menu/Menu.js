import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <nav className='header__menu'>
                <NavLink to="/game" className='menu__link'>Game</NavLink>
                {/* <NavLink to="/stats" className='menu__link'>Statistics</NavLink> */}
            </nav>

        </div>
    )
}

export default Menu