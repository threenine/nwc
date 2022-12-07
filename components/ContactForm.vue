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
          <span id="how-can-we-help-description" class="text-xs text-gray-500">Max. 1500 characters</span>
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
          class="inline-flex justify-center rounded-md border border-transparent bg-yellow-600 hover:bg-yellow-300 hover:text-gray-500 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2"
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

import * as Yup from "yup";
import {configure} from "vee-validate";
import {sendContactEmail } from "~/services/sendContactEmail";


configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,
});

const schema = Yup.object({
   email: Yup.string().required().email().max(255).label("Email Address"),
  firstName: Yup.string().required().label("Firstname"),
  lastName: Yup.string().required().label("Lastname"),
  message: Yup.string().required().max(1500).label("a message")
});

const sendEmail = (values, actions) => {
      sendContactEmail(values).then(() => {
            actions.resetForm();
         })
}
const initialValues = {email: "", firstName: "", lastName: "", message: ""};

</script>

