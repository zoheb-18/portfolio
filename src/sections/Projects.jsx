import { useScrollReveal } from '../hooks/useScrollReveal';

const Projects = () => {
    const projectsRef = useScrollReveal();

    const projects = [
        {
            title: 'Forkio',
            description: 'Product showcase website with pricing tables, version features, and download sections. Clean, modern interface design.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            color: 'linear-gradient(135deg, #fc5c7d 0%, #6a82fb 100%)',
            link: 'https://zoheb-18.github.io/forkio/'
        },
        {
            title: 'Seedkaro',
            description: 'Investment platform landing page with structured UI sections, financial calculators, and responsive design for all devices.',
            tech: ['React', 'Bootstrap'],
            color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            link: 'https://seed-karo.netlify.app'
        },
        {
            title: 'Ark Studio',
            description: 'Portfolio/agency landing page with responsive UI, testimonials, and modern design principles. Features smooth animations and interactive elements.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            link: 'https://zoheb-18.github.io/ark-studio/'
        }
    ];

    return (
        <section id="projects" ref={projectsRef}>
            <div className="container">
                <h2 className="section-title reveal">
                    <i className="bi bi-folder"></i> Projects
                </h2>
                <p className="section-subtitle reveal">Selected works showcasing my skills</p>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className={`glass-card project-card p-4 reveal delay-${index + 1}`}>
                                <div className="project-image-wrapper">
                                    <div className="project-image" style={{background: project.color}}>
                                        <i className="bi bi-laptop" style={{fontSize: '5rem', color: 'white'}}></i>
                                    </div>
                                    <div className="project-overlay">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary-custom" style={{padding: '10px 20px'}}>
                                            View Live
                                        </a>
                                    </div>
                                </div>
                                <h4 className="mb-2">{project.title}</h4>
                                <p className="text-secondary flex-grow-1" style={{fontSize: '0.95rem', lineHeight: '1.7'}}>
                                    {project.description}
                                </p>
                                <div className="mb-4">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="skill-tag" style={{padding: '6px 16px', fontSize: '0.8rem'}}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5 reveal">
                    <a href="https://github.com/zoheb-18" className="btn-outline-custom">
                        <i className="bi bi-github me-2"></i>
                        View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
