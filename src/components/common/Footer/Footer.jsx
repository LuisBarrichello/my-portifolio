import './Footer.css';
import IconGithub from '../../../assets/img/github.svg?react';
import IconLinkedin from '../../../assets/img/linkedin.svg?react';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="copyright">
                <div>
                    <span>
                        {' '}
                        © Copyright 2024 - Todos os direitos reservados
                    </span>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="https://github.com/LuisBarrichello"
                                target="_blank"
                                rel="noopener noreferrer">
                                <IconGithub
                                    aria-label="icone do github"
                                    className="w-5 h-5"
                                />
                                <span>Github</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/luisgabrielbarrichello/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <IconLinkedin
                                    aria-label="icone do Linkedin"
                                    className="w-5 h-5"
                                />
                                <span>Linkedin</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="developed-by">
                <span>
                    Desenvolvido por{' '}
                    <a
                        href="https://linkedin.com/in/luisgabrielbarrichello"
                        target="_blank"
                        rel="noopener noreferrer">
                        Luís Gabriel Barrichello
                    </a>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
