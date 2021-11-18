<template>
  <div>
    <component :is="name"></component>
  </div>
</template>
<script>

import red from './colors/red.vue'
import blue from './colors/blue.vue'
import green from './colors/green.vue'
import black from './colors/black.vue'
import white from './colors/white.vue'
import yellow from './colors/yellow.vue'
import purple from './colors/purple.vue'

/* eslint-disable vue/no-unused-components */
export default {
  name: 'BaseColor',
  props: {
    name: String
  },
  computed: {

  },
  components: {
    red,
    blue,
    green,
    black,
    white,
    yellow,
    purple,
  }
}
</script>