
export default defineNuxtConfig({
    target: 'static',
    typescript: {
        strict: true
    },
    buildModules: [ '@nuxtjs/tailwindcss'],

    tailwindcss: {
        config: {
            // @ts-ignore
            plugins: ['@tailwindcss/typography', '@tailwindcss/aspect-ratio', '@tailwindcss/forms']
        },
    },
})
