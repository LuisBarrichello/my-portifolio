import "./Projects.css"
import Button from "../common/Buttons/Button"
import IconLink from "../../assets/img/link.svg"
import IconArrowDown from "../../assets/img/arrow-down.svg"
import IconArrowUp from "../../assets/img/arrow-up.svg"
import IconGithub from "../../assets/img/github.svg"
import { useEffect, useState } from "react"
import Loader from "../common/Loader/Loader"


function Projects() {
    const [repositories, setRepositories] = useState([]);
    const [languages, setLanguages] = useState({});
    const [visibleProjects, setVisibleProjects] = useState(6);
    /* const githubToken = process.env.GITHUB_TOKEN; */
    const githubToken = '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'

    const fetchDataRepositories = async () => {
        try {

            const response = await fetch('https://api.github.com/users/LuisBarrichello/repos', {
                headers: {
                    Authorization: githubToken
                }
            })
            
            if(!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            
            const repositoriesJson = await response.json()

            const sortedRepositories = repositoriesJson
                .filter(repository => repository.name !== "LuisBarrichello")
                .sort((a, b) => {
                    const dataA = new Date(a.pushed_at);
                    const dataB = new Date(b.pushed_at);
                    return dataB - dataA
                })
            
            setRepositories(sortedRepositories)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    const fetchDataLanguagesTheProject = async (reposName) => {
        try {
            const response = await fetch(`https://api.github.com/repos/LuisBarrichello/${reposName}/languages`, {
                headers: {
                    Authorization: githubToken
                }
            });
            
            if (!response.ok) {
                const error = await response.text();
                throw new Error(`HTTP error: ${response.status}, ${error}`);
            }
            
            const languagesTheProject = await response.json();
            setLanguages((prevLanguages) => ({
                ...prevLanguages, 
                [reposName]: languagesTheProject 
            }));
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    };


    useEffect(() => {
        fetchDataRepositories()
    }, []) 

    useEffect(() => {
        repositories.forEach((repository) => {
            fetchDataLanguagesTheProject(repository.name);
        });
    }, [repositories]);
    
    const loadMoreProjects = () => {
        setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 6);
    };   
    
    const unloadPreviousProjects = () => {
        setVisibleProjects(6)
    };

    return (
        <section id="projects" className="container-projects hidden">
            <h2 className="title-section">projetos</h2>
            {repositories.length === 0 ? (
                <Loader itensLoad={'projetos'}></Loader>
            ) : (
                <div className="projects">
                    {repositories && repositories.slice(0, visibleProjects).map((repository) => {
                        return (
                            <div className="card-project" key={repository.id}>
                                <figure>
                                    {/*  
                                    "contents_url"
                                    pensar como padronizar imagens do projeto para colocar aqui
                                    */}
                                    <img src="" alt="" />
                                </figure>
                                <div className="infos-project">
                                    <h3 className="title-project">{repository.name}</h3>
                                    <span className="description-project">{
                                        repository.description
                                    }</span>
                                    <div className="technologies-project">
                                        <span className="subtitle-technologies">Tecnologias usadas no projeto</span>
                                        <span className="technologies">{
                                            languages[repository.name] && 
                                            Object.keys(languages[repository.name]).join(', ')
                                        }</span>
                                    </div>
                                    <div className="wrapper-buttons-project">
                                        <Button 
                                            target="target"
                                            className="button-gradient-purple-blue" 
                                            content="Visualizar Repositório" 
                                            srcImage={IconGithub} 
                                            altImage="Icone indicando um Link clicavel - Visualizar Repositório"
                                            pathLink={repository.html_url}
                                        ></Button>

                                        {
                                            repository.homepage == null || repository.homepage ==  undefined ? <></> : 
                                            <Button 
                                                target="target"
                                                className="button-gradient-red-purple" 
                                                content="Visualizar projeto" 
                                                srcImage={IconLink} 
                                                altImage="Icone indicando um Link clicavel"
                                                pathLink={repository.homepage}
                                            ></Button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
            {visibleProjects < repositories.length && (
                <Button
                    srcImage={IconArrowDown}
                    className={'button-gradient-red-purple load-more'}
                    onClick={loadMoreProjects}
                    content={'Carregar mais projetos'}
                    alt={"botao idicando para carregar mais projetos"}
                ></Button>
            )}
            {visibleProjects >= repositories.length && (
                <Button
                    srcImage={IconArrowUp}
                    className={'button-gradient-red-purple load-more'}
                    onClick={unloadPreviousProjects}
                    content={'Mostrar menos'}
                    alt={"botao idicando para ocultar projetos"}
                ></Button>
            )}
        </section>
    )
}

export default Projects