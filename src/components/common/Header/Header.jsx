import { Link } from 'react-scroll';
import './Header.css';
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="main-header">
            <nav>
                <div>
                    <span className="logo">Portfólio</span>
                </div>
                <div className="menu-hamburguer">
                    <button
                        className={`button-menu-hamburguer ${
                            isMenuOpen ? 'open' : ''
                        }`}
                        onClick={toggleMenu}
                    >
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                        <span className="burger-bar"></span>
                    </button>
                </div>
                <div
                    className={
                        isMenuOpen
                            ? 'container-navbar mobile'
                            : 'container-navbar'
                    }
                >
                    <ul>
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about-me"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Sobre mim</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Conhecimentos</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Experiência</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Projetos</span>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="my-services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Serviços</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
