import './global.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import ThemeSwitcher from './components/common/ThemeSwitcher/ThemeSwitcher';
import BackToTopButton from './components/common/Buttons/BackToTopButton';
import { Providers } from './Providers';

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

const baseUrl = 'https://luisbarrichello.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: 'Luís Gabriel Barrichello - Engenheiro de Software',
        template: '%s | Luís Gabriel Barrichello',
    },
    description:
        'Portfólio de Luís Gabriel Barrichello, desenvolvedor full-stack. Confira meus projetos e habilidades em desenvolvimento web.',
    keywords: [
        'Desenvolvedor Full Stack',
        'Engenheiro de Software',
        'Java',
        'Spring Boot',
        'React',
        'Next.js',
        'Luís Gabriel Barrichello',
        'Portfólio',
        'Desenvolvimento Web',
        'Projetos de Software',
    ],
    authors: [{ name: 'Luís Gabriel Barrichello', url: baseUrl }],
    creator: 'Luís Gabriel Barrichello',
    verification: {
        google: 'sE3yfnUZSGzLEFe2X3o4YpGhPg6y3SnfZh8L-EDXmEk',
    },
    openGraph: {
        type: 'website',
        locale: 'pt_BR',
        url: baseUrl,
        title: 'Luís Gabriel Barrichello - Engenheiro de Software',
        description:
            'Transformando ideias complexas em realidade digital com soluções robustas e escaláveis.',
        siteName: 'Luís Gabriel Barrichello Portfolio',
        images: [
            {
                url: '/assets/img/me.png',
                width: 1200,
                height: 630,
                alt: 'Luís Gabriel Barrichello',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Luís Gabriel Barrichello',
        url: baseUrl,
        jobTitle: 'Engenheiro de Software',
        image: `${baseUrl}/assets/img/me.png`,
        sameAs: [
            'https://github.com/LuisBarrichello',
            'https://www.linkedin.com/in/luisgabrielbarrichello/',
            'https://www.instagram.com/dev.barrichello/',
        ],
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Laranjal Paulista',
            addressRegion: 'SP',
            addressCountry: 'BR',
        },
    };

    return (
        <html lang="pt-br" className={`${inter.variable} ${poppins.variable}`}>
            <body className="bg-white dark:bg-dark-10 text-gray-800 dark:text-white antialiased selection:bg-brand selection:text-white">
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd),
                    }}></script>

                <Providers>
                    <Header />

                    <main className="relative">{children}</main>

                    <Footer />
                    
                    <div className="fixed bottom-5 right-5 flex flex-col items-center gap-y-4 z-50">
                        <ThemeSwitcher />
                        <BackToTopButton />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
