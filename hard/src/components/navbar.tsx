"use client"
import React, { useState } from 'react';
import NavItem from './ui/navItem';
import { Menu, Bolt, UserIcon, LogOut } from 'lucide-react';
import NavDropdownItem from './ui/navDropdownItem';

function NavBar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const toggleMenu = () => setMenuOpen(!isMenuOpen);


    return (
        <nav className="fixed bg-[#f7f0f0]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/tecnico1.svg" className="w-20 h-20" alt="Desarrollo de Software" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Empresa</span>
                </a>
                <div className="flex items-center space-x-3 rtl:space-x-reverse md:order-2">
                    {/* Dropdown */}
                    <div className="relative">
                        <button
                            type="button"
                            className="flex text-sm bg-[#f95f19] rounded-full focus:ring-4 focus:ring-gray-600"
                            onClick={toggleDropdown}
                        >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-12 h-12 rounded-full" src="https://github.com/shadcn.png" alt="user" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 z-50 mt-2 w-70 bg-gray-600 divide-y divide-gray-100 rounded-lg shadow">
                                <div className="px-4 py-3">
                                    <p className="text-xl text-center text-gray-900 dark:text-white">Parker</p>
                                    <p className="text-lg text-gray-500 truncate dark:text-gray-400">example@example.com</p>
                                </div>
                                <ul className="py-2">
                                    <NavDropdownItem href={'/'} icon={<Bolt />} text={'Configuración'} />
                                    <NavDropdownItem href={'/'} icon={<UserIcon />} text={'Datos'} />
                                    <NavDropdownItem href={'/'} icon={<LogOut />} text={'Salir'} />
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Boton Movil */}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        onClick={toggleMenu}
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
                {/* Navbar Links */}
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                >
                    <ul className="flex flex-col  font-medium p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <NavItem href={'/'} text={'Inicio'} />
                        <NavItem href={'/'} text={'Sobre Nosotros'} />
                        <NavItem href={'/'} text={'Precios'} />
                        <NavItem href={'/'} text={'Carreras'} />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
