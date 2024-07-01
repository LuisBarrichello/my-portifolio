import Hero from "../../components/Hero/Hero"
import Header from "../../components/common/Header/Header"
import AboutMe from "../../components/AboutMe/AboutMe"
import Skills from "../../components/Skills/Skills"
import Experience from "../../components/Experience/Experience"
import DataExpecience from "../../data/experiences.json"
import Projects from "../../components/Projects/Projects"
import Footer from "../../components/common/Footer/Footer"
import LeetCodeDashboard from "../../components/LeetCodeDashboard/LeetCodeDashboard"
import CodewarsDashboard from "../../components/CodewarsDashboard/CodewarsDashboard"

function Home() {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Experience data={DataExpecience}></Experience>
            <Projects></Projects>
            <LeetCodeDashboard></LeetCodeDashboard>
            <CodewarsDashboard></CodewarsDashboard>
            <Footer></Footer>
        </>
    )
}

export default Home