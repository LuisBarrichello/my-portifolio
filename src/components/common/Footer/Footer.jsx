import "./Footer.css"
import IconGithub from "../../../assets/img/github.svg"
import IconLinkedin from "../../../assets/img/linkedin.svg"

const Footer = () => {

    return (
        <footer id="footer">
            <div>
                <span>@ 2024 - Luís Gabriel Barrichello</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={IconGithub} alt="icone do github" />
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src={IconLinkedin} alt="icone do Linkedin" />
                            <span>Linkedin</span>
                        </a>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer