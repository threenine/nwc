<template>
  <VForm ref="contact" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
         :validation-schema="schema"
         :initial-values="initialValues"
         v-slot="{ meta: formMeta, errors: formErrors }"
         @submit="sendEmail"
  >
    <div>
    <VTextInput
        type="text"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
        name="firstName"
        label="First Name"
        placeholder="Firstname"

    />
    </div>
    <div>
      <VTextInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Lastname"
      />
    </div>
    <div class="sm:col-span-2">
      <VTextInput
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
      />
    </div>


    <div class="sm:col-span-2">

      <div class="mt-1">
        <VTextArea
            type="text"
            as="textarea"
            name="message"
            label="How Can I help"
            placeholder="How can I help"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        />
        <div class="flex">
          <span id="how-can-we-help-description" class="text-xs text-gray-500">Max. 500 characters</span>
        </div>
      </div>
    </div>
    <template v-if="Object.keys(formErrors).length">
      <p class="text-red-600 dark:text-red-500">
        Please correct the following errors:
      </p>
      <ul>
        <li
            v-for="(message, field) in formErrors"
            :key="field"
            class="text-red-600 dark:text-red-500"
        >
          {{ message }}
        </li>
      </ul>
    </template>
    <div class="text-right sm:col-span-2">
      <button
          class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
          :class="{ 'is-primary': formMeta.valid }"
          :disabled="!formMeta.valid"
          type="submit"
      >
        Submit
      </button>
    </div>
  </VForm>
</template>

<script setup>

import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import emailjs from "emailjs-com";


const config = useRuntimeConfig()

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  email: string()
      .required()
      .email()
      .label("Email Address"),
  firstName: string().required().label("Firstname is required"),
  lastName: string().required().label("Lastname is required"),
  message: string().required().max(500).label("Lastname is required")
});
const sendEmail = (values, actions) => {
  console.log(values);
  console.log(config.emailjs_api_service_id)
   emailjs.send(config.emailjs_api_service_id, config.emailjs_api_template_id, values, config.emailjs_ap_public_key);

 actions.resetForm();
}

const initialValues = { email: "", firstName: "", lastName: "", message: "" };
/*async function sendEmail(){
  console.log('I have been hit gaz')
  //emailjs.sendForm(config.emailjs_api_service_id, config.emailjs_api_template_id, Ref(''), config.emailjs_ap_public_key);

}*/
</script>

