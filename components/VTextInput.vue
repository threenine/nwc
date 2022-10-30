<template>
    <div class="mt-1">
      <VField :name="name" v-slot="{ field, meta, errors }">
        <input v-bind="field"
               class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
               :class="{'text-green-600 dark:text-green-500' : meta.valid && meta.touched ,
                        'text-red-600 dark:text-red-500' : !meta.valid && meta.touched
               }"
               :placeholder="placeholder"
               :type="type"
        />
        <VErrorMessage :name="name" as="div" class="text-red-600 dark:text-red-500"/>
        <div class="debug" v-if="debug">
          <pre>{{ errors }}</pre>
          <pre>{{ meta }}</pre>
        </div>
      </VField>
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
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: "",
  },
  leftIcon: {
    type: String,
    default: "",
  },
  debug: {
    type: Boolean,
    default: false,
  },
});
</script>


