// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    buildModules: [
        '@nuxtjs/tailwindcss',

    ],
    typescript: {
        strict: true
    },
    tailwindcss: {
        config: {
            // @ts-ignore
            plugins: ['@tailwindcss/typography', '@tailwindcss/aspect-ratio', '@tailwindcss/forms']
        },
    }
})
