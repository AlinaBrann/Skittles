<template>
  <div id="app">
    <Header v-if="showHeader" />
    <div class="app-content">
      <router-view />
    </div>
    <Footer v-if="showFooter" />
    <Feedback />
    <SuccessFeedback />
    <CommonError />
    <TemporarilyUnavailable />
  </div>
</template>
<script>
import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";
import Feedback from "@/components/modals/feedback.vue";
import TemporarilyUnavailable from "@/components/modals/temporarilyUnavailable.vue";

import SuccessFeedback from "@/components/modals/successFeedback.vue";

import CommonError from "@/components/modals/commonError.vue";

export default {
  components: {
    Header,
    Footer,
    Feedback,
    SuccessFeedback,
    CommonError,

    TemporarilyUnavailable,
  },
  data: function () {
    return {
      showHeader: true,
      showFooter: true,
      apmInit: false,
      network: null,
    };
  },
  methods: {
    checkAuth(t) {
      if (this.$store.getters.token) {
        if (!this.$store.getters.user) {
          this.$store.dispatch("GetProfile").then((response) => {
            if (response.error != 0) {
              if (this.$route.path !== "/") {
                this.$router.push("/");
              }
            } else {
              setTimeout(function () {
                t.apmInit = true;
              }, 1000);
            }
          });
        }
      }
    },

  },
  mounted() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

  },
  watch: {
    $route: {
      handler: (to, from) => {
        document.title = to.meta.title || "";
      },
      immediate: true,
    },
    "$route.path": function (val) {
      if (val == '/coming-soon') {
        this.showHeader = false
        this.showFooter = false
      } else {
        this.showHeader = true
        this.showFooter = true
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  position: relative;
  min-width: 320px;
}
.e-root {
  padding-left: rem(20px) !important;
  @media (min-width: $sm) {
    padding-bottom: 67px !important;
  }
}
.e-root__buttons {
  justify-content: flex-start !important;
  @media (max-width: $sm) {
    transform: scale(0.7);
    transform-origin: left bottom;
  }
  @media (min-width: $lg) {
    max-width: 95%;
    margin: auto;
  }
}
.scan-button__wrapper {
  @media (max-width: $sm) {
    margin-left: 3px !important;
  }
}
</style>
