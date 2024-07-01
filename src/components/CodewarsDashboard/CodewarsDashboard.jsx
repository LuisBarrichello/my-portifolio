import { useEffect, useState } from 'react'
import "./CodewarsDashboard.css"

function CodewarsDashboard() {
    const [userProblemsSolved, setUserProblemsSolved] = useState({});
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [ranks, setRanks] = useState({languages: []});
    const [honor, setHonor] = useState(0);
    const [leaderboardPosition, setLeaderboardPosition] = useState(0);
    const languagesArray = Object.entries(ranks.languages);
    const overallRank = ranks.overall;

    const fetchDataUserCodewars = async () => {
        const url = "https://www.codewars.com/api/v1/users/luisbarrichello"
        
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Erro ao buscar dados do LeetCode: ' + response.statusText);
            }

            const responseData = await response.json();
            setUserProblemsSolved(responseData)
            setHonor(responseData.honor);
            setLeaderboardPosition(responseData.leaderboardPosition)
        } catch (error) {
            throw new Error("Erro ao carregar dados do codewars" + error)
        }
    }

    useEffect(() => {
        fetchDataUserCodewars();
    }, [])

    useEffect(() => {
        if (userProblemsSolved.codeChallenges) {
            setTotalCompleted(userProblemsSolved.codeChallenges.totalCompleted);
        }

        if (userProblemsSolved.ranks) {
            setRanks(userProblemsSolved.ranks);
        }

    }, [userProblemsSolved])

    return (
        <>
            <section id="codewars" className="container-codewars  hidden">
                <h2 className="title-section">Codewars - Dashboard</h2>
                <div className="container-data-codewars">
                    <div>
                        <h4>&#127942; Rank geral</h4>
                        {overallRank != null && overallRank.name}
                    </div>
                    <div>
                        <h4>&#128736; Problemas resolvidos</h4>
                        <span>{totalCompleted} {totalCompleted > 1 ? 'resolvidos' : 'resolvido'}</span>
                    </div>  
                    <div>
                        <h4>&#11088; Honor Points</h4>
                        <span>{honor}</span>
                    </div>  
                    <div>
                        <h4>&#128200; Posição na tabela de classificação geral</h4>
                        <span>{leaderboardPosition}</span>
                    </div>  
                    <div className="container-ranks-languages">
                        <h4>&#127919; Classificações em cada linguagem</h4>
                        <div className="wrapper-ranks-languages">
                            {languagesArray && languagesArray.map(([language, data]) => (
                                <div key={language} className="language-data">
                                    <div>
                                        <span className={`rounded-full ${data.color}`}></span>
                                        <span>{language.charAt(0).toUpperCase() + language.slice(1)}</span>
                                    </div>
                                    <span>Rank: {data.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CodewarsDashboard