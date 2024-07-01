import { useEffect, useState } from 'react'
import './LeetCodeDashboard.css'
import queries from '../../data/queries'

function LeetCodeDashboard() {
    const [userProblemsSolved, setUserProblemsSolved] = useState([]);
    const [languageStats, setLanguageStats] = useState([]);
    const [skills, setSkills] = useState({ advanced: [], intermediate: [], fundamental: [] });
    const [showAll, setShowAll] = useState({ advanced: false, intermediate: false, fundamental: false });
    const username = "luisbarrichello";

    
    const fetchDataLeetCode = async (query, variables, setState) => {
        const urlBase = '/leetcode-api/graphql';

        try {
            const response = await fetch(urlBase, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: query,
                    variables: variables,
                })
            })
            if (!response.ok) {
                throw new Error('Erro ao buscar dados do LeetCode: ' + response.statusText);
            }
            const responseData = await response.json();
            setState(responseData.data.matchedUser || responseData.data.allQuestionsCount);
        } catch (error) {
            console.error('Erro ao buscar dados do LeetCode:', error);
        }
    }

    useEffect(() => {
        fetchDataLeetCode(queries.userProblemsSolved, { username: username }, (data) => {
            if (data && data.submitStatsGlobal && data.submitStatsGlobal.acSubmissionNum) {
                setUserProblemsSolved(data.submitStatsGlobal.acSubmissionNum);
            } else {
                console.error('Dados inválidos para userProblemsSolved:', data);
            }
        });

        fetchDataLeetCode(queries.languageStats, { username: username }, (data) => {
            if (data && data.languageProblemCount) {
                setLanguageStats(data.languageProblemCount);
            } else {
                console.error('Dados inválidos para languageStats:', data);
            }
        });

        fetchDataLeetCode(queries.skillStats, { username: username }, (data) => {
            if(data && data.tagProblemCounts) {
                setSkills(data.tagProblemCounts)
            } else {
                console.error('Dados inválidos para Skills:', data);
            }
        });
    }, []);

    const renderSkills = (skillCategory) => {
        const itemsToShow = showAll[skillCategory] ? skills[skillCategory] : skills[skillCategory].slice(0, 5);

        return (
        <div className={`skills-${skillCategory}`}>
            <div className="skills-category-header">
                <span className={`rounded-full skill-${skillCategory}`}></span>
                <h4>{skillCategory.charAt(0).toUpperCase() + skillCategory.slice(1)}</h4>
            </div>
            <div className="skills-list">
                    {itemsToShow.map(skill => (
                        <div key={skill.tagSlug}>
                            <span className="language-leetcode--skill-tag-name">{skill.tagName} </span>
                            <span>x{skill.problemsSolved}</span>
                        </div>
                    ))}
                    {skills[skillCategory].length > 5 && (
                        <button className="button-show-more-less-leetcode" onClick={
                                () => setShowAll(prevState => ({ ...prevState, [skillCategory]: !prevState[skillCategory] }))
                            }>
                            {showAll[skillCategory] ? 'Ver Menos' : 'Ver Mais'}
                        </button>
                    )}
                </div>
        </div>
    )};

    return (
        <>
            <section id="leetcode" className="container-leetcode  hidden">
                <h2 className="title-section">LeetCode - Dashboard</h2>
                <div className='container-leetcode-solved-problems'>
                    <div className='container-solved-problems hidden card-1-animation-delay'>
                        <h3 className='title-leetcode'>Problemas resolvidos:</h3>
                        <div className='wapper-solved-problems'>
                            {userProblemsSolved.map(stat => (
                                <div key={stat.difficulty}>
                                    <div className={stat.difficulty.toLowerCase()}>{stat.difficulty}</div>
                                    <div>{stat.count} {stat.count > 1 ? 'resolvidos' : 'resolvido'}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='container-languages-leetcode hidden card-2-animation-delay'>
                        <h3 className='title-leetcode'> Languages</h3>
                        <div className='wapper-languages-leetcode'>
                            {languageStats.map(stat => (
                                <div key={stat.languageName}>
                                    <span className='language-leetcode--skill-tag-name'>{stat.languageName}</span>
                                    <span>{stat.problemsSolved} problemas {stat.problemsSolved > 1 ? 'resolvidos' : 'resolvido'}</span>
                                </div>  
                            ))}
                        </div>
                    </div>
                    <div className="container-skills-leetcode hidden card-3-animation-delay">
                        <h3 className='title-leetcode'>Skills</h3>
                        <div className='wapper-skills'>
                            {renderSkills('advanced')}
                            {renderSkills('intermediate')}
                            {renderSkills('fundamental')}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeetCodeDashboard