import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="src/assets/abdisaB.png"
                            className="mr-3 h-16 w-auto"
                            alt="Logo"
                        />
                    </Link>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 hover:bg-gray-200"
                        >
                            {/* Here you can add an icon. For simplicity, using text "Menu" */}
                            <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex lg:flex-row lg:items-center lg:w-auto lg:order-1`}>
                        <ul className="space-y-4 lg:space-y-0 lg:flex lg:flex-row lg:space-x-8 mt-4 lg:mt-0">
                            <li><NavLink to="/" className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Home</NavLink></li>
                            <li><NavLink to="/about" className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>About</NavLink></li>
                            <li><NavLink to="/contact" className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Contact</NavLink></li>
                            <li><NavLink to="/github" className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Github</NavLink></li>
                            <li><NavLink to="/linkedin" className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>Linkedin</NavLink></li>
                            <li><NavLink to="/user" className={({ isActive }) => `py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"}`}>User</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
