import { useState, useMemo } from 'react';
import projectsData from '../../data/projects.json';
import Button from '../common/Buttons/Button';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import FilterProjects from './FilterProjects';
import IconArrowDown from '../../assets/img/arrow-down.svg?react';
import IconArrowUp from '../../assets/img/arrow-up.svg?react';

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const categories = useMemo(
        () => ['Todos', ...new Set(projectsData.map((p) => p.category))],
        [],
    );

    const filteredProjects = useMemo(
        () =>
            selectedCategory === 'Todos'
                ? projectsData
                : projectsData.filter((p) => p.category === selectedCategory),
        [selectedCategory],
    );

    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
    };

    const unloadPreviousProjects = () => {
        setVisibleProjects(6);
    };

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <>
            <section
                id="projects"
                className="p-mobile md:p-tablet lg:p-desktop bg-gray-50 dark:bg-dark-20">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                    <h2 id="title-section" className="title-section">
                        Projetos
                    </h2>
                    <p className="max-w-2xl text-center text-gray-600 dark:text-gray-400 mb-12">
                        Aqui estão alguns dos projetos em que trabalhei. Filtre
                        por categoria para ver áreas específicas de interesse.
                    </p>

                    <FilterProjects
                        categories={categories}
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />

                    <div
                        id="projects-container"
                        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects &&
                            filteredProjects
                                .slice(0, visibleProjects)
                                .map((project) => {
                                    return (
                                        <ProjectCard
                                            key={project.title}
                                            project={project}
                                            onOpenModal={() =>
                                                openModal(project)
                                            }
                                        />
                                    );
                                })}
                    </div>

                    <div className="mt-12">
                        {visibleProjects < filteredProjects.length && (
                            <Button
                                IconComponent={IconArrowDown}
                                variant={'red-purple'}
                                className={'load-more'}
                                onClick={loadMoreProjects}
                                content={'Carregar mais projetos'}
                                alt={
                                    'botao idicando para carregar mais projetos'
                                }></Button>
                        )}

                        {visibleProjects > 6 && filteredProjects.length > 6 && (
                            <Button
                                IconComponent={IconArrowUp}
                                variant={'red-purple'}
                                className={'load-more'}
                                onClick={unloadPreviousProjects}
                                content={'Mostrar menos'}
                                alt={
                                    'botao idicando para ocultar projetos'
                                }></Button>
                        )}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </>
    );
}

export default Projects;
