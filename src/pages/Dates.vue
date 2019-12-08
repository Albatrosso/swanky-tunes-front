<template>
  <div class="dates">
    <navMenu/>
    <div class="dates__main">
      <a class="dates__link bit-widget-initializer"
         data-artist-name="swanky tunes"
         data-display-local-dates="true"
         data-display-past-dates="false"
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
      <footerMenu/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
@Component({
  components: { navMenu, footerMenu },
})
export default class TourDates extends Vue {
}
</script>
<style scoped lang="less">
  .dates {
    .main-background();
    .fullscreen();
    .flex-layout();
    .fix-height();
    height: auto;
    min-height: 100vh;
  }
  .dates__main {
    .flex-container();
    max-width: 90%;
  }
  .dates__link {
    border: #000000;
  }
</style>
