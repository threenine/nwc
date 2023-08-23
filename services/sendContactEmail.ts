import emailjs from '@emailjs/browser';

export async function sendContactEmail(values : any)  : Promise<Boolean> {
    const config = useRuntimeConfig();
   await emailjs.send(config.public.emailjs_api_service_id, config.public.emailjs_api_template_id, values, config.public.emailjs_ap_public_key);
   return true;
}


