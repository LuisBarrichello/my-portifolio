'use client';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={clsx(
                'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300',
                'bg-brand hover:bg-brand-blue-400 text-white',
                'dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white',
                {
                    'opacity-100 translate-y-0': isVisible,
                    'opacity-0 translate-y-4 pointer-events-none': !isVisible,
                },
            )}
            aria-label="Voltar ao topo">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                />
            </svg>
        </button>
    );
};

export default BackToTopButton;