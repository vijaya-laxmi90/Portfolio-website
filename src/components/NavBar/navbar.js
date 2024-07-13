import React, { useState } from "react";
import './navbar.css';
import images from '../../assets/images.png';
import contact from '../../assets/contact.png';
import menu from '../../assets/menu.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={images} alt="logo" className='images' />

            <div className="desktopMenu">
                <Link 
                    activeClass='active' 
                    to='intro' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    className="desktopMenuListItem"
                >
                    Home
                </Link>
                <Link 
                    activeClass='active' 
                    to='skills' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    className="desktopMenuListItem"
                >
                    About
                </Link>
                <Link 
                    activeClass='active' 
                    to='works' 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                    className="desktopMenuListItem"
                >
                    Portfolio
                </Link>
                <Link 
                    activeClass='active' 
                    to='Activities' 
                    spy={true} 
                    smooth={true} 
                    offset={-50} 
                    duration={500} 
                    className="desktopMenuListItem"
                >
                    Activities
                </Link>
            </div>

            <Link 
                to='contactBox' 
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500} 
                className="desktopMenuBtn"
            >
                <img src={contact} alt="contact" className="desktopMenuImg" />
                Contact Me
            </Link>

            <img 
                src={menu} 
                alt="Menu" 
                className='mobMenu' 
                onClick={() => setShowMenu(!showMenu)}
            />

            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Portfolio
                </Link>
                <Link
                    activeClass="active"
                    to="contactItem"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
