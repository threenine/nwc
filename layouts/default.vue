<template>
  <html class="h-full">
  <div>
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
