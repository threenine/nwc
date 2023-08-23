
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    modules: [ '@nuxtjs/tailwindcss', '@nuxt/content' , 'nuxt-icon', 'nuxt-headlessui'],
    build: {
        transpile: ['@tailwindcss/typography','@tailwindcss/aspect-ratio','@tailwindcss/forms']
    },
    runtimeConfig:{
        public: {
            emailjs_api_service_id: process.env.emailjs_api_service_id,
            emailjs_api_template_id: process.env.emailjs_api_template_id,
            emailjs_ap_public_key: process.env.emailjs_ap_public_key,
            fathom_analytics_id: process.env.fathom_analytics_id,
            siteUrl: 'https://natashawoodfine.com',
        },

    },
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
        configPath: 'tailwind.config',
    }

})
