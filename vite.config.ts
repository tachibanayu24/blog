import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeStarryNight from "rehype-starry-night";

const mdxOptions = {
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex, rehypeStarryNight],
  providerImportSource: "@mdx-js/react",
};

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    { enforce: "pre", ...mdx(mdxOptions) },
  ],
});
