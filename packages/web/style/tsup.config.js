import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    splitting: true,
    sourcemap: true,
    clean: true,
    target: 'es2020',
    format: ['esm'],
    minify: true,
    dts: true
})