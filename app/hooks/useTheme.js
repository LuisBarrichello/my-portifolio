import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;
        return savedTheme || (userPrefersDark ? 'dark' : 'light');
    });

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    };

    return [theme, toggleTheme];
};
