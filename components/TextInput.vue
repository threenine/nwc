<template>
    <div class="mt-1">
      <Field :name="name" v-slot="{ field, meta, errors }">
        <input v-bind="field"
               class="block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
               :class="{'border-green-600 dark:border-green-500' : meta.valid && meta.touched ,
                        'border-red-600 dark:border-red-500' : !meta.valid && meta.touched
               }"
               :placeholder="placeholder"
               :type="type"
        />
        <ErrorMessage :name="name" as="div" class="text-red-600 dark:text-red-500"/>
      </Field>
    </div>
</template>

<script setup>
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
  }
});
</script>


