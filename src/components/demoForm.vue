<template>
    <div>
      <div class="demo">
        <form class="form" action="#" method="get">
          <label class="form__label visually-hidden" for="name">Name</label>
          <input class="demo__input" type="text"
                   id="name" name="name" placeholder="Name:" required>
          <label class="form__label visually-hidden" for="email">Email</label>
          <input class="demo__input" name="email" placeholder="Email:"
                   type="email" id="email" autocomplete="off" required>
          <label class="form__label visually-hidden" for="url">Music URL</label>
          <input class="demo__input" name="url" placeholder="Music URL:"
                   type="text" id="url" autocomplete="off" required>
          <label class="form__label visually-hidden" for="comment">Comment</label>
          <input class="demo__input" name="comment" placeholder="Comment:"
                   type="text" id="comment">
          <button class="form__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class demoForm extends Vue {
}
</script>

<style scoped lang="less">
.demo {
  .flex-container();
}
.form {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
}
.demo__input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 15px;
  margin-bottom: 35px;
  background-color: transparent;
  border: 1px solid #000000;
  font-size: 20px;
}
.demo__input:focus,
.demo__input:active {
  outline: none;
  border: 1px solid #c8c8c8;
}
.demo__input::placeholder {
  color: #000000;
}
.form__button {
  width: 65px;
  padding: 0;
  margin-bottom: 25px;
  background-color: transparent;
  border: none;
  position: relative;
  font-size: 20px;
}
.form__button:focus {
  outline: none;
  border: none;
}
.form__button::after {
  content: "";
  height: 1px;
  width: 100%;
  background-color: #000000;
  position: absolute;
  bottom: 0;
  left: 0;
}
.form__button:focus::after,
.form__button:hover::after {
  content: "";
  display: none;
}
@media (min-width: 768px) {
  .demo {
    width: 580px;
  }
  .demo__input {
    height: 55px;
  }
}
</style>
