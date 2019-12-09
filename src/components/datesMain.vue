<template>
  <div>
    <a class="dates__link bit-widget-initializer"
       data-artist-name="swanky tunes"
       data-display-local-dates="true"
       data-display-past-dates="true"
       data-auto-style="false"
       data-text-color="#000000"
       data-link-color="#000000"
       data-background-color="rgba(0,0,0,0)"
       data-display-limit="7"
       data-link-text-color="#ffffff"
       data-display-lineup="false"
       data-display-play-my-city="false"
       data-display-logo="false"
       data-separator-color="rgba(255, 255, 255, 0.5)"
       data-language="en"
       data-display-start-time="true"/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
  @Component
export default class DatesMain extends Vue {
  }
</script>

<style scoped>
</style>
