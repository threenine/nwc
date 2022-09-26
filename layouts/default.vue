<template>
  <div>
    <twc-header />
    <slot />
  </div>

</template>

<script>
import TwcHeader from "../components/TwcHeader";
export default {
  name: "default",
  components: {TwcHeader}
}
</script>

<style scoped>

</style>
