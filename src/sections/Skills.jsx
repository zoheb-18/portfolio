import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills = () => {
    const skillsRef = useScrollReveal();

    // Define skills with Devicon classes
    const skillsData = [
        // Row 1 - Frontend Core
        [
            { name: 'HTML5', icon: 'devicon-html5-plain' },
            { name: 'CSS3', icon: 'devicon-css3-plain' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'React.js', icon: 'devicon-react-original' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' }
        ],
        // Row 2 - Backend & Database (reverse direction)
        [
            { name: 'Node.js', icon: 'devicon-nodejs-plain' },
            { name: 'Express.js', icon: 'devicon-express-original' },
            { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
            { name: 'Supabase', icon: 'devicon-supabase-plain' },
            { name: 'Git', icon: 'devicon-git-plain' }
        ],
        // Row 3 - Tools & Platforms
        [
            { name: 'GitHub', icon: 'devicon-github-original' },
            { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
            { name: 'React.js', icon: 'devicon-react-original' },
            { name: 'JavaScript', icon: 'devicon-javascript-plain' },
            { name: 'Node.js', icon: 'devicon-nodejs-plain' }
        ]
    ];

    // Create marquee content with EXACTLY 2 identical sets for seamless loop
    // translateX(-50%) requires exactly one duplicate (total 2 sets)
    const createMarqueeContent = (skills) => {
        // Double the content for seamless infinite scroll
        const duplicatedSkills = [...skills, ...skills];
        return duplicatedSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skill-card">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
            </div>
        ));
    };

    return (
        <section id="skills" ref={skillsRef} className="position-relative">
            <div className="skills-header-glow "></div>
            <div className="container position-relative" style={{ zIndex: 1 }}>
                <h2 className="section-title reveal">
                    <i className="bi bi-stack"></i> Skills
                </h2>
                <p className="section-subtitle reveal">Technologies and tools I work with</p>

                <div className="skills-marquee-container reveal">
                    {skillsData.map((rowSkills, rowIndex) => (
                        <div key={rowIndex} className="marquee-row">
                            <div className="marquee-track">
                                {createMarqueeContent(rowSkills)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
