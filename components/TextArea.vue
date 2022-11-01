<template>
  <Field :name="name" v-slot="{ field, meta, errors}">
    <textarea v-bind="field"
              rows="4"
              :class="{'border-green-600 dark:border-green-500' : meta.valid && meta.touched ,
                        'text-red-600 dark:text-red-500' : !meta.valid && meta.touched
               }"
              :placeholder="placeholder"

    />
    <ErrorMessage :name="name" as="div" class="text-red-600 dark:text-red-500"/>
  </Field>
</template>

<script>

</script>

