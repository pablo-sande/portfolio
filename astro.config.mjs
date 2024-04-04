import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), icon()],
	output: "hybrid",
	server: {
		port: 3000,
		host: true,
	},
	adapter: vercelServerless(),
});
