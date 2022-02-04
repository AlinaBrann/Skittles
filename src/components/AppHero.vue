<template>
  <div class="hero section noscroll">
    
    <div class="container">
      <router-link :to="{ name: 'Home' }" class="hero__logo-wrapper visible-xs">
        <img
          src="@/assets/images/logo.png"
          srcset="../assets/images/logo@2x.png 2x"
          class="hero__logo _left"
          alt=""
        />
      </router-link>
      <div class="hero__row">
        <div class="hero__content">
          <h1 class="hero__title _yellow">Зарядись SNICKERS!</h1>
          <div class="hero__subtitle">
            Регистрируй&nbsp;чек&nbsp;– <br />получай
            <span class="_yellow">кешбЭк</span>
          </div>
        </div>
        <!-- <img  
          src="../assets/images/hero/hero-1.png" 
          srcset="../assets/images/hero/hero-1@2x.png 2x" 
          alt="" 
          class="hero__img visible-xs">  -->
      </div>
    </div>

    <div class="hero__action _right _on-mobile">
      <img src="../assets/images/action.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
  },
  mounted() {
    // this.toCheckUpload()
  },
};
</script>
<style lang="scss" scoped>
.hero {
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 9;
  display: flex;
  align-items: center;
  overflow: hidden;


  &__logo {
    height: rem(37px);
    &-wrapper {
      display: inline-block;
      margin-bottom: rem(10px);
    }
  }
  .container {
    position: relative;
    padding-top: rem(20px);
    height: 100vh;
    max-height: 100vh;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 22vh;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(69, 30, 12, 0) 100%
      );
    }
  }
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__row {
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: auto;
    flex-direction: column;
  }
  &__col {
    position: relative;
  }
  &__title {
    margin-bottom: rem(8px);
    font-size: rem(42px);
    line-height: 1.1;
    text-transform: uppercase;
    font-family: "Black";
  }
  &__subtitle {
    margin-bottom: rem(15px);
    font-size: rem(19px);
    line-height: 1.1;
    text-transform: uppercase;
    font-family: "Black";
  }
  &__img {
    margin-top: auto;
  }
  @media (max-width: $sm) {
    height: 92vh !important;
    .fp-tableCell {
      vertical-align: top;
    }
    &__img {
      width: 136%;
      margin: 0 -18% 0;
      max-width: none;
      height: 100%;
      object-fit: cover;
      object-position: center top;
    }
  }
  @media (max-height: 580px) {
    &__img {
      width: 110%;
      margin: 0 -5% 0;
    }
  }
  @media (min-width: $sm) {
    &::before {
      top: -10px;
      right: 0;
      bottom: auto;
      left: auto;
      width: 50%;
      height: rem(424px);
      transform: rotate(0deg);
    }
    .container {
      padding-top: 0;
      display: flex;
      align-items: center;
      &::after {
        display: none;
      }
    }
    &__title {
      font-size: rem(48px);
      margin-bottom: rem(6px);
    }
    &__subtitle {
      font-size: rem(30px);
    }
    &__row {
      margin: auto;
    }
    &__content {
      padding-top: rem(113px);
    }
    &__text {
      width: 80%;
    }
    &-nav {
      &-title {
        margin-bottom: rem(22px);
        font-size: rem(34px);
      }
      &__item {
        padding: rem(23px) 0;
        width: rem(152px);
      }
    }
  }
  &__action {
    position: fixed;
    width: rem(80px);
    z-index: 10;
    &._on-mobile {
      position: fixed;
      opacity: 0;
      transition: 0.4s;
      .fp-viewing-0 & {
        opacity: 1;
      }
    }
    &._right {
      bottom: 13px;
      left: 191px;
    }
    &-icon {
      width: rem(43px);
      transform: rotate(30deg);
    }
    &-text {
      position: relative;
      top: 15px;
      left: 40px;
      font-size: rem(22px);
      line-height: 1;
      font-family: "Black";
    }
    @media (min-width: $sm) {
      display: none;
      &._right {
        bottom: 20.8vh;
        left: 20%;
        transform: rotate(-15deg);
      }
      &-icon {
        width: rem(43px);
        transform: none;
      }
      &-text {
        top: 10px;
        left: 40px;
        ._right & {
          transform: rotate(50.93deg);
        }
      }
    }
  }
  @media (min-width: $md) {
    .container {
      padding-top: 0;
      height: 100vh;
      align-items: center;
      overflow: hidden;
    }
    &__row {
      max-width: 100%;
    }
    &__title {
      text-align: left;
      font-size: rem(59px);
      line-height: rem(66px);
    }
    &__subtitle {
      margin-bottom: rem(64px);
      font-size: rem(30px);
      line-height: rem(36px);
    }
    &__text {
      width: 100%;
      margin: 0;
      text-align: left;
      font-size: rem(24px);
      line-height: rem(29px);
    }
    &__content {
      max-width: 40%;
      padding-top: 0;
    }
    &__row {
      height: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    &__img {
      align-self: flex-end;
      height: 91vh;
      margin: auto auto 0;
      width: auto !important;
    }
  }
  @media (max-width: $xlg) {
  }
}
</style>
