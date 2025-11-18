// next.config.mjs - Versão ESTÁVEL para SVGs
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Adicionamos a configuração do Webpack
    webpack(config, { isServer }) {
        // 1. Encontra e exclui o loader de SVG padrão do Next.js
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        );

        if (fileLoaderRule) {
            fileLoaderRule.exclude = /\.svg$/i;
        }

        // 2. Adiciona o loader do SVGR para que ele funcione como componente React
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: isServer ? { not: /\.(css|scss|sass)$/ } : undefined, // Regra do Next
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        // As opções que o Turbopack não aceitava, mas o Webpack aceita
                        icon: true,
                        // Remove atributos de tamanho embutidos para que o Tailwind controle o tamanho
                        dimensions: false,
                    },
                },
            ],
        });

        return config;
    },
    // Remova o bloco turbopack obsoleto ou comente.
    // O bloco turbopack: {...} não é mais necessário aqui.
};
export default nextConfig;
