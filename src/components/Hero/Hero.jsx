import { Link } from "react-router-dom"

import IconLinkedin from "../../assets/img/linkedin.svg"
import IconGithub from "../../assets/img/github.svg"
import './Hero.css'

function Hero() {
    return (
        <section className="wrapper-hero">
            <div className="apresentation-buttos-contact">
                <div className="wrapper-apresentation">
                    <p className="description-apresentation">Olá, eu sou</p>
                    <span className="my-name">Luís Gabriel</span>
                    <p className="description-apresentation">Desenvolvedor Front End</p>
                </div>
                <div className="buttons-contact">
                    <button className="button-linkedin">
                        <Link>
                            <img src={IconLinkedin} alt="" />
                            <span>LinkedIn</span>
                        </Link>
                    </button>
                    <button className="button-github">
                        <Link>
                            <img src={IconGithub} alt="" />
                            <span>Github</span>
                        </Link>
                    </button>
                </div>
            </div>
            <div className="container-ilustration">

            </div>
        </section>
    )
}

export default Hero