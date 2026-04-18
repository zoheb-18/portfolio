const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <div className="text-center">
                    <p className="mb-0 text-secondary">
                        © {currentYear} <span className="text-white">Zoheb Khatri</span>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
