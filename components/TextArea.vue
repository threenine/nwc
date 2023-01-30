<template>

  <Field :name="name" v-slot="{ field, meta, errors}" as="textarea">
    <textarea v-bind="field"
              :rows=rows
              class="focus:border-yellow-500 focus:ring-yellow-500"
              :class="{'border-green-600 dark:border-green-500' : meta.valid && meta.touched ,
                        'border-red-600 dark:border-red-500' : !meta.valid && meta.touched
               }"
              :placeholder="placeholder"

    />
    <ErrorMessage :name="name" as="div" class="text-red-600 dark:text-red-500"/>
  </Field>

</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  rows: {
    type: Number,
    default: 10
  }
});
</script>

