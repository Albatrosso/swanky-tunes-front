<template>
  <div class="dates">
    <navMenu/>
    <div class="dates__main">
      <datesMain/>
    </div>
      <footerMenu/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
import datesMain from '@/components/datesMain.vue';
@Component({
  components: { navMenu, footerMenu, datesMain },
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
    height: 700px;/* TEMPORARY */
  }
</style>
