<template>
  <div class="page">
    <div class="container _p0">
      <router-link to="/">
        <img 
          class="page__logo"
          src="../assets/images/logo.png"
          srcset="../assets/images/logo.png, ../assets/images/logo@2x.png 2x" 
          alt="">
      </router-link>
    </div>
    <div class="container">
      <div class="retails-list">
        <a
          v-for="(item, i) in retails"
          :key="i"
          :href="item.link"
          target="_blank"
          class="retails-list__item"
          :style="'background: ' + item.background"
          @click="gtmEvent(item.gtm.category, item.gtm.action, item.gtm.label)"
        >
          <img :src="require(`../assets/images/logos/${item.logo}`)" alt="" />
          <div class="retails-list__item-front">
            <span>Перейти в магазин</span>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path
                d="M0 0L9.41176 8L0 16L0 12L4.63073 8L0 4L0 0Z"
                fill="#C1002A"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    retails: [
      {
        logo: "ozon.svg",
        gtm: {
          category: "ozon_chapter_CB",
          action: "ozon_chapter_CB",
          label: "shops",
        },
        background: "linear-gradient(270deg, #256BF4 0%, #1052D1 100%)",
        link: "https://www.ozon.ru/category/konfety-30695/?from_global=true&text=Skittles",
      },
      {
        logo: "samokat.svg",
        gtm: {
          category: "samokat_chapter_CB",
          action: "samokat_chapter_CB",
          label: "shops",
        },
        background: "linear-gradient(270deg, #EE5F79 0%, #ED4963 100%)",
        link: "https://vml8.adj.st/category/4c20c032-9102-41d4-ae50-66cbd423cf1b?showcaseType=MINIMARKET&adj_t=i5en5i5&adj_redirect_macos=https%3A%2F%2Fsamokat.ru%2F&adj_redirect_windows=https%3A%2F%2Fsamokat.ru%2F",
      },
      {
        logo: "yandex_lavka.png",
        gtm: {
          category: "yalavka_chapter_CB",
          action: "yalavka_chapter_CB",
          label: "shops",
        },
        background: "#E7E7E7",
        link: "https://lavka.yandex.ru/213/search?text=skittles",
      },
      {
        logo: "sber_market.svg",
        gtm: {
          category: "sbermarket_chapter_CB",
          action: "sbermarket_chapter_CB",
          label: "shops",
        },
        background: "linear-gradient(90deg, #4B9C45 0%, #8ABC4D 100%)",
        link: "https://sbermarket.ru/metro/search?keywords=Skittles&sid=1",
      },
      {
        logo: "perekrestok.svg",
        gtm: {
          category: "perekrestok_chapter_CB",
          action: "perekrestok_chapter_CB",
          label: "shops",
        },
        background: "linear-gradient(90deg, #183D43 0%, #265E63 100%)",
        link: "https://www.vprok.ru/catalog/search?text=Skittles",
      },
      {
        logo: "yandex_market.svg",
        gtm: {
          category: "yamarket_chapter_CB",
          action: "yamarket_chapter_CB",
          label: "shops",
        },
        link: "https://market.yandex.ru/search?cvredirect=2&text=Skittles&pokupki=1&cpa=1",
      },
      {
        logo: "wildberries.svg",
        gtm: {
          category: "wildberries_chapter_CB",
          action: "wildberries_chapter_CB",
          label: "shops",
        },
        background: "linear-gradient(90deg, #742E6C 0%, #AE4892 100%)",
        link: "https://www.wildberries.ru/brands/skittles",
      },
      {
        logo: "utkonos.svg",
        gtm: {
          category: "utkonos_chapter_CB",
          action: "utkonos_chapter_CB",
          label: "shops",
        },
        background: "linear-gradient(90deg, #4FB356 0%, #5CC16B 100%)",
        link: "https://www.utkonos.ru/search/Skittles",
      },
      
      
    ],
  }),
  mounted() {
    this.$parent.showFooter = false;
    this.$parent.showHeader = false;
  },
};
</script>

<style lang="scss" scoped>
.retails {
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &::after {
      content: "";
      flex: 1 1 auto;
    }
    &__item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 calc(100% - #{rem(16px)});
      margin: 0 rem(8px) rem(22px);
      background: #fff;
      border-radius: rem(10px);
      overflow: hidden;
      &::after {
        content: "";
        padding-bottom: 60%;
      }
      @media (min-width: $sm) {
        flex: 0 0 calc(50% - #{rem(16px)});
      }
      @media (min-width: $md) {
        flex: 0 0 calc(25% - #{rem(16px)});
        &::after {
          content: "";
          padding-bottom: 60%;
        }
      }

      img {
        max-width: 70%;
        max-height: 80%;
      }
      &-front {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $yellow;
        color: $red;
        font-size: rem(18px);
        text-transform: uppercase;
        transition: 0.2s;
        opacity: 0;
        svg {
          display: block;
          margin-left: rem(7px);
          margin-bottom: rem(2px);
        }
      }
      &:hover {
        .retails-list__item-front {
          opacity: 1;
        }
      }
     
    }
  }
  &__bottom-img {
    display: block;
    margin: rem(14px) auto 0;
  }
}
</style>
