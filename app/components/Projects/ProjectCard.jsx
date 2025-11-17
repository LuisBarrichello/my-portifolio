import PropTypes from 'prop-types';
import IconGithub from '../../assets/img/github.svg?react';
import IconLink from '../../assets/img/link.svg?react';
import IconDocument from '../../assets/img/document.svg?react';
import Button from '../common/Buttons/Button';

function ProjectCard({ project, onOpenModal }) {
    const {
        image_url,
        title,
        description,
        technologies,
        url_github,
        homepage,
        featured,
    } = project;

    return (
        <div className="bg-white dark:bg-dark-20 rounded-lg overflow-hidden shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-300 group flex flex-col animate-fade-in">
            <figure className="relative aspect-video overflow-hidden">
                {image_url && (
                    <img
                        src={image_url}
                        alt={`Imagem ilustrativa do projeto "${title}"`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                    />
                )}

                {featured && (
                    <div
                        className="absolute top-0 left-0 bg-gradient-to-br from-brand-purple to-brand text-white text-xs font-bold px-5 py-2.5 flex items-center gap-1.5"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)',
                        }}>
                        <span className="font-bold">DESTAQUE</span>
                    </div>
                )}
            </figure>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex">
                    {description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {technologies?.map(
                        (tech) =>
                            tech && (
                                <span
                                    key={`${title}-${tech}`}
                                    className="bg-brand/10 text-brand text-sm font-semibold px-2.5 py-1 rounded-full">
                                    {tech}
                                </span>
                            ),
                    )}
                </div>
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row gap-4">
                    {featured && (
                        <Button
                            IconComponent={IconDocument}
                            altImage="Icone indicando um Link clicavel - Ver Estudo de Caso"
                            variant={'ghost'}
                            content="Ver Estudo de Caso"
                            onClick={onOpenModal}
                        />
                    )}

                    <Button
                        target="target"
                        variant={'purple-blue'}
                        content="Repositório"
                        IconComponent={IconGithub}
                        altImage="Icone indicando um Link clicavel - Visualizar Repositório"
                        pathLink={url_github}
                        aria-label={`Ver repositório do projeto ${title}`}
                    />

                    {homepage && (
                        <Button
                            target="target"
                            variant={'red-purple'}
                            content="Visualizar projeto"
                            IconComponent={IconLink}
                            altImage="Icone indicando um Link clicavel"
                            pathLink={homepage}
                            aria-label={`Visualizar projeto ${title}`}
                        />
                    )}

                    {featured && <></>}
                </div>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    project: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
        url_github: PropTypes.string.isRequired,
        homepage: PropTypes.string,
        featured: PropTypes.bool,
    }).isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

export default ProjectCard;
