import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv'
import react from "@astrojs/react";

dotenv.config();
console.log('process.env', process.env)
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid',
  server: { port: 3000, host: true},
  adapter: node({
    mode: 'standalone'
  })
});
