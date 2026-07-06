import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

export default defineConfig({
    output: 'static', // Requis pour Astro 7, qui se comporte comme hybrid
    adapter: node({ mode: 'standalone' }),
    integrations: [react(), markdoc(), keystatic()],
});