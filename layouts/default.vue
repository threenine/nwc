<template>
  <html class="h-full bg-gray-50">
  <div class="min-h-full">
    <twc-header/>
    <slot/>
    <twc-footer />
  </div>
  </html>
</template>

<script>

export default {
  name: "default",

}
</script>

<style scoped>

</style>
