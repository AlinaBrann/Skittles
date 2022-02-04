<template>
  <section class="cashback section fp-auto-height-responsive">
    <video
      class="cashback__video lazy hidden-xs"
      defaultMuted
      data-ignore
      data-keepplaying
      playsinline
      autoplay
      poster="../assets/images/cashback-poster-desktop.png"
      oncontextmenu="return false;"
      muted
      id="cashback"
    >
      <source :data-path="`${publicPath}video/cashback.mp4`" />
    </video>
    <video
      class="cashback__video lazy-mobile visible-xs"
      defaultMuted
      data-ignore
      data-keepplaying
      playsinline
      autobuffer
      poster="../assets/images/cashback-poster.png"
      oncontextmenu="return false;"
      muted
      id="cashback-mobile"
    >
      <source :data-path="`${publicPath}video/cashback-mobile.mp4`" />
    </video>
  </section>
</template>

<script>
export default {
  components: {},
  data: () => ({
    publicPath: process.env.BASE_URL,
  }),
};
</script>

<style lang="scss" scoped>
.cashback {
  position: relative;
  height: 100vh;
  background-image: url("../assets/images/cashback-poster-desktop.png");
  &__video {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
    width: auto;
    height: auto;
    overflow: hidden;
  }
  @media (max-width: $sm) {
    margin-top: -1px;
    background-image: url("../assets/images/cashback-poster.png");
    &::after {
      content: "";
      display: block;
      height: rem(220px);
    }
  }
}
</style>
