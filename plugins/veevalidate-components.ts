import {Form, Field, ErrorMessage} from "vee-validate";
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("VForm", Form);
    nuxtApp.vueApp.component("VField", Field);
    nuxtApp.vueApp.component("VErrorMessage", ErrorMessage);
});
