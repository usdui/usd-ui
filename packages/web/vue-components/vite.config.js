import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'happy-dom', // or 'jsdom', 'node'
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment',
        jsxInject: `import { h } from 'vue'`
    }
})