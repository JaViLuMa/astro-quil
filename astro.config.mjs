import solidJs from '@astrojs/solid-js';
import critters from 'astro-critters';
import fonts from 'astro-fonts-next';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    solidJs(),
    fonts({
      url: 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap',
    }),
    critters(),
  ],
});
