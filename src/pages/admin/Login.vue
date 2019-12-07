<template>
  <div class="login">
    <h1 class="login__headline">Login to administrator account</h1>
    <loginForm></loginForm>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import loginForm from '@/components/admin/loginForm.vue';

@Component({
  components: { loginForm },
})
export default class Login extends Vue {
}
</script>

<style scoped lang="less">
.login {
  .main-background();
  .fullscreen();
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login__headline {
  margin: 0;
  margin-bottom: 50px;
  font-size: calc(1rem + 1.23vw);
  font-weight: normal;
}
</style>
