<template>
  <VForm class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
         :validation-schema="schema"
         :initial-values="initialValues"
         v-slot="{ meta: formMeta, errors: formErrors }"
         @submit="sendEmail"
  >
    <div>
    <VTextInput
        type="text"
        name="firstName"
        label="First Name"
        placeholder="Firstname"

    />
    </div>
<!--    <div>
      <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
      <div class="mt-1">
        <input type="text" name="firstName" id="firstName" autocomplete="given-name"
               class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"/>
      </div>
    </div>-->
    <div>
      <VTextInput
          type="text"
          name="lastName"
          label="Last Name"
          placeholder="Lastname"
      />
<!--      <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
      <div class="mt-1">
        <input type="text"  name="lastName" id="last-name" autocomplete="family-name"
               class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"/>
      </div>-->
    </div>
    <div class="sm:col-span-2">
      <VTextInput
          type="email"
          name="email"
          label="Email"
          placeholder="Email"
      />
<!--      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <div class="mt-1">
        <input id="email"  name="email" type="email" autocomplete="email"
               class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"/>
      </div>-->
    </div>


    <div class="sm:col-span-2">
      <div class="flex justify-between">
        <label for="how-can-we-help" class="block text-sm font-medium text-gray-700">How can I help
          you?</label>
        <span id="how-can-we-help-description" class="text-sm text-gray-500">Max. 500 characters</span>
      </div>
      <div class="mt-1">
        <VTextArea
            type="text"
            name="message"
            label="How Can I help"
            placeholder="How can I help"
        />
<!--                  <textarea id="how-can-we-help"  name="message"
                            aria-describedby="how-can-we-help-description" rows="4"
                            class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"/>-->
      </div>
    </div>
    <div class="text-right sm:col-span-2">
      <button type="submit" onclick="send"
              class="inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-gray-100 shadow-sm hover:bg-grape-700 focus:outline-none focus:ring-2 focus:ring-grape-500 focus:ring-offset-2">
        Submit
      </button>
    </div>
  </VForm>
</template>

<script lang="ts" setup>
import emailjs from "emailjs-com";
import {reactive, useRuntimeConfig} from "#imports";

const config = useRuntimeConfig()


async function sendEmail(){
  await emailjs.sendForm(config.emailjs_api_service_id, config.emailjs_api_template_id, Ref(''), config.emailjs_ap_public_key);

}
</script>

