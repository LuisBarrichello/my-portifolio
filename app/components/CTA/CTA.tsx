'use client';
import Button from '../common/Buttons/Button';
import IconChat from '@/app/assets/icons/icon-chat.svg';

function CTA() {
    return (
        <section
            id="cta"
            className="h-screen flex flex-col items-center justify-center p-mobile md:p-tablet lg:p-desktop relative overflow-hidden"
            role="region"
            aria-label="Call to Action">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                        className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-brand-purple rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"
                        style={{ animationDuration: '5s' }}></div>
                    <div
                        className="w-[300px] h-[300px] md:w-[700px] md:h-[700px]  bg-brand-blue/80 absolute top-0 left-0 rounded-full filter blur-3xl opacity-30 dark:opacity-20 animate-pulse"
                        style={{
                            animationDuration: '5s',
                            animationDelay: '3s',
                        }}></div>
                </div>
            </div>

            <div
                className="relative z-10 w-full max-w-4xl mx-auto bg-white/80 dark:bg-dark-10/80 backdrop-blur-sm text-center 
                    px-6 py-12 
                    sm:px-8 sm:py-16 
                    md:px-12 md:py-20">
                <h2 className="title-section">
                    Vamos construir{' '}
                    <span className="text-brand">algo juntos?</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
                    Aberto a colaborações, freelas e novas oportunidades. Vamos
                    conversar?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        variant="purple-blue"
                        content="Entre em Contato"
                        pathLink="mailto:luisgabrielbarrichello@gmail.com"
                    />
                    <Button
                        variant="red-purple"
                        content="Veja meus Projetos"
                        pathLink="#projects" // Link nativo
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
                    <Button
                        IconComponent={IconChat}
                        variant="ghost"
                        content="Entrar em Contato via WhatsApp"
                        pathLink="https://wa.me/15997507932?text=Olá%20Luis,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </div>
            </div>
        </section>
    );
}

export default CTA;
