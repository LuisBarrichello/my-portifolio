import Hero from "../../components/Hero/Hero"
import Header from "../../components/common/Header/Header"
import AboutMe from "../../components/AboutMe/AboutMe"
import Skills from "../../components/Skills/Skills"
import Experience from "../../components/Experience/Experience"
import Projects from "../../components/Projects/Projects"
import Footer from "../../components/common/Footer/Footer"

import MyServices from "../../components/MyServices/MyServices"

/**
 * @function Home
 * @description The main page of my portfolio
 * @returns {JSX.Element} A JSX element representing the main page
 * @example
 * <Home />
 */

function Home() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skills></Skills>
            <Experience></Experience>
            <MyServices></MyServices>
            <Footer></Footer>
        </>
    );
}

export default Home