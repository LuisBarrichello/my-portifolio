import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

const buttonShellVariants = cva(
    'p-[2px] rounded-lg relative inline-flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 group',
    {
        variants: {
            variant: {
                'purple-blue':
                    'bg-gradient-to-bl from-brand-purple to-brand-blue',
                'red-purple':
                    'bg-gradient-to-bl from-brand-red to-brand-purple-dark',
                outline: 'bg-gray-300 dark:bg-gray-700',
            },
        },
    },
);

const buttonCoreVariants = cva(
    'w-full h-full px-4 py-2 flex items-center justify-center gap-3 font-semibold rounded-md',
    {
        variants: {
            variant: {
                'purple-blue':
                    'bg-white text-gray-900 dark:bg-dark-10 dark:text-white',
                'red-purple':
                    'bg-white text-gray-900 dark:bg-dark-10 dark:text-white',
                outline:
                    'bg-white text-gray-800 dark:bg-dark-10 dark:text-white',
            },
        },
    },
);

function Button({
    className,
    variant,
    content,
    altImage,
    IconComponent,
    pathLink,
    ...props
}) {
    const Comp = pathLink ? Link : 'button';

    return (
        <Comp
            to={pathLink}
            className={clsx(buttonShellVariants({ variant }), className)}
            {...props}>
            <div
                className={clsx(
                    buttonCoreVariants({ variant }),
                    'dark:text-white text-gray-900',
                )}>
                {IconComponent && (
                    <IconComponent aria-label={altImage} className="w-5 h-5" />
                )}
                <span>{content}</span>
            </div>
        </Comp>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    IconComponent: PropTypes.elementType,
    altImage: PropTypes.string,
    pathLink: PropTypes.string,
    variant: PropTypes.oneOf(['purple-blue', 'red-purple', 'outline']),
};

export default Button;
