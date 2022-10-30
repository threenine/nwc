<template>
  <VField :name="name" v-slot="{ field, meta, errors }">
    <textarea v-bind="field"
           rows="4"
           class="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
           :class="{'text-green-600 dark:text-green-500' : meta.valid && meta.touched ,
                        'text-red-600 dark:text-red-500' : !meta.valid && meta.touched
               }"
           :placeholder="placeholder"

    />
    <VErrorMessage :name="name" as="div" class="text-red-600 dark:text-red-500"/>
    <div class="debug" v-if="debug">
      <pre>{{ errors }}</pre>
      <pre>{{ meta }}</pre>
    </div>
  </VField>
</template>

<script>

</script>

