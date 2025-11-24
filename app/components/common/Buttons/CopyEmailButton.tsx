'use client';

import { useState } from 'react';
import Button from './Button';
import IconEmail from '@/app/assets/icons/mail.svg';

export default function CopyEmailButton() {
    const [copied, setCopied] = useState(false);
    const emailAddress = 'luisgabrielbarrichello@gmail.com';

    const copyEmail = () => {
        navigator.clipboard
            .writeText(emailAddress)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Erro ao copiar o e-mail: ', error);
            });
    };

    return (
        <>
            <Button
                aria-pressed={copied}
                variant={'purple-blue'}
                content={copied ? 'Copiado!' : 'Copiar E-mail'}
                IconComponent={IconEmail}
                altImage={'Icone indicando meu email para contato'}
                onClick={copyEmail}
            />
            <span aria-live="polite" className="sr-only">
                {copied && 'E-mail copiado!'}
            </span>
        </>
    );
}
