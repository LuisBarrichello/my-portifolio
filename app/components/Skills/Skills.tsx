'use client';
import SkillCard from './SkillCard';

const techSkills = {
    'Back-end & DevOps': [
        { name: 'Java', icon: 'java' },
        { name: 'Spring Boot', icon: 'spring' },
        { name: 'JUnit', icon: 'java' },
        { name: 'Python', icon: 'py' },
        { name: 'PostgreSQL', icon: 'postgres' },
        { name: 'MySQL', icon: 'mysql' },
    ],
    'Front-end': [
        { name: 'React', icon: 'react' },
        { name: 'TypeScript', icon: 'ts' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS3', icon: 'css' },
    ],
    Ferramentas: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Linux', icon: 'linux' },
        { name: 'Postman', icon: 'postman' },
        { name: 'IntelliJ', icon: 'idea' },
    ],
};

const softSkills = [
    'Clean Code',
    'SOLID Principles',
    'Code Review',

    'Scrum & Agile',

    'SEO Técnico',
    'Mobile-First',
    'Resolução de Problemas',
];

function Skills() {
    return (
        <section
            id="skills"
            className="p-mobile md:p-tablet lg:p-desktop bg-white dark:bg-dark-10">
            <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
                <h2 className="title-section mb-10">Conhecimentos</h2>

                <div className="w-full">
                    {Object.entries(techSkills).map(([category, skills]) => (
                        <div key={category} className="animate-fade-in mt-1">
                            <h3 className="font-poppins font-semibold text-xl text-center md:text-left text-brand-blue-800 dark:text-brand mb- flex items-center justify-center md:justify-start gap-2">
                                <span className="h-1 w-8 bg-brand rounded-full inline-block md:hidden"></span>
                                {category}
                                <span className="h-1 w-8 bg-brand rounded-full inline-block md:hidden"></span>
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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

                <div className="w-full bg-gray-100 dark:bg-dark-20 rounded-2xl p-8 md:p-12 text-center mt-6">
                    <h3 className="font-poppins font-semibold text-xl text-gray-900 dark:text-white mb-6">
                        Metodologias e Competências
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {softSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 rounded-full text-sm font-medium 
                                         bg-white dark:bg-dark-05 text-gray-700 dark:text-gray-300 
                                         border border-gray-200 dark:border-gray-700 shadow-sm
                                         hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand 
                                         transition-all duration-300 cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
