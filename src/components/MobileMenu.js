import { X } from 'react-bootstrap-icons';
import { Link } from "react-router-dom"

const MobileMenu = ({ closeMethod }) => {
    return (
        <>
            <button id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button>
            <ul id='mobile-menu'>
                <li>
                    Home
                </li>
                <li>
                    Artists
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu

