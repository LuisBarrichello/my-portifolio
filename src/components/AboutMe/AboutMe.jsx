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

const socialLinks = [
    {
        href: 'https://www.instagram.com/dev.barrichello/',
        label: 'Instagram',
        icon: IconInstagram,
    },
    {
        href: 'https://github.com/LuisBarrichello',
        label: 'Github',
        icon: IconGithub,
    },
    {
        href: 'https://www.linkedin.com/in/luisgabrielbarrichello',
        label: 'LinkedIn',
        icon: IconLinkedIn,
    },
];

function AboutMe() {
    const [copied, setCopied] = useState(false);
    const emailAddress = 'luisgabrielbarrichello@gmail.com';

    const copyEmail = () => {
        navigator.clipboard
            .writeText(emailAddress)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Erro ao copiar o e-mail: ', error);
            });
    };

    return (
        <>
            <section
                id="about-me"
                className="bg-gray-50 dark:bg-dark-20 p-mobile md:p-tablet lg:p-desktop">
                <div className="w-full mx-w-7xl max-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span flex justify-center">
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80 group">
                            <div className="absolute -inset-1 bg-gradient-to-bl from-brand-purple to-brand-blue rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <img
                                src={PhotoMe}
                                alt="Foto de perfil de Luís Gabriel Barrichello"
                                className="relative w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-3 text-center lg:text-left">
                        <h2
                            id="about-me-heading"
                            className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">
                            Sobre mim
                        </h2>
                        <address className="not-italic mt-2 text-lg font-medium text-gray-700 dark:text-gray-300 ">
                            Laranjal Paulista, Brasil
                        </address>
                        <div className="mt-6 space-y-4 text-gray-600 dark:text-gray-400">
                            <p>
                                Cursando{' '}
                                <strong>
                                    Bacharelado em Engenharia de Computação
                                </strong>{' '}
                                na Univesp. Sou um{' '}
                                <strong>desenvolvedor web Full Stack</strong>{' '}
                                com expertise em back-end (Java, Spring) e
                                front-end (React).
                            </p>
                            <p>
                                Minha paixão é transformar ideias em soluções
                                completas e eficientes. Estou sempre expandindo
                                minhas habilidades para criar interfaces e
                                sistemas de alto nível, pronto para contribuir
                                em projetos inspiradores.
                            </p>
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start items-center gap-6">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                                    <link.icon className="w-7 h-7" />
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <Button
                                variant={'red-purple'}
                                content={'Download CV'}
                                IconComponent={IconDownload}
                                altImage={
                                    'Icone indicando download do curriculo'
                                }
                                pathLink={curriculo}
                                target={'target'}
                                download={true}
                            />
                            <Button
                                variant={'purple-blue'}
                                content={copied ? 'Copiado!' : 'Copiar E-mail'}
                                IconComponent={IconEmail}
                                altImage={
                                    'Icone indicando meu email para contato'
                                }
                                onClick={copyEmail}
                            />
                            <span aria-live="polite" className="sr-only">
                                {copied && 'E-mail copiado!'}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutMe;
