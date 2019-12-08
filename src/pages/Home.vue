<template>
  <div class="home">
    <div class="container home__wrapper">
      <h1 class="visually-hidden">Swanky Tunes</h1>
      <navMenuHome></navMenuHome>
      <mainLogo class="main-logo"></mainLogo>
      <footerMenuHome></footerMenuHome>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import navMenuHome from '@/components/navMenuHome.vue';
import mainLogo from '@/components/mainLogo.vue';
import footerMenuHome from '@/components/footerMenuHome.vue';

@Component({
  components: { navMenuHome, mainLogo, footerMenuHome },
})
export default class Home extends Vue {
}
</script>

<style scoped lang="less">
  .home {
    background-color: #000000;
    .fullscreen();
  }
  .home__wrapper {
    .flex-layout();
    .fix-height();
  }
  .container {
    @media (min-width: 768px) {
      width: 760px;
      height: 100vh;
      margin: 0 auto;
    }
  }
</style>
