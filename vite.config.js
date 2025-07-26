import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), svgr()],
    server: {
        proxy: {
            '/leetcode-api': {
                target: 'https://leetcode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/leetcode-api/, ''),
            },
        },
    },
});