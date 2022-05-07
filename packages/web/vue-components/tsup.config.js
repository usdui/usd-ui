import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    clean: true,
    emitDeclarationOnly: true,
    declaration: true,
    rollup: {
        emitCJS: true,
        declaration: true,
    },
    target: 'es2018',
    format: ['esm'],
    minify: true,
    esbuildOptions: (options) => {
        options.jsxFactory = 'h'
        options.jsxFragment = 'Fragment'
        options.inject = ['./vue-shims.js']
    }
})