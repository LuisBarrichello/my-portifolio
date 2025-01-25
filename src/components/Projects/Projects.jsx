import './Projects.css';
import Button from '../common/Buttons/Button';
import IconLink from '../../assets/img/link.svg';
import IconArrowDown from '../../assets/img/arrow-down.svg';
import IconArrowUp from '../../assets/img/arrow-up.svg';
import IconGithub from '../../assets/img/github.svg';
import { useState } from 'react';
import Loader from '../common/Loader/Loader';
import projectsData from '../../data/projects.json';

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(4);

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
    };

    const unloadPreviousProjects = () => {
        setVisibleProjects(4);
    };

    return (
        <section id="projects" className="container-projects hidden">
            <h2 className="title-section">projetos</h2>
            {projectsData.length === 0 ? (
                <Loader itensLoad={'projetos'}></Loader>
            ) : (
                <div className="projects hidden">
                    {projectsData &&
                        projectsData
                            .slice(0, visibleProjects)
                            .map((project, index) => {
                                return (
                                    <div className="card-project" key={index}>
                                        <figure>
                                            {project.image_url !== '' ? (
                                                <img
                                                    src={project.image_url}
                                                    alt={project.title}
                                                />
                                            ) : (
                                                ''
                                            )}
                                        </figure>
                                        <div className="infos-project">
                                            <h3 className="title-project">
                                                {project.title}
                                            </h3>
                                            <span className="description-project">
                                                {project.description}
                                            </span>
                                            <div className="technologies-project">
                                                <span className="subtitle-technologies">
                                                    Tecnologias usadas no
                                                    projeto
                                                </span>
                                                <span className="technologies">
                                                    {project.technologies.join(
                                                        ', ',
                                                    )}
                                                </span>
                                            </div>
                                            <div className="wrapper-buttons-project">
                                                <Button
                                                    target="target"
                                                    className="button-gradient-purple-blue"
                                                    content="Visualizar Repositório"
                                                    srcImage={IconGithub}
                                                    altImage="Icone indicando um Link clicavel - Visualizar Repositório"
                                                    pathLink={
                                                        project.html_url_github
                                                    }></Button>

                                                {project.homepage == '' ||
                                                project.homepage ==
                                                    undefined ? (
                                                    <></>
                                                ) : (
                                                    <Button
                                                        target="target"
                                                        className="button-gradient-red-purple"
                                                        content="Visualizar projeto"
                                                        srcImage={IconLink}
                                                        altImage="Icone indicando um Link clicavel"
                                                        pathLink={
                                                            project.homepage
                                                        }></Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                </div>
            )}
            {visibleProjects < projectsData.length && (
                <Button
                    srcImage={IconArrowDown}
                    className={'button-gradient-red-purple load-more'}
                    onClick={loadMoreProjects}
                    content={'Carregar mais projetos'}
                    alt={'botao idicando para carregar mais projetos'}
                ></Button>
            )}
            {visibleProjects >= projectsData.length && (
                <Button
                    srcImage={IconArrowUp}
                    className={'button-gradient-red-purple load-more'}
                    onClick={unloadPreviousProjects}
                    content={'Mostrar menos'}
                    alt={'botao idicando para ocultar projetos'}
                ></Button>
            )}
        </section>
    );
}

export default Projects;
