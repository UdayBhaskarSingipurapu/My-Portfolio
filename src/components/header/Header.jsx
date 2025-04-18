import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        "Home",
        "About",
        "Projects",
        "Skills",
        "Coding Profiles",
        "Contact",
    ];

    return (
        <nav className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50 p-2">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600 dark:text-white">
            <span>&lt;MyPortfolio /&gt;</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-gray-700 dark:text-white font-medium">
            {navLinks.map((link) => (
                <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-blue-500 transition"
                >
                {link}
                </a>
            ))}
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="text-gray-700 dark:text-white"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden px-4 pb-4">
            <div className="flex flex-col gap-4 text-gray-700 dark:text-white font-medium">
                {navLinks.map((link) => (
                <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                    className="hover:text-blue-500 transition"
                    onClick={() => setIsOpen(false)}
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
