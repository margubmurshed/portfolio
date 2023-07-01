import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import {HiBars3} from 'react-icons/hi2'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = [
        {id: 1, text: "Home"},
        {id: 2, text: "About"},
        {id: 2, text: "Services"},
        {id: 3, text: "Skills"},
        {id: 3, text: "Projects"},
        {id: 3, text: "Contact"},
    ]
    return (
        <nav className='container mx-auto p-5 flex justify-between items-center gap-3 sticky top-0 bg-white'>
            <img src={logo} alt="logo" className='w-32'/>
            <HiBars3 size={30} className='cursor-pointer lg:hidden' onClick={() => setIsOpen(!isOpen)}/>
            <ul className={`gap-7 absolute top-full text-center space-y-3 p-5 bg-white w-full border lg:flex lg:w-auto lg:bg-transparent lg:static lg:border-0 lg:text-left lg:space-y-0 lg:p-0 select-none transition-all duration-300 ${isOpen ? 'block left-0':'-left-[1024px]'}`}>
                {navItems.map(item => (
                    <li key={item.id}>
                        <Link 
                        to={item.text.toLowerCase()} 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                        className='section-active'
                        >
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;