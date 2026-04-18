import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#skills', label: 'Skills' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    Zoheb<span> Khatri</span>
                </a>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <i className={`bi ${mobileOpen ? 'bi-x-lg' : 'bi-list'} text-white fs-4`}></i>
                </button>
                <div className={`collapse navbar-collapse ${mobileOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ms-auto">
                        {navLinks.map((link) => (
                            <li key={link.href} className="nav-item">
                                <a
                                    className="nav-link"
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
