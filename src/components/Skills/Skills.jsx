import "./Skills.css"
import PropTypes from 'prop-types';

function Skills() {
    return (
        <section className="container-skills">
            <h2 className="title-section">Conhecimentos</h2>
            <div className="container-wrapper-skills">
                <div className="wrapper-skills-cards">
                    {
                    <>
                        <div>
                            <h3>Front End</h3>
                            <img src="https://skillicons.dev/icons?i=react,bootstrap,js,ts,html,css," />
                        </div>
                        <div>
                            <h3>Back End</h3>
                            <img src="https://skillicons.dev/icons?i=java,spring" />
                        </div>
                        <div >
                            <h3>Ferramentas</h3>
                            <img src="https://skillicons.dev/icons?i=vscode,idea,git,github,figma" />
                        </div>
                    </>
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills

Skills.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};
