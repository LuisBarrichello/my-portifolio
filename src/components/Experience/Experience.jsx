import { useState } from 'react';
import { clsx } from 'clsx';
import experiencesData from '../../data/experiences.json';

function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeExperience = experiencesData[activeIndex];

    return (
        <section
            id="experience"
            className="p-mobile md:p-tablet lg:p-desktop md:px-24 bg-white dark:bg-dark-10"
            aria-labelledby="experience-heading">
            <div className="w-full max-w-7xl mx-auto min-h-[60vh] flex flex-col items-center">
                <h2 id="experience-heading" className="title-section mb-12!">
                    Experiência Profissional
                </h2>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                    <div className="flex flex-row flex-wrap justify-center md:flex-col md:flex-nowrap md:justify-start border-b-2 md:border-b-0 md:border-l-2 border-gray-200 dark:border-gray-700">
                        {experiencesData.map((exp, index) => (
                            <button
                                key={exp.role + exp.company}
                                onClick={() => setActiveIndex(index)}
                                className={clsx(
                                    'w-full p-8 text-center md:text-left text-sm md:text-base transition-colors duration-300',
                                    'md:whitespace-nowrap md:min-w-[200px]',
                                    {
                                        'bg-brand/10 text-brand border-brand border-b-4 md:border-b-0 md:border-l-4 -mb-0.5 md:-ml-1':
                                            activeIndex === index,
                                        'text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-20':
                                            activeIndex !== index,
                                    },
                                )}>
                                {exp.role}
                            </button>
                        ))}
                    </div>
                    <div className="flex-grow animate-fade-in flex flex-col gap-1">
                        <h3 className="font-poppins font-bold text-xl md:text-2xl text-gray-900 dark:text-white">
                            {activeExperience.role}{' '}
                        </h3>
                        <span className="text-brand font-poppins font-bold text-lg md:text-xl">
                            {activeExperience.company}
                        </span>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {activeExperience.period} |{' '}
                            {activeExperience.location}
                        </p>

                        <ul className="mt-6 space-y-4 list-disc list-inside text-gray-600 dark:text-gray-300">
                            {activeExperience.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>

                        {activeExperience.technologies?.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {activeExperience.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold px-2.5 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
