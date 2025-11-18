import SkillCard from './SkillCard';

const skillData = {
    'Front-end': [
        { name: 'React', icon: 'react' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'TailwindCSS', icon: 'tailwind' },
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS3', icon: 'css' },
    ],
    'Back-end': [
        { name: 'Java', icon: 'java' },
        { name: 'Spring', icon: 'spring' },
        { name: 'Python', icon: 'py' },
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgres' },
    ],
    Ferramentas: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'IntelliJ IDEA', icon: 'idea' },
        { name: 'Postman', icon: 'postman' },
    ],
};

function Skills() {
    return (
        <section id="skills" className="p-mobile md:p-tablet lg:p-desktop">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="title-section">Conhecimentos</h2>
                <div className="w-full space-y-12">
                    {Object.entries(skillData).map(([category, skills]) => (
                        <div key={category}>
                            <h3 className="font-poppins font-semibold text-xl text-center md:text-left text-gray-800 dark:text-gray-100 mb-6">
                                {category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {skills.map((skill) => (
                                    <SkillCard
                                        key={skill.name}
                                        name={skill.name}
                                        icon={skill.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;