<template>
  <div class="not-found">
    <div class="not-found__text">404 Not Found</div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NotFound extends Vue {

}
</script>

<style scoped lang='less'>
.not-found {
  .fullscreen();
  .main-background();
  .fix-height();
  display: flex;
  justify-content: center;
  align-items: center;
}
.not-found__text {
  font-size: 50px;
}
</style>
