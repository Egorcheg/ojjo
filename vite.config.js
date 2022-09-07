import {fileURLToPath, URL} from 'node:url';

import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
            port: env.VITE_SITE_PORT,
            host: env.VITE_SITE_HOST,
        },
        plugins: [vue()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: '@import "@/assets/less/variables.less";@import "@/assets/less/mixins.less";',
                },
            },
        },
    };
});
