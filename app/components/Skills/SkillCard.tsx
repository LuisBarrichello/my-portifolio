interface SkillCardProps {
    name: string;
    icon: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => (
    <div className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-100 dark:bg-dark-20 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        <img
            src={`https://skillicons.dev/icons?i=${icon}`}
            alt={`Ícone da tecnologia ${name}`}
            className="w-12 h-12"
        />
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {name}
        </span>
    </div>
);

export default SkillCard;