import { defineConfig } from 'astro/config';

export default defineConfig({
    site: 'https://qail.rs',
    output: 'static',
    build: {
        assets: '_assets'
    }
});
