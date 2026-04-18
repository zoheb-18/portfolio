import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Toast from '../components/Toast';

const Contact = () => {
    const contactRef = useScrollReveal();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastConfig, setToastConfig] = useState({ type: 'success', title: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xgorwopn", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                body: new FormData(e.target),
            });

            if (response.ok) {
                setToastConfig({
                    type: 'success',
                    title: 'Success!',
                    message: 'Message sent! Thank you for contacting me.'
                });
                setShowToast(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setToastConfig({
                    type: 'error',
                    title: 'Failed!',
                    message: 'Failed to send message. Please try again.'
                });
                setShowToast(true);
            }
        } catch (error) {
            setToastConfig({
                type: 'error',
                title: 'Error!',
                message: 'Something went wrong. Please try again.'
            });
            setShowToast(true);
        }

        setIsSubmitting(false);
    };

    const contactInfo = [
        { icon: 'bi-telephone', label: 'Phone', value: '9326991330', href: 'tel:9326991330' },
        { icon: 'bi-envelope', label: 'Email', value: 'khatrizohaib18@gmail.com', href: 'mailto:khatrizohaib18@gmail.com' },
        { icon: 'bi-geo-alt', label: 'Location', value: 'Mumbai, India', href: '#' }
    ];

    return (
        <section id="contact" ref={contactRef}>
            <div className="container">
                <h2 className="section-title reveal">
                    <i className="bi bi-send"></i> Contact
                </h2>
                <p className="section-subtitle reveal">Let's work together on your next project</p>

                <div className="row">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.href}
                                className={`contact-info-item reveal delay-${index + 1}`}
                                style={{textDecoration: 'none', display: 'flex'}}
                            >
                                <div className="contact-icon">
                                    <i className={`bi ${info.icon}`}></i>
                                </div>
                                <div>
                                    <small className="text-secondary d-block" style={{fontSize: '0.85rem'}}>{info.label}</small>
                                    <span className="fw-medium" style={{color: 'var(--text-primary)'}}>{info.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                    <div className="col-lg-7">
                        <form className="contact-form glass-card p-4 reveal" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <textarea
                                rows="5"
                                name="message"
                                placeholder="Tell me about your project..."
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                            ></textarea>
                            <button type="submit" className="btn-primary-custom w-100" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <><span className="spinner-border spinner-border-sm me-2"></span>Sending...</>
                                ) : (
                                    <><i className="bi bi-send me-2"></i>Send Message</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Toast
                show={showToast}
                onClose={() => setShowToast(false)}
                type={toastConfig.type}
                title={toastConfig.title}
                message={toastConfig.message}
                duration={4000}
            />
        </section>
    );
};

export default Contact;
