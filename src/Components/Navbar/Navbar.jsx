import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navItems = [
        {id: 1, text: "Home"},
        {id: 2, text: "About"},
        {id: 2, text: "Services"},
        {id: 3, text: "Skills"},
        {id: 3, text: "Projects"},
        {id: 3, text: "Contact"},
    ]
    return (
        <nav className='container mx-auto p-5 flex justify-between items-center gap-3'>
            <img src={logo} alt="logo" className='w-32'/>
            <ul className='flex gap-7'>
                {navItems.map(item => (
                    <li key={item.id} className='relative after:w-full after:absolute after:top-full after:bg-transparent after:h-1 after:hover:bg-primary after:left-0 after:transition hover:text-primary cursor-pointer transition'><Link to={item.text.toLowerCase()} spy={true} smooth={true} offset={50} duration={500}>{item.text}</Link></li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;