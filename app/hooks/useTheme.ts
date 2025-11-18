'use client'
import { useState, useEffect } from 'react';

export const useTheme = () => {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const savedTheme = localStorage.getItem('theme');
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialTheme = savedTheme || (userPrefersDark ? 'dark' : 'light');
        setTheme(initialTheme);
    }, [])

    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
    };

    return [theme, toggleTheme] as const;
};
