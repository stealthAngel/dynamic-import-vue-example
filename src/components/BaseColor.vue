<template>
  <div>
    <component v-bind:is="dynamicColor"></component>
  </div>
</template>

<script>

import colors from './colors'
console.log("🚀 the loaded Colors", colors);

export default {
  name: 'BaseColor',
  props: {
    name: String
  },
  computed: {
    dynamicColor() {
      let loadedColor = colors[this.name].default; //colors['blue'].default
      
      if(loadedColor !== undefined){
        return loadedColor;
      }
      return null;
    }
  },
}
</script>