import Link, { LinkProps } from 'next/link';
import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ElementType, AnchorHTMLAttributes } from 'react';

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

interface BaseProps extends VariantProps<typeof buttonShellVariants> {
    content: string;
    altImage?: string;
    IconComponent?: ElementType;
    className?: string;
}

type LinkButtonProps = BaseProps &
    Omit<LinkProps, 'href'> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        pathLink: string;
    };

type RegularButtonProps = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        pathLink?: never;
    };

type ButtonProps = LinkButtonProps | RegularButtonProps;

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
                {...(props as Omit<LinkProps, 'href'>)}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            className={clsx(buttonShellVariants({ variant }), className)}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {buttonContent}
        </button>
    );
}

export default Button;
