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
                        <Link 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <li>Home</li>
                        </Link>
                        <Link 
                            to="about-me" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <li>Sobre mim</li>
                        </Link>
                        <Link 
                            to='experience'
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <li>Experiência</li>
                        </Link>
                        <Link 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={-70} 
                            duration={500}
                        >
                            <li>Projetos</li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
