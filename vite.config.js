import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
             input: ['resources/css/app.css', 'resources/js/script.js'],
            refresh: true,
        }),
    ],
});
