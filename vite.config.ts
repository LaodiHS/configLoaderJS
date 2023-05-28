import { defineConfig } from "vite";
import path from "path";
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import rollupTs from 'rollup-plugin-typescript2';
const packageJson = require("./package.json");

const getPackageName = () => {
    return packageJson.name;
  };
  
  export default defineConfig({
    plugins: [
      ViteMinifyPlugin(),
    ],
    resolve: {
      alias: {
        '@/': path.resolve(__dirname, 'src') + '/',
      },
      extensions: [
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
      ],
    },
    optimizeDeps: {
      include: ["esm-dep", "cjs-dep", "linked-dep"],
    },
    build: {
      target: "esnext",
      minify: false,
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: getPackageName(),
        formats: ['es', 'umd'],
        fileName: (format) => `${getPackageName()}.${format}.js`,
      },
      rollupOptions: {
        external: [
          '@ionic/core/dist/types/components',
          'react',
          'vue',
          '@angular/core',
        ],
        output: {
          inlineDynamicImports: true,
          globals: {
            react: 'React',
            vue: 'Vue',
            '@angular/core': 'ng.core',
          },
        },
      },
    },
  });