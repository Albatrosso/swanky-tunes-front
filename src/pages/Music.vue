<template>
  <div class="music">
    <navMenu></navMenu>
    <div class="music__wrapper">
      <div
        class="track"
        v-for="song in songCard"
        :key="song.id"

      >
        <div class="track-cover__wrapper">
          <img class="track__cover" :src=song.poster alt="Track cover">
        </div>
        <div class="track__info">
          <p class="track__name">{{song.name}}</p>
          <span class="track__producer">{{song.author}}</span>
          <span class="track__year">{{song.year}}</span>
        </div>
      </div>
    </div>
    <div class="footer-menu__wrapper">
      <footerMenu></footerMenu>
    </div>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import navMenu from '@/components/navMenu.vue';
import footerMenu from '@/components/footerMenu.vue';

@Component({
  components: { navMenu, footerMenu },
})
export default class Music extends Vue {
  songCard = [];

  mounted() {
    axios.get('http://localhost:3000/music')
      .then((response) => {
        this.songCard = response.data;
      });
  }
}
</script>
<style scoped lang="less">
  .music {
    .fullscreen();
    .flex-layout();
    .main-background();
  }
  @media (min-width: 768px) {
    .music__wrapper {
      .flex-container();
      display: flex;
    }
    .footer-menu__wrapper {
      .flex-container();
    }
  }

  @media (min-width: 768px) {
    .track {
      display: flex;
      flex-direction: column;
      width: 320px;
      height: 485px;
      box-sizing: border-box;
      padding: 10px;
      margin-left: 5px;
      margin-right: 5px;
    }
    .track:hover,
    .track:focus {
      width: 320px;
      background-color: #9c8994;
    }
    .track-cover__wrapper {
      width: 100%;
      .track__cover{
        width: 100%;
        height: 100%;
      }
    }
    .track__year{
      display: block;
    }
  }
</style>
