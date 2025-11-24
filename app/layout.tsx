import './global.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ThemeSwitcher from './components/common/ThemeSwitcher/ThemeSwitcher';
import BackToTopButton from './components/common/Buttons/BackToTopButton';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Luís Gabriel Barrichello - Engenheiro de Software',
    description:
        'Portfólio de Luís Gabriel Barrichello, desenvolvedor full-stack. Confira meus projetos e habilidades em desenvolvimento web.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" className={`${inter.variable} ${poppins.variable}`}>
            <body className="bg-white dark:bg-dark-10 text-gray-800 dark:text-white antialiased selection:bg-brand selection:text-white">
                <Header />

                <main className="relative">{children}</main>

                <Footer />

                <div className="fixed bottom-5 right-5 flex flex-col items-center gap-y-4 z-50">
                    <ThemeSwitcher />
                    <BackToTopButton />
                </div>
            </body>
        </html>
    );
}
