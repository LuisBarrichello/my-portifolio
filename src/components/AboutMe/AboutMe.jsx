import "./AboutMe.css"
import IconDownload from "../../assets/img/download-cloud.svg"
import IconEmail from "../../assets/img/mail.svg"
import IconGithub from "../../assets/img/github-brand-color.svg"
import IconInstagram from "../../assets/img/instagram-brand-color.svg"
import IconLinkedIn from "../../assets/img/linkedin-brand-color.svg"
import Button from "../common/Buttons/Button"
import { Link } from "react-router-dom"
import PhotoMe from "../../assets/img/me.png"
import curriculo from '../../data/curriculo.pdf'
import { useState } from "react"

function AboutMe() {
    const [copied, setCopied] = useState(false);
    const emailAddress = "luisgabrielbarrichello@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(emailAddress)
            .then(() => {
                setCopied(true);
            })
            .catch((error) => {
                console.error('Erro ao copiar o e-mail: ', error);
            });
    }   

    return (
        <>
            <section id="about-me" className="container-about-me">
                <div className="wrapper-photo">
                    <img src={PhotoMe} alt="foto perfil Luis" />
                </div>
                <div className="container-infos-about-me">
                    <h2 className="title-section">Sobre mim</h2>
                    <div className="infos-about-me">
                        <span className="city">Laranjal Paulista, Brasil</span>
                        <div>
                            <span className="description-about-me">
                            Cursando Bacharelado em Engenharia de Computação, especificamente no 3º Semestre. 
                            Um profissional de desenvolvimento web Full Stack, com uma base sólida em Front End e estudando Back End, dedicado à inovação e à resolução de desafios complexos. Dê uma olhada nas minhas contribuições no GitHub.
                            </span>
                            <span className="description-about-me">
                            Sou apaixonado por tecnologia e pela arte de criar interfaces web incríveis. Estou embarcando em uma emocionante jornada para me tornar um desenvolvedor full stack de destaque, e estou pronto para aprender, crescer e contribuir para projetos inspiradores  .
                            </span>
                        </div>
                    </div>
                    <div className="wrapper-social-media">
                        <Link to={'https://www.instagram.com/luisbarrichello/'} target="target">
                            <img src={IconInstagram} alt="" />
                        </Link>
                        <Link to={'https://github.com/LuisBarrichello'} target="target">
                            <img src={IconGithub} alt="" />
                        </Link>
                        <Link to={'https://www.linkedin.com/in/luisgabrielbarrichello'} target="target">
                            <img src={IconLinkedIn} alt="" />
                        </Link>

                    </div>
                    <div className="wrapper-buttons-about-me">
                        <Button 
                            className={'button-gradient-red-purple'}
                            content={'Currículo'}
                            srcImage={IconDownload}
                            altImage={"Icone indicando download do curriculo"}
                            pathLink={curriculo}
                            target={'target'}
                            download={true}
                        ></Button>
                        <Button 
                            className={'button-gradient-purple-blue'}
                            content={copied ? "E-mail copiado!" : "E-mail"}
                            srcImage={IconEmail}
                            altImage={"Icone indicando meu email para contato"}
                            onClick={copyEmail}
                        ></Button>
                    </div>
                    {/* Buttons here */}
                </div>
            </section>
        </>
    )
}

export default AboutMe