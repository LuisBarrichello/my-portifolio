import Link from 'next/link';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';

interface ButtonProps {
    className?: string;
    variant?: 'purple-blue' | 'red-purple' | 'ghost' | 'outline';
    content: string;
    altImage?: string;
    IconComponent?: React.ElementType;
    pathLink?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const buttonShellVariants = cva(
    'p-[2px] rounded-lg relative inline-flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 group',
    {
        variants: {
            variant: {
                'purple-blue':
                    'bg-gradient-to-bl from-brand-purple to-brand-blue',
                'red-purple':
                    'bg-gradient-to-bl from-brand-red to-brand-purple-dark',
                ghost: 'bg-gradient-to-bl dark:from-brand-blue from-brand-blue to-brand-purple-dark',
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
                ghost: 'bg-white/20 text-white dark:bg-dark-10/70 dark:text-white',
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
}: ButtonProps) {
    const buttonContent = (
        <div
            className={clsx(
                buttonCoreVariants({ variant }),
                'dark:text-white text-gray-900',
            )}>
            {IconComponent && (
                <IconComponent aria-label={altImage} className="w-5 h-5" />
            )}
            <span className="text-sm">{content}</span>
        </div>
    );

    if (pathLink) {
        return (
            <Link
                href={pathLink}
                className={clsx(buttonShellVariants({ variant }), className)}
                {...props}
            >
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            className={clsx(buttonShellVariants({ variant }), className)}
            {...props}
        >
            {buttonContent}
        </button>
    );
}

export default Button;
