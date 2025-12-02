import Button from '../common/Buttons/Button';
import IconChat from '@/app/assets/icons/icon-chat.svg';
import IconCode from '@/app/assets/icons/icon-tag-code.svg';
import IconLogicPartition from '@/app/assets/icons/icon-logic-partition.svg';

const servicesData = [
    {
        title: 'APIs Robustas & Sistemas Escaláveis',
        description:
            'Desenvolvo o coração da sua aplicação com foco em segurança, performance e escalabilidade. Garanto um sistema que cresce de forma sólida junto com o seu negócio, utilizando as melhores práticas em Java e Spring Boot.',
        Icon: IconLogicPartition,
        variant: 'purple-blue',
    },
    {
        title: 'Interfaces Modernas & Experiências Interativas',
        description:
            'Construo a face da sua aplicação. Crio interfaces rápidas, responsivas e intuitivas com React e Tailwind CSS, garantindo que seu usuário tenha uma experiência memorável em qualquer dispositivo.',
        Icon: IconCode,
        variant: 'red-purple',
    },
];

function MyServices() {
    return (
        <section
            id="my-services"
            className="p-mobile md:p-tablet lg:p-desktop bg-white dark:bg-dark-20"
            aria-labelledby="services-heading">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <h2 id="services-heading" className="title-section">
                    Como Posso Ajudar
                </h2>
                <p className="mt-4 max-w-2xl text-center text-gray-600 dark:text-gray-400">
                    Como desenvolvedor Full Stack, ofereço soluções completas
                    que conectam uma base sólida de back-end a uma experiência
                    de usuário de alta qualidade no front-end.
                </p>
                <div className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.title}
                            className={`p-1 rounded-lg bg-gradient-to-bl ${
                                service.variant === 'purple-blue'
                                    ? 'from-brand-purple to-brand-blue'
                                    : 'from-brand-red to-brand-purple-dark'
                            }`}>
                            <div className="bg-white dark:bg-dark-10 rounded-md p-4 md:p-8 h-full flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="bg-brand/10 p-3 rounded-full mb-6">
                                    <service.Icon
                                        className="w-8 h-8 text-brand"
                                        aria-hidden="true"
                                    />
                                </div>
                                <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <p className="text-xl font-medium text-gray-800 dark:text-gray-200 ">
                        Tem um projeto em mente?
                    </p>
                    <div className="mt-6">
                        <Button
                            target="target"
                            variant={'ghost'}
                            className=""
                            content="Vamos conversar?"
                            altImage="icon chat"
                            IconComponent={IconChat}
                            pathLink="https://wa.me/15997507932?text=Olá%20Luis,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
                            rel="noopener noreferrer"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyServices;
