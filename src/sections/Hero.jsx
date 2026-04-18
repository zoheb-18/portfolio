const Hero = () => {
    return (
        <section id="home" className="d-flex align-items-center position-relative" style={{minHeight: '100vh', paddingTop: '100px'}}>
            <div className="ambient-glow" style={{top: '-200px', right: '-200px'}}></div>
            <div className="ambient-glow" style={{bottom: '-200px', left: '-200px', background: 'radial-gradient(circle, rgba(0,208,132,0.2) 0%, transparent 70%)'}}></div>

            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start">
                        <div className="profile-container animate-scale">
                            <div className="profile-img d-flex align-items-center justify-content-center">
                                <i className="bi bi-person" style={{fontSize: '10rem', color: '#333'}}></i>
                            </div>
                        </div>

                        <div className="d-flex gap-3 mt-5 animate-fade-up delay-3">
                            <a href="#" className="social-link"><i className="bi bi-linkedin"></i></a>
                            <a href="https://github.com/zoheb-18" className="social-link"><i className="bi bi-github"></i></a>
                            <a href="https://mail.google.com/mail/u/0/#inbox" className="social-link"><i className="bi bi-envelope"></i></a>
                            <a href="#" className="social-link"><i className="bi bi-twitter-x"></i></a>
                        </div>
                        <div className="d-flex mt-4 align-items-center gap-4 flex-wrap animate-fade-up delay-4">
                            <div className="d-flex align-items-center gap-2" style={{fontSize: '0.9rem', color: 'var(--text-secondary)'}}>
                                <i className="bi bi-circle-fill" style={{fontSize: '8px', color: 'var(--accent-green)'}}></i>
                                <span>Available for Work</span>
                            </div>
                            <div style={{width: '1px', height: '16px', background: 'var(--border-color)'}}></div>
                            <a
                                href="https://drive.google.com/file/d/1feuG45c7o3m6ergYa6Is2ryyeF4-lM9K/view?usp=drivesdk"
                                download="Zoheb_Khatri_CV.pdf"
                                className="btn-outline-custom"
                                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                            >
                                <i className="bi bi-download"></i>
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <p className="text-secondary mb-3 animate-fade-up" style={{fontSize: '1.1rem'}}>
                            Hello, I'm Zoheb Khatri
                        </p>
                        <h1 className="display-3 fw-bold mb-4 animate-fade-up delay-1" style={{lineHeight: '1.2'}}>
                            MERN Stack<br />
                            <span className="text-gradient">Developer</span>
                        </h1>
                        <p className="text-secondary mb-2 animate-fade-up delay-2" style={{fontSize: '1.1rem'}}>
                            Based in Mumbai, India
                        </p>
                        <p className="text-secondary mb-5 animate-fade-up delay-2" style={{maxWidth: '500px', lineHeight: '1.8'}}>
                            Motivated Full-Stack Developer with hands-on experience in React, Node.js, MongoDB, and modern web technologies. Passionate about building efficient and user-friendly applications.
                        </p>
                        <div className="animate-fade-up delay-3 d-flex flex-wrap gap-3 mb-4">
                            <a href="#projects" className="btn-primary-custom">
                                View Projects
                                <i className="bi bi-arrow-right"></i>
                            </a>
                            <a href="#contact" className="btn-outline-custom">
                                <i className="bi bi-chat-dots"></i>
                                Contact Me
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
