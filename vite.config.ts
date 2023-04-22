import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
        },
    },
});