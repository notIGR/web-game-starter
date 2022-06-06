import { resolve } from "path";
import { defineConfig } from "vite";

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				main: resolve(_dirname, "index.html"),
				game: resolve(_dirname, "game/index.html"),
			},
		},
	},
});
