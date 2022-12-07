
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    modules: [ '@nuxtjs/tailwindcss'],

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
    runtimeConfig:{
        public: {
            emailjs_api_service_id: process.env.emailjs_api_service_id,
            emailjs_api_template_id: process.env.emailjs_api_template_id,
            emailjs_ap_public_key: process.env.emailjs_ap_public_key
        },

    },


})
