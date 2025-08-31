
import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#packages', label: 'Packages' },
    { href: '#flavours', label: 'Flavours' },
    { href: '#contact', label: 'Contact' },
];

const NavLink: React.FC<{ href: string; label: string; onClick: () => void; }> = ({ href, label, onClick }) => (
    <li>
        <a 
            href={href} 
            onClick={onClick}
            className="relative text-text-light py-2 px-4 font-medium tracking-wider transition-colors duration-300 hover:text-gold-primary focus:text-gold-primary focus:outline-none focus:ring-2 focus:ring-gold-primary/50 rounded-md after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-gold-primary after:to-gold-secondary after:transition-all after:duration-300 hover:after:w-full"
        >
            {label}
        </a>
    </li>
);

const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-2xl shadow-gold-primary/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
                <a href="#home" onClick={handleLinkClick} className="flex items-center gap-4 animate-float">
                    <i className="fas fa-crown text-4xl bg-gradient-to-r from-gold-primary via-gold-secondary to-gold-tertiary bg-clip-text text-transparent animate-pulseGlow"></i>
                    <span className="text-2xl font-bold tracking-widest uppercase bg-gradient-to-r from-gold-primary to-gold-secondary bg-clip-text text-transparent">Crown Shisha</span>
                </a>

                <div className="hidden md:flex items-center space-x-2">
                    <ul className="flex space-x-2">
                        {navLinks.map(link => (
                           <NavLink key={link.href} href={link.href} label={link.label} onClick={() => document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' })} />
                        ))}
                    </ul>
                    <a href="#contact" onClick={handleLinkClick} className="ml-4 px-8 py-3 bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary font-bold uppercase rounded-full shadow-lg shadow-gold-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gold-primary/50 focus:outline-none focus:ring-4 focus:ring-gold-primary/50">Book Now</a>
                </div>

                <button
                    className="md:hidden z-[1000] text-2xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-dark-secondary/95 backdrop-blur-xl transition-transform duration-500 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full">
                     <ul className="flex flex-col items-center space-y-8">
                        {navLinks.map(link => (
                           <NavLink key={link.href} href={link.href} label={link.label} onClick={() => {
                            document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                            setIsMenuOpen(false);
                           }}/>
                        ))}
                    </ul>
                    <a href="#contact" onClick={handleLinkClick} className="mt-12 px-10 py-4 bg-gradient-to-r from-gold-primary to-gold-secondary text-dark-primary font-bold uppercase rounded-full shadow-lg shadow-gold-primary/30">Book Now</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
