import PropTypes from 'prop-types';
import Button from '../common/Buttons/Button';
import { clsx } from "clsx";

function FilterProjects({ categories, selected, onSelect }) {
    return (
        <nav
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            aria-label="Filtrar projetos por categoria">
            {categories.map((category) => (
                <Button
                    key={category}
                    className={clsx(
                        'px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300',
                        {
                            'bg-brand text-white shadow-md':
                                selected === category,
                            'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700':
                                selected !== category,
                        },
                    )}
                    onClick={() => onSelect(category)}
                    content={category}
                    aria-pressed={selected === category}
                    />
            ))}
        </nav>
    );
}

FilterProjects.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default FilterProjects;
