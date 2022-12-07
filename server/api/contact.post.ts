import emailjs from "emailjs-com";

const config = useRuntimeConfig()
export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    console.log(body);
    console.log(config.public.emailjs_api_service_id)
   emailjs.send(config.public.emailjs_api_service_id, config.public.emailjs_api_template_id, body.values, config.public.emailjs_ap_public_key)
       .then((result) => {
           console.log('SUCCESS!', result.text);
       }, (error) => {
           console.log('FAILED...', error);
       });

})