<template>
  <div class="enter">
    <img src="../assets/images/icons/enter.svg" alt="" class="enter__icon" />
    <div class="enter__text">
      <span>Личный кабинет</span>
      <small>Вход и регистрация</small>
    </div>
    <div class="enter__action" :class="'_' + actionPosition">
      <div class="enter__action-text _yellow">Жми<br />сюда</div>
      <img
        v-if="actionPosition == 'right'"
        src="../assets/images/icons/arrow_1.svg"
        alt=""
        class="enter__action-icon"
      />
      <img
        v-else
        src="../assets/images/icons/arrow_2.svg"
        alt=""
        class="enter__action-icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["actionPosition"],
};
</script>

<style lang="scss" scoped>
.enter {
  display: flex;
  width: rem(233px);
  height: rem(68px);
  padding: rem(12px);
  align-items: center;
  background: #fff;
  border-radius: rem(40px);
  cursor: pointer;
  &__icon {
    width: rem(44px);
    margin-right: rem(10px);
  }
  &__text {
    font-family: Arial;
    span {
      display: block;
      font-size: rem(17px);
      font-weight: 600;
      color: #1d1d1b;
    }
    small {
      font-size: rem(13px);
      color: #9ca3ab;
    }
  }
  &__action {
    position: absolute;
    display: none;
    @media (min-width: $sm) {
      display: block;
    }
    &._right {
      bottom: 30%;
      left: 105%;
    }
    &._top {
      bottom: 110%;
      left: 5%;
    }
    &-text {
      font-size: rem(22px);
      line-height: 1;
      font-family: "Black";
      ._right & {
        margin-left: rem(30px);
        transform: rotate(20.93deg);
      }
      ._top & {
        margin-left: rem(-20px);
        margin-bottom: rem(20px);
        transform: rotate(-20.93deg);
      }
    }
    &-icon {
      width: rem(43px);
      ._top & {
        width: rem(80px);
      }
    }
  }
}
</style>
