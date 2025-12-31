import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Globe, User, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarComponent = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const services = [
        { name: 'Legal Judgment', href: '#judgment' },
        { name: 'Law Library', href: '#library' },
        { name: 'Law Mapping', href: '#mapping' },
        { name: 'Legal Template', href: '#template' },
        { name: 'YouTube Summarizer', href: '#youtube' }
    ];

    const moreItems = [
        { name: 'Blog', href: '#blog' },
        { name: 'Support', href: '#support' },
        { name: 'Referral Program', href: '#referral' }
    ];

    const dropdownVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95, pointerEvents: 'none' },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            pointerEvents: 'auto',
            transition: { duration: 0.2, ease: "easeOut" }
        }
    };

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3">
                        <div className="bg-black text-white p-1 rounded font-bold font-sans text-xl h-10 w-10 flex items-center justify-center">
                            स
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold font-display tracking-tight text-gray-900 leading-none">
                                salhakar
                            </span>
                            <span className="text-[10px] text-gray-500 font-medium hidden sm:block mt-0.5">
                                From confusion to clarity
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        <a
                            href="/"
                            className={`px-5 py-2.5 rounded-xl text-base font-medium transition-all ${location.pathname === '/'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            Home
                        </a>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all cursor-pointer border-none bg-transparent">
                                Services
                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                            </button>

                            <motion.div
                                initial="hidden"
                                animate={activeDropdown === 'services' ? "visible" : "hidden"}
                                variants={dropdownVariants}
                                className="absolute top-full left-0 w-64 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                            >
                                {services.map((service) => (
                                    <a
                                        key={service.name}
                                        href={service.href}
                                        className="block px-6 py-3 text-sm font-sans text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                    >
                                        {service.name}
                                    </a>
                                ))}
                            </motion.div>
                        </div>

                        <a href="#about" className="px-5 py-2.5 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                            About
                        </a>
                        <a href="#pricing" className="px-5 py-2.5 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all">
                            Pricing
                        </a>

                        {/* More Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('more')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all cursor-pointer border-none bg-transparent">
                                More
                                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeDropdown === 'more' ? 'rotate-180' : ''}`} />
                            </button>

                            <motion.div
                                initial="hidden"
                                animate={activeDropdown === 'more' ? "visible" : "hidden"}
                                variants={dropdownVariants}
                                className="absolute top-full left-0 w-56 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                            >
                                {moreItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block px-6 py-3 text-sm font-sans text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-3">
                        {/* Language Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('lang')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <div className="p-[2px] rounded-full bg-gradient-to-r from-[#6366F1] via-[#10B981] via-[#FBBF24] to-[#F97316] shadow-sm hover:shadow-md transition-all cursor-pointer">
                                <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white group">
                                    <Globe className="w-5 h-5 text-[#2563EB]" />
                                    <span className="text-base font-bold text-[#2563EB] font-sans flex items-center gap-2">
                                        En <span className="font-normal">English</span>
                                    </span>
                                    <ChevronDown className={`w-4 h-4 text-[#2563EB] transition-transform duration-200 ${activeDropdown === 'lang' ? 'rotate-180' : ''}`} />
                                </div>
                            </div>

                            <motion.div
                                initial="hidden"
                                animate={activeDropdown === 'lang' ? "visible" : "hidden"}
                                variants={dropdownVariants}
                                className="absolute top-full right-0 w-48 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2"
                            >
                                {[
                                    { code: 'En', name: 'English' },
                                    { code: 'Hi', name: 'हिंदी' },
                                    { code: 'Gu', name: 'ગુજરાતી' },
                                    { code: 'Te', name: 'తెలుగు' },
                                    { code: 'Be', name: 'বাংলা' }
                                ].map((lang) => (
                                    <button
                                        key={lang.code}
                                        className="w-full text-left px-6 py-3 text-sm font-sans text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors flex items-center gap-3"
                                    >
                                        <span className="font-bold text-[#2563EB] w-5">{lang.code}</span>
                                        <span>{lang.name}</span>
                                    </button>
                                ))}
                            </motion.div>
                        </div>

                        {/* Login Button */}
                        <button className="hidden md:flex bg-gray-950 hover:bg-gray-900 text-white rounded-full px-6 py-2.5 transition-colors items-center gap-2 border-none">
                            <User className="w-4 h-4" />
                            <span className="font-display font-bold text-sm">Log In</span>
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden border-t border-gray-100"
                        >
                            <div className="py-4 flex flex-col gap-1">
                                {['Home', 'Services', 'About', 'Pricing', 'More'].map((link) => (
                                    <a
                                        key={link}
                                        href={`#${link.toLowerCase()}`}
                                        className="px-4 py-3 rounded-xl text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all font-sans"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link}
                                    </a>
                                ))}
                                <div className="px-4 py-2 mt-2">
                                    <button className="w-full bg-gray-950 text-white rounded-xl py-3 flex items-center gap-2 justify-center hover:bg-gray-900 transition-colors font-display font-bold border-none">
                                        <User className="w-4 h-4" />
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default NavbarComponent;
