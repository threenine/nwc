import {Form, Field, ErrorMessage} from "vee-validate";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("Form", Form);
    nuxtApp.vueApp.component("Field", Field);
    nuxtApp.vueApp.component("ErrorMessage", ErrorMessage);
});
