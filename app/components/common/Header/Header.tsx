'use client';
import { Link } from 'react-scroll';
import { useState } from 'react';
import clsx from 'clsx';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about-me', label: 'Sobre mim' },
        { to: 'projects', label: 'Projetos' },
        { to: 'skills', label: 'Conhecimentos' },
        { to: 'my-services', label: 'Serviços' },
        { to: 'experience', label: 'Experiência' },
    ];

    const navLinkClasses =
        'relative cursor-pointer font-medium text-dark dark:text-white hover:text-brand-blue-800 dark:hover:text-brand transition-colors duration-300';

    return (
        <header className="bg-white/80 dark:bg-dark-10/80 backdrop-blur-sm sticky top-0 z-50 px-6 md:px-10 lg:px-20">
            <nav className="w-full h-16 flex items-center justify-between">
                <div>
                    <a
                        href="https://www.linkedin.com/in/luisgabrielbarrichello/"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-x-2 text-xl md:text-2xl font-extrabold">
                        <span className="font-poppins bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-2 py-0.5 rounded-md">
                            LGB
                        </span>
                        <span className="font-poppins text-gray-500 dark:text-gray-400">
                            .dev
                        </span>
                    </a>
                </div>

                <div
                    className={clsx(
                        'absolute md:static top-16 left-0 w-full md:w-auto',
                        'bg-white/95 dark:bg-dark-10/95 md:bg-transparent dark:md:bg-transparent',
                        'transition-transform duration-300 ease-in-out md:transform-none',
                        {
                            'translate-y-0': isMenuOpen,
                            '-translate-y-[150%] md:translate-y-0': !isMenuOpen,
                        },
                    )}>
                    <ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 w-full h-screen md:h-auto">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                offset={-64}
                                duration={500}
                                onClick={() => setIsMenuOpen(false)}
                                className={`${navLinkClasses} group text-lg`}>
                                <span>{link.label}</span>

                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue-800 dark:bg-brand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                            </Link>
                        ))}
                    </ul>
                </div>

                <div className="md:hidden z-50">
                    <button
                        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
                        onClick={toggleMenu}>
                        <span
                            className={clsx(
                                'block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out',
                                { 'rotate-45 translate-y-2': isMenuOpen },
                            )}></span>
                        <span
                            className={clsx(
                                'block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-opacity duration-300 ease-in-out',
                                { 'opacity-0': isMenuOpen },
                            )}></span>
                        <span
                            className={clsx(
                                'block w-6 h-0.5 bg-gray-800 dark:bg-gray-200 transition-transform duration-300 ease-in-out',
                                { '-rotate-45 -translate-y-2': isMenuOpen },
                            )}></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
