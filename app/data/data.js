import IconGithub from '../assets/img/github.svg?react';
import IconInstagram from '../assets/img/instagram.svg?react';
import IconLinkedIn from '../assets/img/linkedin.svg?react';

export const aboutMeText = [
    {
        id: 1,
        parts: [
            'Olá! Sou Luís, um desenvolvedor Full Stack especializado em ',
            {
                text: 'transformar suas ideias em produtos digitais de alta performance',
                bold: true,
            },
            '. Com expertise em Java, Spring Boot, Banco de dados relacionais e não relacionais, e Javascript, React, Tailwind. Eu construo a solução completa para o seu negócio: desde ',
            {
                text: 'APIs seguras e escaláveis até interfaces de usuário modernas e intuitivas.',
                bold: true,
            },
        ],
    },
    {
        id: 2,
        parts: [
            'Cursando Bacharelado em ',
            { text: 'Engenharia de Computação', bold: true },
            ' na Univesp',
        ],
    },
    {
        id: 3,
        parts: [
            'Meu foco é entregar um produto que não apenas funcione, mas que seja ',
            { text: 'confiável, eficiente e fácil de usar', bold: true },
            ', garantindo que a tecnologia impulsione o seu crescimento.',
        ],
    },
    {
        id: 4,
        parts: [
            {
                text: 'Vamos conversar sobre como posso te ajudar a tirar o seu projeto do papel?',
                bold: true,
            },
        ],
    },
];

export const socialLinks = [
    {
        href: 'https://www.instagram.com/dev.barrichello/',
        label: 'Instagram',
        icon: IconInstagram,
    },
    {
        href: 'https://github.com/LuisBarrichello',
        label: 'Github',
        icon: IconGithub,
    },
    {
        href: 'https://www.linkedin.com/in/luisgabrielbarrichello',
        label: 'LinkedIn',
        icon: IconLinkedIn,
    },
];
