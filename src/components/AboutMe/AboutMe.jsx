import { useState } from 'react';
import IconDownload from '../../assets/img/download-cloud.svg?react';
import IconEmail from '../../assets/img/mail.svg?react';
import PhotoMe from '../../assets/img/me.png';
import curriculo from '../../data/curriculo.pdf';
import Button from '../common/Buttons/Button';
import { aboutMeText } from '../../data/data';
import SocialLinks from '../common/SocialLinks/SocialLinks';

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
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span flex justify-center">
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80 group">
                            <div className="absolute -inset-1 bg-gradient-to-bl from-brand-purple to-brand-blue rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <img
                                src={PhotoMe}
                                alt="Foto de perfil de Luís Gabriel Barrichello"
                                className="relative w-full h-full object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                decoding="async"
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
                            {aboutMeText.map((entry) => (
                                <p key={entry.id}>
                                    {entry.parts.map((part, index) =>
                                        typeof part === 'string' ? (
                                            part
                                        ) : part.bold ? (
                                            <strong
                                                key={index}
                                                className="text-gray-900 dark:text-white font-semibold">
                                                {part.text}
                                            </strong>
                                        ) : (
                                            <span key={index}>{part.text}</span>
                                        ),
                                    )}
                                </p>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start items-center gap-6">
                            <SocialLinks />
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
                                aria-pressed={copied}
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
