import IconGithub from '../../../assets/img/github.svg?react';
import IconLinkedin from '../../../assets/img/linkedin.svg?react';

const Footer = () => {
    return (
        <footer
            id="footer"
            className="dark:bg-dark-10 text-gray-700 dark:text-gray-400 p-mobile sm:p-tablet md:p-desktop">
            <div className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center sm:items-start gap-4 text-sm">
                    <span>
                        © {new Date().getFullYear()} - Todos os direitos
                        reservados
                    </span>
                    <nav className="flex gap-4">
                        <a
                            href="https://github.com/LuisBarrichello"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <IconGithub
                                aria-label="Github"
                                className="w-5 h-5"
                            />
                            <span>Github</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/luisgabrielbarrichello/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
                            <IconLinkedin
                                aria-label="Linkedin"
                                className="w-5 h-5"
                            />
                            <span>Linkedin</span>
                        </a>
                    </nav>
                </div>
                <div className="text-sm text-center sm:text-right">
                    <span>
                        Desenvolvido por{' '}
                        <a
                            href="https://linkedin.com/in/luisgabrielbarrichello"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-brand-blue-700 dark:text-brand hover:underline">
                            Luís Gabriel Barrichello
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
