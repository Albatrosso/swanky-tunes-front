<template>
<div class="login-form__wrapper">
  <form class="login-form" action="#" method="get">
    <label class="visually-hidden" for="login">Login</label>
    <input class="login-form__input" id="login" type="text"
           name="login" placeholder="Login:" required>
    <label class="visually-hidden" for="password">Password</label>
    <input class="login-form__input" id="password" type="password"
           name="password" placeholder="Password:" required>
    <button class="login-form__button" type="submit">Submit</button>
  </form>
</div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class loginForm extends Vue {
  }
</script>

<style scoped lang="less">
.login-form__wrapper {
  .flex-container();
}
.login-form {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.login-form__input {
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  margin-bottom: 35px;
  background-color: transparent;
  border: 1px solid #000000;
  font-size: 20px;
}
.login-form__input:focus,
.login-form__input:active {
  outline: none;
  border: 1px solid #c8c8c8;
}
.login-form__input::placeholder {
  color: #000000;
}
.login-form__button {
  width: 60px;
  background-color: transparent;
  border: none;
  position: relative;
  font-size: 20px;
}
.login-form__button:focus {
  outline: none;
  border: none;
}
.login-form__button::after {
  content: "";
  height: 1px;
  width: 100%;
  background-color: #000000;
  position: absolute;
  bottom: 0;
  left: 9px;
}
.login-form__button:focus::after,
.login-form__button:hover::after {
  content: "";
  display: none;
}
@media (min-width: 768px) {
  .login-form__wrapper {
    width: 580px;
  }
}
</style>
