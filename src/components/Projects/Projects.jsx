import { useState } from 'react';
import IconArrowDown from '../../assets/img/arrow-down.svg?react';
import IconArrowUp from '../../assets/img/arrow-up.svg?react';
import projectsData from '../../data/projects.json';
import Button from '../common/Buttons/Button';
import Loader from '../common/Loader/Loader';
import ProjectCard from './ProjectCard';
import './Projects.css';

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
            <h2
                id="title-section"
                className="title-section">
                Projetos
            </h2>
            {projectsData.length === 0 ? (
                <Loader itensLoad={'projetos'}></Loader>
            ) : (
                <div id="projects-container" className="projects hidden">
                    {projectsData &&
                        projectsData
                            .slice(0, visibleProjects)
                            .map((project) => {
                                return (
                                    <ProjectCard
                                        key={project.title}
                                        project={project}
                                    />
                                );
                            })}
                </div>
            )}
            {visibleProjects < projectsData.length && (
                <Button
                    IconComponent={IconArrowDown}
                    variant={'red-purple'}
                    className={'load-more'}
                    onClick={loadMoreProjects}
                    content={'Carregar mais projetos'}
                    alt={'botao idicando para carregar mais projetos'}></Button>
            )}
            {visibleProjects >= projectsData.length && (
                <Button
                    IconComponent={IconArrowUp}
                    variant={'red-purple'}
                    className={'load-more'}
                    onClick={unloadPreviousProjects}
                    content={'Mostrar menos'}
                    alt={'botao idicando para ocultar projetos'}></Button>
            )}
        </section>
    );
}

export default Projects;
