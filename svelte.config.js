import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Export a Vite configuration object
export default defineConfig({
  plugins: [svelte()],
});
