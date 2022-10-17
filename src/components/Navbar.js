import { useState } from 'react'
import { List } from 'react-bootstrap-icons';
import MobileMenu from './MobileMenu'

const Navbar = () => {
    // we need to include on and off state in navbar so we can open the navbar/close button
    // declare our menu state and a function to openMenu
    const [menuIsOpen, openMenu] = useState(false);
    // this function toggles the state of openMenu
    const toggleMobileMenu = () => {
        // test open only using true
        // openMenu(true);
        openMenu(!menuIsOpen);
        // toggle no scroll on body
        document.body.classList.toggle('no-scroll');
    };
    return (
        <>
            <div id='topnav'>

                <div id='logo'>
                    🔥Music
                </div>


                {/* Desktop Menu, which only appears on large screens */}
                <ul id='menu'>
                    <li>
                        Home
                    </li>
                    <li>
                        Artists
                    </li>
                </ul>

                {/* Hamburger icon, only shows up on small screens. */}
                <div id="menu-container">
                    <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id="hamburger-icon" />
                    </button>
                </div>
            </div>

            {/* If menuIsOpen, show the mobile menu*/}
            {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )
}

export default Navbar
