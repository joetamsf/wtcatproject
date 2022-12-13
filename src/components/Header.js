import {
    Collapse,
    NavbarToggler,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


export const Header = () => {

    const [ showMenu, setShowMenu ] = useState(false);

    return (
        <Navbar dark color="navbar-dark" sticky="top" expand="md">
            <NavbarBrand className="ms-5">
                <h1 className='mt-0'>What the Cats!</h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setShowMenu(!showMenu)} />
            <Collapse isOpen={showMenu} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/cats'>
                            <FontAwesomeIcon icon={faCat} /> Cats
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/beginners'>
                            <FontAwesomeIcon icon={faSmile} /> Beginners
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <FontAwesomeIcon icon={faAddressCard} /> About me
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

    )
}

export default Header;