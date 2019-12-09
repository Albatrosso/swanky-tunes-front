<template>
  <div class="music">
    <navMenu/>
    <div class="music__wrapper">

      <div v-for="song in songCard"
           :key="song.id">
        <music-track :song="song"/>
      </div>
    </div>
      <footerMenu/>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';
import musicTrack from '@/components/musicTrack.vue';

@Component({
  components: { navMenu, footerMenu, musicTrack },
})
export default class Music extends Vue {
  songCard = [];

  mounted() {
    axios.get('http://localhost:3000/music')
      .then((response) => {
        this.songCard = response.data;
        console.log(response);
      });
  }
}
</script>
<style scoped lang="less">
  .music {
    .fullscreen();
    .flex-layout();
    .main-background();
    .fix-height();
    flex-direction: column;
    min-height: 100%;
  }
  @media (min-width: 768px) {
    .music__wrapper {
      .flex-container();
      height: 76%; /*TEMPORARY*/
      box-sizing: border-box;
      padding: 0 10px;
      overflow: scroll;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
