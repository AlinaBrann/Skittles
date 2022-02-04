<template>
  <div class="coming-soon">
    <div class="container _p0">
      <img 
        class="coming-soon__logo"
        src="../assets/images/logo.png"
        srcset="../assets/images/logo.png, ../assets/images/logo@2x.png 2x" 
        alt="">
    </div>
    <div class="container">
      <div class="coming-soon__content">
        <div class="coming-soon__block">
          <VueSlickCarousel class="coming-soon__slider" :arrows="true" :dots="false">
            <img 
              v-for="i in 3"
              :key="i"
              :src="require(`../assets/images/production/product_${i}.png`)"
              :srcset="require(`../assets/images/production/product_${i}@2x.png`)" 
              class="coming-soon__slider-img"
              alt=""
            >
          </VueSlickCarousel>
        </div>
        <div class="coming-soon__block _order-1">
          <EmailForm/>
        </div>
      </div>
      <div class="coming-soon__content">
        <div class="coming-soon__block">
          <div class="coming-soon__text">
            {{ 'Крути карусель Skittles и проверь, все ли вкусы ты пробовал.' | typograf }}
          </div>
          <router-link to="/where-to-buy" class="coming-soon__btn btn btn--secondary">купить</router-link>
        </div>
        <div class="coming-soon__block">
          <div class="coming-soon__text">
            {{ 'А ещё у нас есть крутые видео на YouTube, не пропусти!' | typograf }}
          </div>
          <a href="https://www.youtube.com/channel/UC7qI4QW7CZP62U9PKXZCsbQ" target="_blank" class="coming-soon__youtube">
            <img src="../assets/images/youtube.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <a href="https://www.youtube.com/channel/UC7qI4QW7CZP62U9PKXZCsbQ" target="_blank" class="coming-soon__video visible-xs">
      <img src="../assets/images/video-preview.jpg" alt="">
      <div class="coming-soon__video-front" >
        <img src="../assets/images/play.svg" alt="">
      </div>
    </a>

      
    
    <AppParallaxCandies />
  </div>
</template>

<script>
import AppParallaxCandies from "../components/AppParallaxCandies.vue"
import EmailForm from "../components/form/emailForm.vue";
import VueSlickCarousel from 'vue-slick-carousel'
  export default {
    data: () => ({
      playing: false
    }),
    methods: {
      pause() {
        let videoElement = document.getElementById('video');   
        videoElement.pause();
        this.playing = false 
      },
      play() {
        let videoElement = document.getElementById('video');   
        videoElement.play();
        this.playing = true 
      }
    },
    mounted() {
      this.$parent.showHeader = false;
      this.$parent.showFooter = false;
    },
    components: { AppParallaxCandies, EmailForm, VueSlickCarousel }
}
</script>

<style lang="scss" scoped>
  .coming-soon {
    position: relative;
    &__logo {
      margin-bottom: rem(40px);
    }
    &__content {
      display: flex;
      flex-direction: column;
    }
    &__block {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    &__slider {
      &-img {
        object-fit: contain;
      }
    }
    &__text {
      font-size: rem(20px);
      line-height: rem(22px);
    }
    &__btn {
      margin-left: auto;
      margin-top: rem(8px);
      margin-bottom: rem(40px);
    }
    &__youtube {
      display: none;
      margin-left: auto;
      margin-top: rem(-55px);
    }
    &__video{
      display: block;
      position: relative;
      margin-top: rem(15px);
      margin-bottom: rem(50px);
      img {
        width: 100%;
      }
      &-front {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: rem(80px);
          height: rem(80px);
        }
      }
    }
    @media (min-width: $sm) {
      &__logo {
        height: 30vh;
        margin-left: rem(15px);
      }
      &__content {
        flex-direction: row;
        justify-content: space-around;
      }
      &__block {
        width: 34%;
      }
      &__text {
        width: 70%;
        margin-left: rem(20px);
      }
      &__slider {
        margin-bottom: rem(15px);
        &-img {
          height: 27vh;
        }
      }
      &__btn {
        margin-top: rem(-15px);
        margin-bottom: 0;
      }
      &__youtube {
        display: block;
        margin-left: auto;
        margin-top: rem(-55px);
      }
    }
  }
</style>