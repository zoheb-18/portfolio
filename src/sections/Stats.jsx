import { useScrollReveal } from '../hooks/useScrollReveal';

const Stats = () => {
    const statsRef = useScrollReveal();

    const stats = [
        { number: '25+', label: 'Projects Completed' },
        { number: '1+', label: 'year Experience' },
        { number: 'MERN', label: 'Certified Developer' }
    ];

    return (
        <section className="py-5" ref={statsRef}>
            <div className="container">
                <div className="glass-card p-2">
                    <div className="row">
                        {stats.map((stat, index) => (
                            <div key={index} className="col-md-4">
                                <div className={`stat-card reveal delay-${index + 1}`}>
                                    <div className="stat-number">{stat.number}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                                {index < stats.length - 1 && (
                                    <div className="d-none d-md-block" style={{
                                        position: 'absolute',
                                        right: 0,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: '1px',
                                        height: '60px',
                                        background: 'var(--border-color)'
                                    }}></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
