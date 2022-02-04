<template>
  <section class="steps section fp-auto-height-responsive">
    <div class="container visible-xs">
      <div class="steps__title">
        <span>ПРАВИЛА <br />АКЦИИ</span>
      </div>
      <!-- <div class="steps__content">
        <div class="steps__list">
          <div class="steps__item" v-for="(item, idx) in steps" :key="idx">
            <div class="steps__item-index">{{ idx + 1 }}</div>
            <div class="steps__item-content">
              <div class="steps__item-title" v-html="item.title"></div>
              <div class="steps__item-descr" v-html="item.text"></div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
    <video
      class="steps__video lazy hidden-xs"
      defaultMuted
      data-ignore
      data-keepplaying
      playsinline
      oncontextmenu="return false;"
      poster="../assets/images/steps-poster-desktop.png"
      autoplay
      muted
      id="steps"
    >
      <source :data-path="`${publicPath}video/steps.mp4`" />
    </video>
    <video
      class="steps__video lazy-mobile visible-xs"
      defaultMuted
      data-ignore
      data-keepplaying
      playsinline
      oncontextmenu="return false;"
      autoplay
      autobuffer
      muted
      id="steps-mobile"
    >
      <source :data-path="`${publicPath}video/steps-mobile.mp4`" />
    </video>
  </section>
</template>
<script>
export default {
  props: ["steps"],
  components: {},
  data: function () {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    showModal(name) {
      this.$modal.show(name);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.steps {
  position: relative;
  display: flex;
  height: auto;
  // align-items: center;
  min-height: 100vh;
  // max-height: 100vh !important;
  overflow: hidden;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    display: block;
    width: 100%;
    height: rem(92px);
    transform: translateX(-50%);
    background: url("../assets/images/flashlights.png") no-repeat center top;
    background-size: 100%;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30vh;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(69, 30, 12, 0) 100%
    );
    z-index: 0;
  }
  .container {
    position: absolute;
    top: 0;
    padding-top: rem(40px);
    z-index: 99;
  }
  &__title {
    margin-bottom: rem(33px);
    font-family: "Black";
    font-size: rem(31px);
    line-height: rem(37px);
  }
  &__content {
    position: relative;
  }

  &__list {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 0 auto;
  }

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 70%;
    margin: auto;
    &:not(:last-of-type) {
      margin-bottom: rem(60px);
    }
  }

  &__item-title {
    font-size: rem(40px);
    line-height: rem(44px);
    font-family: "Black";
    text-transform: uppercase;
  }
  &__item-index {
    width: rem(35px);
    height: rem(35px);
    color: $yellow;
    flex-shrink: 0;
    margin-bottom: rem(22px);
    font-family: "Black";
    font-size: rem(18px);
    text-align: center;
    line-height: rem(32px);
    border: rem(2px) solid $yellow;
    border-radius: 50%;
  }
  &__item-descr {
    margin: 0 auto;
    font-size: rem(16px);
    line-height: rem(19px);
    font-family: "Black";
    color: $yellow;
    a,
    span {
      color: #fff;
    }
    a {
      border-bottom: 1px solid currentColor;
    }
  }
  &__ded {
    position: absolute;
    bottom: 50%;
    left: 0;
    max-height: 50vh;
    transform: translateX(-120%);
    opacity: 0;
    z-index: 100;
    .active & {
      opacity: 1;
      animation: ridingDedMobile 4s 1s cubic-bezier(0.01, 0.64, 0.92, 0.23);
    }
  }
  &__video {
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    width: auto;
    height: auto;
    overflow: hidden;
  }
  @media (min-width: $md) {
    display: flex;
    height: 100vh;
    align-items: center;
    background-image: url('../assets/images/steps-poster-desktop.png') !important;
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
      background-size: contain;
    }
    .container {
      padding-top: rem(80px);
    }
    &__title {
      font-size: rem(31px);
    }
    &__list {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row;
      padding-bottom: rem(70px);
      margin: 0;
    }

    &__item {
      width: auto;
      flex: 0 0 20%;
      margin: 0;
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
    }
    &__item-title {
      margin-bottom: rem(5px);
      font-size: rem(56px);
      line-height: rem(63px);
    }
    &__item-descr {
      margin: 0 auto;
      margin-right: rem(-30px);
      font-size: rem(19px);
      line-height: rem(23px);
    }
    &__item-index {
      width: rem(40px);
      height: rem(40px);
      margin-top: rem(8px);
      margin-right: rem(7px);
      margin-bottom: 0;
      font-size: rem(24px);
      line-height: rem(37px);
      border-width: rem(2px);
    }
    &__ded {
      bottom: 0;
      left: 0;
      max-height: 50vh;
      transform: translateX(-120%);
      opacity: 0;
      z-index: 100;
      .active & {
        opacity: 1;
        animation: ridingDed 2s 1s cubic-bezier(0.01, 0.64, 0.92, 0.23);
      }
    }
    &__video {
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
    }
  }
}
</style>
