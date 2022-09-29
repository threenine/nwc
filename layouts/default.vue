<template>
  <html class="h-full">
  <div class="min-h-full">
    <twc-header/>
    <slot/>
    <twc-footer/>
  </div>
  </html>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style scoped>

</style>
