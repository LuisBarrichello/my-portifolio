import { useState } from 'react';
import { Link } from 'react-router-dom';
import IconDownload from '../../assets/img/download-cloud.svg?react';
import IconGithub from '../../assets/img/github.svg?react';
import IconInstagram from '../../assets/img/instagram.svg?react';
import IconLinkedIn from '../../assets/img/linkedin.svg?react';
import IconEmail from '../../assets/img/mail.svg?react';
import PhotoMe from '../../assets/img/me.png';
import curriculo from '../../data/curriculo.pdf';
import Button from '../common/Buttons/Button';
import './AboutMe.css';

function AboutMe() {
    const [copied, setCopied] = useState(false);
    const emailAddress = 'luisgabrielbarrichello@gmail.com';

    const copyEmail = () => {
        navigator.clipboard
            .writeText(emailAddress)
            .then(() => {
                setCopied(true);
            })
            .catch((error) => {
                console.error('Erro ao copiar o e-mail: ', error);
            });
    };

    return (
        <>
            <section id="about-me" className="container-about-me hidden">
                <div className="wrapper-photo hidden">
                    <img src={PhotoMe} alt="foto perfil Luis" />
                </div>
                <div className="container-infos-about-me hidden">
                    <h2 className="title-section">Sobre mim</h2>
                    <div className="infos-about-me">
                        <span className="city">Laranjal Paulista, Brasil</span>
                        <div>
                            <span className="description-about-me">
                                Cursando{' '}
                                <strong>
                                    Bacharelado em Engenharia de Computação
                                </strong>
                                na Universidade Virtual do Estado de São Paulo.
                            </span>
                            <span className="description-about-me">
                                Sou um{' '}
                                <strong>desenvolvedor web Full Stack</strong>{' '}
                                com
                                <strong>
                                    {' '}
                                    expertise em back-end, utilizando Java e
                                    Spring, e em front-end, com React
                                </strong>
                                . Tenho uma base sólida nessas tecnologias de
                                desenvolvimento web e estou sempre buscando
                                novas formas de inovar e enfrentar desafios
                                complexos.
                            </span>
                            <span className="description-about-me">
                                Confira minhas{' '}
                                <strong>contribuições no GitHub</strong> e veja
                                como estou{' '}
                                <strong>
                                    expandindo constantemente minhas habilidades
                                </strong>{' '}
                                para entregar{' '}
                                <strong>soluções completas</strong> e
                                eficientes. Sou apaixonado por tecnologia e
                                comprometido em criar
                                <strong> interfaces web de alto nível</strong>,
                                trabalhando para evoluir como profissional e
                                contribuir para projetos inspiradores.
                            </span>
                        </div>
                    </div>
                    <div className="wrapper-social-media">
                        <Link
                            to={'https://www.instagram.com/dev.barrichello/'}
                            target="target">
                            <IconInstagram
                                aria-label="Instagram"
                                className="w-8 h-8"
                            />
                        </Link>
                        <Link
                            to={'https://github.com/LuisBarrichello'}
                            target="target">
                            <IconGithub
                                aria-label="Github"
                                className="w-8 h-8"
                            />
                        </Link>
                        <Link
                            to={
                                'https://www.linkedin.com/in/luisgabrielbarrichello'
                            }
                            target="target">
                            <IconLinkedIn
                                aria-label="LinkedIn"
                                className="w-8 h-8"
                            />
                        </Link>
                    </div>
                    <div className="wrapper-buttons-about-me">
                        <Button
                            variant={'red-purple'}
                            content={'Currículo'}
                            IconComponent={IconDownload}
                            altImage={'Icone indicando download do curriculo'}
                            pathLink={curriculo}
                            target={'target'}
                            download={true}></Button>
                        <Button
                            variant={'purple-blue'}
                            content={copied ? 'E-mail copiado!' : 'E-mail'}
                            IconComponent={IconEmail}
                            altImage={'Icone indicando meu email para contato'}
                            onClick={copyEmail}></Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
