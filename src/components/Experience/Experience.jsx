import { useEffect, useState } from "react";
import "./Experience.css"
import PropTypes from 'prop-types'; 

function Experience({data}) {
    const [selectedExperience, setSelectedExperience] = useState({
        
    });

    const handleCompanySelected = (experience) => {
        setSelectedExperience(experience)
    }

    useEffect(() => {
        if(data.length > 0) {
            setSelectedExperience(data[0])
        }
    }, [data])

    return (
        <>
            <section id="experience" className="container-experience">
                <h2 className="title-section">Experiência</h2>
                <div className="container-all-experiences">
                    <div className="companies">
                        {data.map((experience, index) => {
                            return <button 
                                key={index} 
                                className="company"
                                onClick={() => handleCompanySelected(experience)}
                                >{experience.company}</button> 
                        })}
                    </div>
                    <div className="container-details-about-all-experiences">
                        <div className="experience">
                            <div className="experience-header">
                                <h4 className="office">{selectedExperience.office}</h4>
                                <span className="start-finish">
                                    <span className="start">{selectedExperience.start} </span>
                                    -
                                    <span className="finish"> {selectedExperience.finish}</span>
                                </span>
                            </div>
                            <span className="experience-company">{selectedExperience.company}</span>
                            <p className="experience-description">{selectedExperience.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience

Experience.propTypes = {
    data: PropTypes.array
}