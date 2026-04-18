import { useScrollReveal } from '../hooks/useScrollReveal';

const Education = () => {
    const eduRef = useScrollReveal();

    const education = [
        {
            degree: 'Bachelor of Science in Information Technology',
            school: 'Wilson College, Mumbai',
            year: '2023 – 2026'
        },
        {
            degree: 'HSC (12th)',
            school: 'Maharashtra Board',
            year: 'Completed'
        }
    ];

    const certifications = [
        {
            name: 'MERN Stack Development Certification',
            provider: 'Heuristic Academy'
        }
    ];

    return (
        <section id="education" ref={eduRef}>
            <div className="container">
                <h2 className="section-title reveal">
                    <i className="bi bi-mortarboard"></i> Education
                </h2>
                <p className="section-subtitle reveal">Academic background and certifications</p>

                <div className="row">
                    <div className="col-lg-8">
                        {education.map((edu, index) => (
                            <div key={index} className={`glass-card education-card reveal delay-${index + 1}`}>
                                <div className="d-flex justify-content-between align-items-start flex-wrap">
                                    <div>
                                        <h5 className="mb-1">{edu.degree}</h5>
                                        <p className="text-secondary mb-0">{edu.school}</p>
                                    </div>
                                    <span className="duration mt-2 mt-lg-0">{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="mt-5 mb-4 reveal">
                    <i className="bi bi-award text-accent me-2"></i>
                    Certifications
                </h3>
                {certifications.map((cert, index) => (
                    <div key={index} className="glass-card education-card reveal">
                        <div className="d-flex align-items-center">
                            <div className="contact-icon me-4">
                                <i className="bi bi-patch-check"></i>
                            </div>
                            <div>
                                <h5 className="mb-1">{cert.name}</h5>
                                <p className="text-secondary mb-0">{cert.provider}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
