import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, UtensilsCrossed, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.about, href: '#about' },
        { name: t.nav.menu, href: '#menu' },
        { name: t.nav.gallery, href: '#gallery' },
        { name: t.nav.contact, href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        if (language === 'en') setLanguage('ta');
        else if (language === 'ta') setLanguage('kn');
        else setLanguage('en');
    };

    const getLangLabel = (lang: string) => {
        switch (lang) {
            case 'en': return 'EN';
            case 'ta': return 'TA';
            case 'kn': return 'KN';
            default: return 'EN';
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-2"
                    >
                        <UtensilsCrossed className="text-kerala-green w-8 h-8" />
                        <span className="text-xl md:text-2xl font-serif font-bold text-kerala-green tracking-wider">
                            UNIQUE KERALA<span className="text-kerala-gold"> HOTEL</span>
                        </span>
                    </motion.div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-coconut-brown hover:text-kerala-green font-medium transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-kerala-gold transition-all group-hover:w-full" />
                            </motion.a>
                        ))}

                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 font-bold text-kerala-green border border-kerala-gold/30 px-3 py-1 rounded-full hover:bg-kerala-gold hover:text-white transition-all"
                        >
                            <Globe size={16} />
                            <span>{getLangLabel(language)}</span>
                        </button>
                    </div>

                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1 font-bold text-kerala-green border border-kerala-gold/30 px-3 py-1 rounded-full hover:bg-kerala-gold hover:text-white transition-all"
                        >
                            <span>{getLangLabel(language)}</span>
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-kerala-green p-3 focus:outline-none hover:bg-black/5 rounded-full transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-kerala-gold/20 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsOpen(false);
                                        const element = document.querySelector(link.href);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="block px-3 py-3 text-lg font-medium text-coconut-brown hover:text-kerala-green hover:bg-cream-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
