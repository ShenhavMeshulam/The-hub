import React, {useState} from 'react'
import {Button} from '../Button/Button'
import {Link} from 'react-router-dom'
import './NavBar.css'
import DropDown from '../DropDown/DropDown'

function NavBar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(true)
    }

    const onMouseLeave = () => {
        window.innerWidth < 960 ? setDropdown(false) : setDropdown(false)
    }

    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    EPIC
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <DropDown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </div>
    )
}

export default NavBar
