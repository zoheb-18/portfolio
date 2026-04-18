import { useState, useEffect } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className="btn-primary-custom"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                padding: '15px',
                borderRadius: '50%',
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.3s ease',
                zIndex: 1000
            }}
        >
            <i className="bi bi-arrow-up"></i>
        </button>
    );
};

export default BackToTop;
