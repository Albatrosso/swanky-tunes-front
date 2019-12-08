<template>
  <div class="contacts">
    <h1 class="visually-hidden">Contacts</h1>
    <navMenu/>
    <contactsMain/>
    <footerMenu/>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import contactsMain from '@/components/contactsMain.vue';
import footerMenu from '@/components/footerMenu.vue';
import navMenu from '@/components/navMenu.vue';

@Component({
  components: { contactsMain, footerMenu, navMenu },
})
export default class Contacts extends Vue {
}
</script>

<style scoped lang="less">
  .contacts {
    .main-background();
    .fullscreen();
    .flex-layout();
    .fix-height();
  }
</style>
