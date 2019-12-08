<template>
    <div class="nav-menu">
      <div class="main-navigation__wrapper">
        <nav class="main-navigation">
          <span class="main-navigation__logo">Swanky Tunes</span>
          <button class="main-navigation__toggle" @click="showSideBar">
            <sidemenu width="25" height="25" :fill="fillColor"/>
          </button>
          <sidebarMenu v-if="sideBar"/>
          <ul class="main-navigation__list">
            <li class="main-navigation__item">
              <router-link class="main-navigation__link" to="/music">Music</router-link>
            </li>
            <li class="main-navigation__item">
              <a class="main-navigation__link" href="https://www.youtube.com/playlist?list=PL9W0uKtpnSDAb9NvRcxbosp5DzKWT2wGo" target="_blank" rel="noopener">Videos</a>
            </li>
            <li class="main-navigation__item">
              <router-link class="main-navigation__link" to="/dates">Tour dates</router-link>
            </li>
            <li class="main-navigation__item main-navigation__item--dropdown">
              <a class="main-navigation__link--dropdown" href="#">Radio show</a>
              <ul class="sub-navigation__list">
                <li class="sub-navigation__item">
                  <a class="sub-navigation__link" href="https://podcasts.apple.com/ru/podcast/swanky-tunes-showland-podcast/id923114101" target="_blank" rel="noopener">
                    <span class="visually-hidden">Apple podcasts</span>
                    <applpdcst class="main-navigation__icon" width="40" height="40"/>
                  </a>
                </li>
                <li class="sub-navigation__item">
                  <a class="sub-navigation__link" href="https://www.mixcloud.com/swankytunes/" target="_blank" rel="noopener">
                    <span class="visually-hidden">Mixcloud</span>
                    <mixcloud class="main-navigation__icon" width="40" height="40"/>
                  </a>
                </li>
              </ul>
            </li>
            <li class="main-navigation__item">
              <router-link class="main-navigation__link" to="/demo-drop">Demo drop</router-link>
            </li>
            <li class="main-navigation__item">
              <router-link class="main-navigation__link" to="/contacts">Contacts</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import sidebarMenu from '@/components/sidebarMenu.vue';
import sidemenu from '@/assets/img/svg/menu.svg';
import mixcloud from '@/assets/img/svg/mixcloud.svg';
import applpdcst from '@/assets/img/svg/apple_podcast.svg';

@Component({
  components: {
    sidebarMenu, sidemenu, mixcloud, applpdcst,
  },
})
export default class NavMenu extends Vue {
  sideBar = false;

  fillColor = '#000';

  showSideBar() {
    this.sideBar = !this.sideBar;
    if (this.fillColor === '#000') {
      this.fillColor = '#fff';
    } else {
      this.fillColor = '#000';
    }
  }
}
</script>

<style scoped lang="less">
  .nav-menu {
    height: 0;
  }
  .main-navigation__wrapper {
    position: relative;
    .flex-container();
  }
  .main-navigation {
    width: 100%;
    padding: 25px 0;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    position: absolute;
    left: 0;
    background-size: cover;
  }
  .main-navigation__list {
    display: none;
  }
  .main-navigation__toggle {
    width: 10%;
    height: 25px;
    padding: 0;
    border: none;
    position: relative;
    z-index: 2;
    outline: none;
    background-color: transparent;
  }
  @media (min-width: 768px) {
    .nav-menu {
      height: auto;
    }
    .main-navigation {
      padding: 40px 0 30px;
    }
    .main-navigation__logo {
      white-space: nowrap;
      padding-right: 10px;
    }
    .main-navigation__toggle {
      display: none;
    }
    .main-navigation__list {
      .reset-list();
      width: 650px;
      display: flex;
      justify-content: space-around;
    }
    .main-navigation__link {
      position: relative;
      .reset-link();
      color: #000000;
      font-weight: 200;
    }
    .main-navigation__link:hover,
    .main-navigation__link:focus {
      outline: none;
    }
    .main-navigation__link::after {
      content: "";
      width: 0;
      height: 2px;
      background-color: #000000;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: width .3s ease-in-out;
    }
    .main-navigation__link:hover::after,
    .main-navigation__link:focus::after {
      width: 100%;
    }
    .main-navigation__item--dropdown {
      position: relative;
    }
    .main-navigation__link--dropdown {
      .reset-link();
      color: #000000;
      font-weight: 200;
    }
    .sub-navigation__list {
      .reset-list();
      box-sizing: border-box;
      border: 1px solid #000000;
      padding: 15px;
      width: 90px;
      height: 125px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }
    .main-navigation__item--dropdown:hover .sub-navigation__list {
      .flex-layout();
      align-items: center;
    }
    .sub-navigation__link {
      display: block;
      width: 40px;
      height: 40px;
    }
    .sub-navigation__link:hover,
    .sub-navigation__link:focus {
      outline: none;
      transform: scale(1.2);
      transition: 1s;
    }
  }
</style>
