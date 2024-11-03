import Button from "../common/Buttons/Button"
import IconLinkedin from "../../assets/img/linkedin.svg"
import IconGithub from "../../assets/img/github.svg"
import './Hero.css'

function Hero() {
    return (
        <section className="wrapper-hero hidden">
            <div className="apresentation-buttos-contact hidden">
                <div className="wrapper-apresentation">
                    <p className="description-apresentation">Olá, eu sou</p>
                    <span className="my-name hidden">Luís Gabriel</span>
                    <p className="description-apresentation">Software Engineer</p>
                </div>
                <div className="buttons-contact">
                    <Button 
                        className={'button-gradient-purple-blue'} 
                        content={'Linkedin'} 
                        srcImage={IconLinkedin} 
                        altImage={'icon Linkdin'} 
                        pathLink={'https://www.linkedin.com/in/luisgabrielbarrichello'}
                        target={'target'}
                    ></Button>
                    <Button 
                        className={'button-gradient-red-purple'} 
                        content={'Github'} 
                        srcImage={IconGithub} 
                        altImage={'icon Github'} 
                        pathLink={'https://github.com/LuisBarrichello'}
                        target={'target'}
                    ></Button>
                </div>
            </div>
            <div className="container-ilustration hidden">
                {/* Ilustration here */}
            </div>
        </section>
    )
}

export default Hero