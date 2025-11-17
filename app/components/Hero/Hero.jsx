import Button from '../common/Buttons/Button';
import IconLinkedin from '../../assets/img/linkedin.svg?react';
import IconGithub from '../../assets/img/github.svg?react';
import ArrowDownIcon from '../common/ArrowDownIcon/ArrowDownIcon';
import { Link as ScrollLink } from 'react-scroll';

const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/luisgabrielbarrichello',
        label: 'Linkedin',
        variant: 'purple-blue',
        IconComponent: IconLinkedin,
    },
    {
        href: 'https://github.com/LuisBarrichello',
        label: 'Github',
        variant: 'red-purple',
        IconComponent: IconGithub,
    },
];

function Hero() {
    return (
        <section
            id="home"
            className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden px-6"
            role="region"
            aria-label="Hero Section">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div
                    className="w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-brand-purple rounded-full filter blur-3xl opacity-10 dark:opacity-20 animate-pulse"
                    style={{ animationDuration: '8s' }}
                    aria-hidden="true"></div>
                <div
                    className="w-[70vw] h-[70vw] max-w-[500px] max-h-[500px] bg-brand-blue absolute rounded-full top-0 left-0 filter blur-3xl opacity-10 dark:opacity-20 animate-pulse"
                    style={{
                        animationDuration: '6s',
                        animationDelay: '2s',
                    }}
                    aria-hidden="true"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="flex flex-col gap-1">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
                        Luís Gabriel
                    </h1>
                    <p className="text-xl md:text-2xl text-brand-blue-600 dark:text-brand font-medium">
                        Software Engineer
                    </p>
                </div>
                <p className="md:text-lg lg:text-xl max-w-2xl text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-gray-100 transition-all duration-300">
                    Desenvolvedor focado em criar soluções robustas e
                    escaláveis, transformando ideias complexas em realidade
                    digital.
                </p>
                <nav
                    className="flex flex-col sm:flex-row gap-4"
                    aria-label="Redes Sociais">
                    {SOCIAL_LINKS.map((link) => (
                        <Button
                            key={link.href}
                            variant={link.variant}
                            content={link.label}
                            IconComponent={link.IconComponent}
                            pathLink={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue-600 rounded-lg"
                        />
                    ))}
                </nav>
            </div>
            <ScrollLink
                to="about-me"
                smooth={true}
                duration={500}
                offset={-50}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer"
                aria-label="Rolar para a próxima seção">
                <div className="w-10 h-10 rounded-full border-2 border-gray-800 dark:border-gray-400 flex items-center justify-center animate-bounce opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <ArrowDownIcon></ArrowDownIcon>
                </div>
            </ScrollLink>
        </section>
    );
}

export default Hero;
