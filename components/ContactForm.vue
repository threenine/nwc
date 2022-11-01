<template>
  <Form ref="contact" class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
         :validation-schema="schema"
         :initial-values="initialValues"
         v-slot="{ meta: formMeta, errors: formErrors }"
         @submit="sendEmail"
  >
    <div>
      <TextInput
          type="text"
          name="firstName"
         placeholder="Firstname"

      />
    </div>
    <div>
      <TextInput
          type="text"
          name="lastName"
          placeholder="Lastname"
      />
    </div>
    <div class="sm:col-span-2">
      <TextInput
          type="email"
          name="email"
          placeholder="Email"
      />
    </div>


    <div class="sm:col-span-2">
        <TextArea
            type="text"
            as="textarea"
            name="message"
            placeholder="How can I help"
            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
        />
        <div class="flex">
          <span id="how-can-we-help-description" class="text-xs text-gray-500">Max. 500 characters</span>
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
          :class="{ 'text-green-600 dark:text-green-500': formMeta.valid }"
          :disabled="!formMeta.valid"
          type="submit"
      >
        Submit
      </button>
    </div>
  </Form>
</template>

<script setup>

import {object, string} from "yup";
import {configure} from "vee-validate";
import emailjs from "emailjs-com";


const config = useRuntimeConfig()

configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

const schema = object({
  email: string()
      .required()
      .email()
      .label("Email Address"),
  firstName: string().required().label("Firstname"),
  lastName: string().required().label("Lastname"),
  message: string().required().max(500).label("a message")
});
const sendEmail = (values, actions) => {
  emailjs.send(config.public.emailjs_api_service_id, config.public.emailjs_api_template_id, values, config.public.emailjs_ap_public_key)
      .then(() => {
        actions.resetForm();
      });
}
const initialValues = {email: "", firstName: "", lastName: "", message: ""};

</script>

