<template>
  <VField :name="name" v-slot="{ field, meta, errors}">
    <textarea v-bind="field"
              rows="4"
              :class="{'text-green-600 dark:text-green-500' : meta.valid && meta.touched ,
                        'text-red-600 dark:text-red-500' : !meta.valid && meta.touched
               }"
              :placeholder="placeholder"

    />
    <VErrorMessage :name="name" as="div" class="text-red-600 dark:text-red-500"/>
  </VField>
</template>

<script>

</script>

