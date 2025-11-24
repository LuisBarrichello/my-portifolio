import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private',
        },
        sitemap: 'https://luisbarrichello.vercel.app/sitemap.xml',
    };
}