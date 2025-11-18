import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import MyServices from './components/MyServices/MyServices';
import CTA from './components/CTA/CTA';

export default function Home() {
    return (
        <>
            <Hero />
            <AboutMe />
            <Projects />
            <Skills />
            <MyServices />
            <Experience />
            <CTA />
        </>
    );
}
