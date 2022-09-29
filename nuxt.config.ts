
export default defineNuxtConfig({

    typescript: {
        strict: true
    },
    buildModules: [ '@nuxtjs/tailwindcss'],

    tailwindcss: {
        config: {
            darkMode: "media" ,
            // @ts-ignore
            plugins: [ require('@tailwindcss/typography'), '@tailwindcss/aspect-ratio', '@tailwindcss/forms'],
            content: [
                `components/**/*.{vue,js}`,
                `layouts/**/*.vue`,
                `pages/**/*.vue`,
                `composables/**/*.{js,ts}`,
                `plugins/**/*.{js,ts}`,
                `App.{js,ts,vue}`,
                `app.{js,ts,vue}`
            ]
        },

    },
})
