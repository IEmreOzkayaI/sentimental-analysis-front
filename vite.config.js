import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			include: "**/*.jsx",
		}),
	],
	server: {
		usePolling: true,
		port: 3000,
		open: "/",
	},
	resolve: {
		alias: {
			// @/* için src/* yolunu belirtin
			"@": path.resolve(__dirname, "src"),
		},
	},
});
