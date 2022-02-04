<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__nav">
        <a
          href="https://www.mars.com/privacy-policy-russia"
          target="_BLANK"
          class="footer__nav-link"
        >
          Конфиденциальность
        </a>
        <a
          href="https://www.mars.com/legal-russia"
          target="_blank"
          class="footer__nav-link"
        >
          Юридические условия
        </a>
        <a
          href="https://www.mars.com/"
          target="_blank"
          class="footer__nav-link"
        >
          Владелец сайта
        </a>
        <a
          href=""
          @click.prevent="
            toFeedback(),
              gtmEvent(
                'AskAQuestion_pup_Footer_CB',
                'AskAQuestion_pup_Footer_CB',
                'footer'
              )
          "
          class="footer__nav-link"
        >
          Задать вопрос о продукте
        </a>
        <a
          :href="`${publicPath}docs/user_agreement.pdf`"
          class="footer__nav-link"
        >
          Пользовательское соглашение
        </a>
      </div>

      <p class="footer__copyright">
        {{ "© 2021 Mars, Incorporated. Все права защищены" | typograf }}
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    toFeedback() {
      this.$modal.show("feedback");
    },
  },
};
</script>
<style scoped lang="scss">
.footer {
  position: relative;
  padding: rem(20px) 0 rem(100px);
  text-align: left;
  background: #2c0f07;
  color: #a9918b;
  z-index: 10;
  &__row {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__nav {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__nav-link {
    position: relative;
    margin-bottom: rem(20px);
    font-size: rem(12px);
    text-align: center;
    line-height: rem(22px);
    color: #a9918b;
  }

  &__nav-link:last-child {
    margin-right: 0;
  }

  &__nav-link:hover {
    text-decoration: underline;
  }

  &__copyright {
    margin: rem(6px) auto 0;
    font-size: rem(12px);
    text-align: center;
    color: #a9918b99;
  }
  @media (min-width: $sm) {
    padding: rem(40px) rem(123px) rem(22px);
    &__row {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }
    &__nav {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &__nav-link {
      margin-bottom: rem(30px);
      text-align: left;
      font-size: rem(19px);
    }
    &__copyright {
      margin-top: rem(40px);
      font-size: rem(18px);
    }
  }
  @media (min-width: $md) {
    padding: rem(40px) 0 rem(22px);
    &__nav-link {
      text-decoration: none;
      margin-bottom: 0;
    }
    &__col {
      flex: 0 0 35%;
      &:last-of-type {
        align-items: flex-start;
      }
    }
    &__copyright {
      max-width: 30%;
      margin: rem(140px) auto 0;
      font-size: rem(14px);
    }
  }
}
</style>
