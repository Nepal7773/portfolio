import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 ">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#hero" className="text-2xl font-bold">
                    Nepal Portfolio
                </a>
                <div className="lg:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none focus:text-white"
                    >
                        {menuOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                </div>
                <ul className={`lg:flex max-lg:hidden space-x-4`}>
                    <li>
                        <a href="#hero">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div
                    className={`${menuOpen ? 'translate-x-0' : '-translate-x-full'
                        } fixed top-0 left-0 h-full w-1/2 bg-gray-800 text-white transition-transform transform duration-300 ease-in-out lg:hidden`}
                >
                    <ul className="pt-8 pl-4 flex flex-col gap-2">
                        <li className="my-2">
                            <a href="#hero" className='p-2 my-2' onClick={toggleMenu}>
                                Home
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#about" className='p-2 my-2' onClick={toggleMenu}>
                                About
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#skills" className='p-2 my-2' onClick={toggleMenu}>
                                Skills
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#projects" className='p-2 my-2' onClick={toggleMenu}>
                                Projects
                            </a>
                        </li>
                        <li className="my-2">
                            <a href="#contact" className='p-2 my-2' onClick={toggleMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
