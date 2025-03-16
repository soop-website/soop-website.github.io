// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { getOutDir } from "./src/utils/get-lang";

// https://astro.build/config
export default defineConfig({
    outDir: getOutDir(),
    image: { service: passthroughImageService() },
    vite: {
        define: {
            // Pass the LANG environment variable to Astro
            "import.meta.env.LANG": JSON.stringify(process.env.LANG || "en"),
        },
    },
});
