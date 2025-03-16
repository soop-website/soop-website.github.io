// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { getOutDir } from "./src/utils/get-lang";

// https://astro.build/config
export default defineConfig({
    outDir: getOutDir(),
    image: { service: passthroughImageService() },
});
