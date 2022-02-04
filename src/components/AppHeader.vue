<template>
  <header class="header">
    <div class="container">
      <div class="header__row">
        <router-link
          :to="{ name: 'Home' }"
          class="header__logo-wrapper hidden-xs"
        >
          <img
            src="@/assets/images/logo.png"
            srcset="../assets/images/logo@2x.png 2x"
            class="header__logo _left"
            alt=""
          />
        </router-link>
        <div class="header__inner">
          <div class="header__hamburger" @click="showBurger()">
            <img
              src="../assets/images/hamburger_icon.svg"
              alt=""
              class="header__hamburger-pic"
            />
          </div>
          <div class="header__nav">
            <a
              :href="`${publicPath}docs/rules.pdf`"
              target="_blank"
              class="header__nav-link"
            >
              правила
            </a>
            <router-link
              v-for="(item, idx) in navigation"
              :key="idx"
              class="header__nav-link"
              active-class="header__nav-link--active"
              @click.native="item.gtm || ''"
              :to="{ name: item.path }"
              v-html="item.name"
            >
            </router-link>
            <router-link
              class="header__nav-link"
              active-class="header__nav-link--active"
              @click.native="gtmEvent('FAQ_page_CB', 'FAQ_page_CB', 'menu')"
              :to="{ name: 'Faq' }"
            >
              FAQ
            </router-link>
            <a
              :href="`${publicPath}archive`"
              target="_blank"
              class="header__nav-link"
            >
              Snickers&reg; 30&nbsp;лет в&nbsp;движении 2.0
            </a>
          </div>
        </div>

        <div class="header__menu_mob">
          <button class="header__menu_mob-close" @click="showBurger()"></button>
          <a
            :href="`${publicPath}docs/rules.pdf`"
            target="_blank"
            class="header__nav-link"
          >
            правила
          </a>
          <router-link
            v-for="(item, idx) in navigation"
            :key="idx"
            class="header__nav-link"
            active-class="header__nav-link--active"
            @click.native="showBurger(), item.gtm"
            :to="{ name: item.path }"
            v-html="item.name"
          >
          </router-link>
          <router-link
            class="header__nav-link"
            active-class="header__nav-link--active"
            @click.native="gtmEvent('FAQ_page_CB', 'FAQ_page_CB', 'menu')"
            :to="{ name: 'Faq' }"
          >
            FAQ
          </router-link>
          <a
            :href="`${publicPath}archive`"
            target="_blank"
            class="header__nav-link"
          >
            Snickers&reg; 30&nbsp;лет в&nbsp;движении 2.0
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
      navigation: [
        {
          name: "где купить",
          path: "WhereToBuy",
        },
        // {
        //   name: "победители",
        //   path: "Home",
        // },
        {
          name: "продукты участвующие в акции",
          path: "Production",
        },

        // {
        //   name: "Snickers®️ 30 лет в движении 2.0",
        //   path: "Home",
        // },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    clickPrize() {
      if (this.$store.getters.user) {
        let apmButton = document.querySelector(
          "#apm-scan-qr .apm-action-button"
        );
        if (apmButton) apmButton.click();
      } else {
        this.$modal.show("authorization");
      }
    },

    showModal(name) {
      this.$modal.show(name);
    },
    logout() {
      this.$store.dispatch("LogOut");
      document.location.reload();
    },
    showBurger() {
      let header = document.querySelector(".header");
      if (!header.classList.contains("header--mob_active"))
        header.classList.add("header--mob_active");
      else header.classList.remove("header--mob_active");
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  width: 20%;
  z-index: 999;

  &.header--mob_active {
    width: 100%;
  }
  .container {
    position: relative;
    padding-top: rem(18px);
    padding-bottom: rem(17px);
  }
  &__row {
    display: flex;
    align-items: center;
    width: 100%;
  }
  &.header--mob_active {
    .header__hamburger {
      opacity: 0;
      visibility: hidden;
    }

    .header__menu_mob {
      display: flex;
    }
  }
  &__logo {
    height: rem(37px);
    &-wrapper {
      flex-shrink: 0;
      flex-grow: 0;
    }
  }
  &__inner {
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
  }
  &__nav {
    position: relative;
    width: 100%;
    display: none;
    align-items: center;
  }

  &__nav-link {
    margin-bottom: rem(20px);
    font-size: rem(16px);
    line-height: 1.4;
    text-align: center;
    color: #a9918b;
    white-space: nowrap;
    text-transform: uppercase;
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease-in-out;

    &.router-link-exact-active {
      color: $yellow;
    }
  }

  &__nav-link:not(._exit):hover {
    color: $yellow;
  }
  &__nav-retail {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  &__nav-retail-img {
    max-height: rem(35px);
    margin-bottom: rem(30px);
  }
  &__hamburger {
    display: block;
    margin: auto 0 auto auto;
  }

  &__menu_mob {
    display: none;
    position: absolute;
    width: 100%;
    top: 0px;
    right: 0;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #2b1502;
    padding-top: 0;
    padding-bottom: 60px;
    z-index: 10;
    .btn--default {
      background-color: transparent;
    }

    .btn {
      margin-bottom: 21px;
      min-width: 280px;
    }

    .btn:last-child {
      margin-top: 20px;
    }
  }

  &__menu_mob-close {
    cursor: pointer;
    align-self: flex-end;
    margin: rem(8px) rem(8px) rem(30px) 0;
    width: rem(34px);
    height: rem(34px);
    flex-shrink: 0;
    margin-bottom: rem(30px);
    background: url("../assets/images/close_icon.svg") no-repeat center;
    background-size: rem(16px);
  }
  @media (min-width: $sm) {
    &__logo {
      height: rem(38px);
    }
    &__menu_mob {
      max-width: 45%;
      box-shadow: -5px 4px 10px rgba(0, 0, 0, 0.15);
    }
  }
  @media (min-width: $md) {
    width: 100%;
    &__row {
      align-items: flex-start;
    }
    &__logo {
      height: rem(66px);
    }
    &__nav {
      display: flex;
      margin-top: rem(8px);
      margin-left: rem(25px);
      width: 100%;
      justify-content: space-between;
    }
    &__nav-link {
      font-size: rem(14px);

      margin-bottom: 0;
      line-height: 1.4;
      text-align: center;
      color: #fff;
      font-family: "Black";
      text-transform: none;
      border-bottom: 1px solid transparent;
      transition: all 0.3s ease-in-out;
      &._exit {
        width: rem(27px);
        height: rem(23px);
        background: url("../assets/images/exit.svg") no-repeat center;
        background-size: contain;
      }
      &:not(:first-of-type) {
        margin-left: rem(20px);
      }
    }
    .container {
      display: flex;
      padding-top: rem(40px);
      padding-bottom: rem(17px);
    }

    &__nav_mob {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__hamburger,
    &__menu_mob {
      display: none;
    }
  }
}

.header__menu_mob {
  display: none;
}

.header__menu_mob.active {
  display: flex !important;
}
</style>
