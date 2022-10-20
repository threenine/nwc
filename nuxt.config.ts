
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    buildModules: [ '@nuxtjs/tailwindcss'],

    tailwindcss: {
        config: {
            darkMode: "media" ,
            plugins: [ require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')],
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
