
export default defineNuxtConfig({
    target: 'static',
    typescript: {
        strict: true
    },
    buildModules: [ '@nuxtjs/tailwindcss'],

    tailwindcss: {
        config: {
            darkMode: "media" ,
            // @ts-ignore
            plugins: ['@tailwindcss/typography', '@tailwindcss/aspect-ratio', '@tailwindcss/forms']
        },
    },
})
