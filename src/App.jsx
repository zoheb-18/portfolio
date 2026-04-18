import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BackToTop from './components/BackToTop';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Stats />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
