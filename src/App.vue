<template>
  <div>
    <base-color name="purple"></base-color>
    <!-- <base-color name="blue"></base-color> -->
    <!-- <base-color name="black"></base-color> -->
    <!-- <base-color name="white"></base-color> -->
    <!-- <base-color-old name="white"></base-color-old> -->

  </div>
</template>

<script>
import BaseColor from './components/BaseColor.vue'
// import BaseColorOld from './components/BaseColorOld.vue'

export default {
  name: 'App',
  components: {
    BaseColor,
    // BaseColorOld
  }
}
</script>

<style scoped>
</style>