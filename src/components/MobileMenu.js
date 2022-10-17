import { X } from 'react-bootstrap-icons';

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
            </ul>
        </>
    )
}

export default MobileMenu

