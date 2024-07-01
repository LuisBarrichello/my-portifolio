import { Link } from 'react-scroll';
import MenuHamburguer from "../../../assets/img/menu-hamburguer.svg"
import './Header.css'
import { useState } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='main-header'>
            <nav>
                <div>
                    <span className='logo'>Portfólio</span>
                </div>
                <div className="menu-hamburguer">
                    <button className='button-menu-hamburguer' onClick={toggleMenu}>
                        <img src={MenuHamburguer} alt="icone menu hamburguer" />
                    </button>
                </div>
                <div className={isMenuOpen ? 'container-navbar mobile' : 'container-navbar'}>
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
                                to='experience'
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
                                to="leetcode" 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                            >
                                <span>LeetCode estatísticas</span>
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="codewars" 
                                spy={true} 
                                smooth={true} 
                                offset={-70} 
                                duration={500}
                            >
                                <span>Codewars estatísticas</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
