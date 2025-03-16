// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { getOutDir, getPathForLang } from "./src/utils/get-lang";

// https://astro.build/config
export default defineConfig({
    outDir: getOutDir(),
    base: getPathForLang("/"),
    image: { service: passthroughImageService() },
});
