import {
    defineConfig
} from "astro/config";

// htpps://astro.build/config
export default defineConfig({
    markdown: {
        syntaxHighlight: "shiki",
        drafts:true
    }
});