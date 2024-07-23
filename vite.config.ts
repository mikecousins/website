import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [{enforce: 'pre', ...mdx({/* jsxImportSource: …, otherOptions… */})}, remix(), tsconfigPaths()],
});
