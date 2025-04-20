import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Projects",
        "Skills",
        "Coding Profiles",
        "Contact",
    ];

    const toggleMenu = () => setIsOpen((prev) => !prev);

    const formatLink = (link) => link.toLowerCase().replace(/\s+/g, "");

    return (
        <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-white">
                <span>&lt;MyPortfolio /&gt;</span>
            </div>

            <div className="hidden md:flex gap-6 text-gray-700 dark:text-white font-medium">
                {navLinks.map((link) => (
                    <a
                        key={link}
                        href={`#${formatLink(link)}`}
                        className="hover:text-blue-500 transition duration-200"
                    >
                    {link}
                    </a>
                ))}
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 dark:text-white focus:outline-none"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>

        {isOpen && (
            <div className="md:hidden px-4 pb-4 bg-white dark:bg-gray-900 transition-all duration-300">
                <div className="flex flex-col gap-4 text-gray-700 dark:text-white font-medium">
                    {navLinks.map((link) => (
                    <a
                        key={link}
                        href={`#${formatLink(link)}`}
                        onClick={() => setIsOpen(false)}
                        className="hover:text-blue-500 transition duration-200"
                    >
                        {link}
                    </a>
                    ))}
                </div>
            </div>
        )}
        </nav>
    );
};

export default Header;
