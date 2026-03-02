import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Scroll Logic: Handles background blur and hide-on-scroll behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Add background styling after scrolling 50px
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                setIsHidden(true);
                setIsMenuOpen(false); // Auto-close mobile menu on scroll
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className={`main-header 
            ${isScrolled ? 'nav-scrolled' : ''} 
            ${isHidden ? 'nav-hidden' : ''} 
            ${isMenuOpen ? 'menu-open' : ''}`}
        >
            <div className="header-container">
                {/* Mobile Toggle Button */}
                <button 
                    className="mobile-toggle" 
                    onClick={toggleMenu}
                    aria-label="Toggle Navigation"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {isMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>

                {/* Logo Section */}
                <div className="logo-left">
                    <Link to="/" className="brand-link" onClick={() => setIsMenuOpen(false)}>
                        <img src="/images/umd-logo.png" alt="UMD Logo" className="umd-logo-main" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="nav-middle">
                    <ul className="capsule-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/competitive">Competitive</Link></li>
                        <li><Link to="/officers">Officers</Link></li>
                        {/* Contact Removed */}
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="user-right">
                    <a href="https://www.instagram.com/terpsclubwrestling/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    
                    <a href="https://groupme.com/join_group/20293947/XW7h4YJz" target="_blank" rel="noopener noreferrer" className="social-icon groupme-icon-adjust" aria-label="GroupMe">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h4l2 3 2-3h4a3 3 0 0 0 3-3V5z"></path>
                            <line x1="10.5" y1="5.5" x2="10.5" y2="12"></line> 
                            <line x1="13.5" y1="5.5" x2="13.5" y2="12"></line> 
                            <line x1="8.5" y1="7.5" x2="15.5" y2="7.5"></line>   
                            <line x1="8.5" y1="10.5" x2="15.5" y2="10.5"></line> 
                            <path d="M7 14.5c2 2 8 2 10 0"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <nav className={`mobile-dropdown ${isMenuOpen ? 'is-open' : ''}`}>
                <ul className="mobile-nav-list">
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/competitive" onClick={() => setIsMenuOpen(false)}>Competitive</Link></li>
                    <li><Link to="/officers" onClick={() => setIsMenuOpen(false)}>Officers</Link></li>
                    {/* Contact Removed */}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;