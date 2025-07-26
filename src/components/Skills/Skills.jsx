import "./Skills.css"
import PropTypes from 'prop-types';

function Skills() {
    return (
        <section id="skills" className="container-skills  hidden">
            <h2 className="title-section">Conhecimentos</h2>
            <div className="container-wrapper-skills">
                <div className="wrapper-skills-cards">
                    {
                        <>
                            <div className="hidden">
                                <h3>Front End</h3>
                                <img
                                    src="https://skillicons.dev/icons?i=react,bootstrap,js,ts,html,css,"
                                    alt="Icones react, bootstrap, js, ts, html, css"
                                />
                            </div>
                            <div className="hidden card-2-animation-delay">
                                <h3>Back End</h3>
                                <img
                                    src="https://skillicons.dev/icons?i=java,spring,mysql,postgres"
                                    alt="Icones java, spring, mysqsl, postgres"
                                />
                            </div>
                            <div className="hidden  card-3-animation-delay">
                                <h3>Ferramentas</h3>
                                <img
                                    src="https://skillicons.dev/icons?i=vscode,idea,git,github,figma,postman,vite,npm"
                                    alt="Icones vscode, idea, git, github, figma, postman,vite,npm"
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
        </section>
    );
}

export default Skills

Skills.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
};
