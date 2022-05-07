import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['esm'],
    // minify: true,
    esbuildOptions: (options) => {
        options.jsxFactory = 'h'
        options.jsxFragment = 'Fragment'
        options.inject = ['./vue-shims.js']
    }
})