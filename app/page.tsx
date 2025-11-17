import Hero from './components/Hero/Hero';
import Header from './components/common/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/common/Footer/Footer';
import MyServices from './components/MyServices/MyServices';
import CTA from './components/CTA/CTA';
import ThemeSwitcher from './components/common/ThemeSwitcher/ThemeSwitcher';
import BackToTopButton from './components/common/Buttons/BackToTopButton';

export default function Home() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skills></Skills>
            <MyServices></MyServices>
            <Experience></Experience>
            <CTA></CTA>
            <Footer></Footer>
            <div className="fixed bottom-5 right-5 flex flex-col items-center gap-y-4 z-50">
                <ThemeSwitcher />
                <BackToTopButton />
            </div>
        </>
    );
}
