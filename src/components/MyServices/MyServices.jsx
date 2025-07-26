import Button from '../common/Buttons/Button';
import IconChat from '../../assets/img/icon-chat.svg?react';
import IconCode from '../../assets/img/icon-tag-code.svg?react';
import IconLogicPartition from '../../assets/img/icon-logic-partition.svg?react';
import './MyServices.css';

function MyServices() {
    return (
        <section id="my-services" className="container-my-services">
            <div className="wrapper-titles hidden">
                <h2 className="title-section">meus serviços</h2>
                <h3 className="subtitle-section">Como eu posso te ajudar?</h3>
            </div>
            <div className="container-infos-my-services">
                <div className="wrapper-infos-my-services hidden">
                    <div className="about-my-services">
                        <p>
                            Como <strong>desenvolvedor full-stack</strong> com
                            conhecimentos em back-end utilizando Java e Spring,
                            banco de dados e front-end com React, javascript e
                            typescript, ofereço{' '}
                            <strong>soluções robustas e completas</strong>,
                            desde a definição dos projetos até a experiência do
                            usuário final.
                            <p>
                                Minha expertise permite entregar
                                <strong>
                                    {' '}
                                    projetos dinâmicos e escaláveis, integrando
                                    APIs eficientes e uma interface intuitiva e
                                    responsiva.
                                </strong>
                            </p>
                            Ofereço serviços que abrangem desde a
                            <strong>
                                {' '}
                                criação de sistemas back-end com autenticação
                                segura, gerenciamento de dados e integrações de
                                APIs
                            </strong>
                            , até o{' '}
                            <strong>
                                desenvolvimento de interfaces front-end modernas
                                e altamente funcionais
                            </strong>{' '}
                            garantindo uma{' '}
                            <strong>excelente experiência do usuário</strong>.
                        </p>
                    </div>
                    <div className="wrapper-cards-my-services hidden">
                        <div className="card-my-services button-gradient-purple-blue">
                            <IconLogicPartition
                                aria-label="icon logic partition"
                                className="w-12 h-12"
                            />
                            <div>
                                <h4 className="card-title-my-services">
                                    Backend Development
                                </h4>
                                <span>
                                    Desenvolvo APIs robustas e sistemas
                                    escaláveis utilizando Java e Spring boot,
                                    banco de dados com MySQL ou PostgreSQL,
                                    entre outras tecnologias.
                                </span>
                            </div>
                        </div>
                        <div className="card-my-services button-gradient-red-purple">
                            <IconCode
                                aria-label="icon code"
                                className="w-12 h-12"
                            />
                            <div>
                                <h4 className="card-title-my-services">
                                    Frontend Development
                                </h4>
                                <span>
                                    Construo aplicações web modernas,
                                    interativas e responsivas, otimizadas para
                                    todos os dispositivos. Utilizando React.js,
                                    entre outras tecnologias para construção de
                                    interfaces dinâmicas.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Button
                target="target"
                variant={'purple-blue'}
                className="hidden"
                content="Vamos conversar?"
                altImage="icon chat"
                IconComponent={IconChat}
                pathLink="https://wa.me/15997507932?text=Olá%20Luis,%20vi%20seus%20serviços%20e%20gostaria%20de%20saber%20mais!"></Button>
        </section>
    );
}

export default MyServices;
