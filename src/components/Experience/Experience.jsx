import { useEffect, useState } from 'react';
import './Experience.css';
import DataExpecience from '../../data/experiences.json';
import PropTypes from 'prop-types';

function Experience() {
    const [selectedExperience, setSelectedExperience] = useState({});
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleCompanySelected = (experience, index) => {
        setSelectedExperience(experience);
        setSelectedIndex(index);
    };

    useEffect(() => {
        if (DataExpecience.length > 0) {
            setSelectedExperience(DataExpecience[0]);
        }
    }, [DataExpecience]);

    return (
        <>
            <section id="experience" className="container-experience hidden">
                <h2 className="title-section">Experiência</h2>
                <div className="container-all-experiences hidden">
                    <div className="companies">
                        {DataExpecience.map((experience, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`company ${
                                        index === selectedIndex ? 'active' : ''
                                    }`}
                                    onClick={() =>
                                        handleCompanySelected(experience, index)
                                    }
                                >
                                    {experience.company}
                                </button>
                            );
                        })}
                    </div>
                    <div className="container-details-about-all-experiences hidden">
                        <div className="experience">
                            <div className="experience-header">
                                <h3 className="office">
                                    {selectedExperience.office}
                                </h3>
                                <span className="start-finish">
                                    <span className="start">
                                        {selectedExperience.start}{' '}
                                    </span>
                                    -
                                    <span className="finish">
                                        {' '}
                                        {selectedExperience.finish}
                                    </span>
                                </span>
                            </div>
                            <span className="experience-company">
                                {selectedExperience.company}
                            </span>
                            <div className="experience-description">
                                <ul>
                                    {selectedExperience.description ? (
                                        selectedExperience.description
                                            .split('; ')
                                            .map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))
                                    ) : (
                                        <li>Nenhuma descrição disponível.</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Experience;

Experience.propTypes = {
    data: PropTypes.array,
};
