import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience = () => {
    const expRef = useScrollReveal();

    const experiences = [
        {
            title: 'MERN Stack Development Intern',
            company: 'KAF Infotech',
            duration: 'March 2025 – August 2025',
            description: 'Worked on full-stack development tasks using MERN stack, improved problem-solving skills, and gained real-world development experience. Collaborated with senior developers on production applications.',
            highlights: ['React.js', 'Node.js', 'MongoDB', 'Express']
        }
    ];

    return (
        <section id="experience" ref={expRef}>
            <div className="container">
                <h2 className="section-title reveal">
                    <i className="bi bi-briefcase"></i> Experience
                </h2>
                <p className="section-subtitle reveal">My professional journey and internships</p>

                {experiences.map((exp, index) => (
                    <div key={index} className="glass-card experience-card reveal">
                        <div className="experience-header">
                            <div>
                                <h4 className="mb-2">{exp.title}</h4>
                                <p className="company-name mb-0">{exp.company}</p>
                            </div>
                            <span className="duration">{exp.duration}</span>
                        </div>
                        <p className="text-secondary mb-4">{exp.description}</p>
                        <div>
                            {exp.highlights.map((tag, i) => (
                                <span key={i} className="skill-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
