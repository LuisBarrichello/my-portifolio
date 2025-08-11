import PropTypes from 'prop-types';
import { useEffect } from 'react';

function ProjectModal({ project, onClose }) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <>
            <div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                onClick={onClose} 
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title">
                <div
                    className="bg-white dark:bg-dark-20 rounded-lg shadow-xl max-w-3xl w-full p-8 relative"
                    onClick={(e) => e.stopPropagation()} 
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        aria-label="Fechar modal">
                        {/* SVG de um ícone 'X' para fechar */}
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <h2
                        id="modal-title"
                        className="font-poppins text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                        {project.title}
                    </h2>

                    <div className="space-y-6 text-gray-700 dark:text-gray-300">
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                                O Problema
                            </h3>
                            <p>{project.case_study.problem}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                                A Solução
                            </h3>
                            <p>{project.case_study.solution}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                                Aprendizados
                            </h3>
                            <p>{project.case_study.learnings}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

ProjectModal.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        case_study: PropTypes.shape({
            problem: PropTypes.string.isRequired,
            solution: PropTypes.string.isRequired,
            learnings: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
