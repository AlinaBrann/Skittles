<template>
  <div class="email-form">
    <div class="email-form__title">
      {{ 'Акция закончилась, но скоро начнется новая. Подпишись, и мы сообщим тебе о ней! ' | typograf }}
    </div>
    <form class="email-form__form">
      <label
        class="form__field"
        :class="{
          error: validationStatus($v.email) || errorMessage.email,
        }"
      >
      <input 
        type="email"
        placeholder="E-mail"
        class="form__field-input email-form__input"
        v-model="email"
        @focus="errorReset()"
        @blur="errorReset()"
      >
      <div class="error-hint" 
        v-if="errorMessage.email || (!$v.email.required && $v.email.$error) || ($v.email.email && $v.email.$error) || $v.email.$error"
        v-html="(!$v.email.required && $v.email.$error
            ? 'Обязательное поле'
            : !$v.email.email && $v.email.$error
            ? 'Некорректный e-mail'
            : '') || errorMessage.email
        "
      >
      </div>
      </label>
      <button type="button" @click="submit()" class="btn btn--primary email-form__button hidden-xs">напомнить</button>
      <button type="button" @click="submit()" class="btn btn--secondary email-form__button visible-xs">напомнить</button>
    </form>
    <transition name="fade">
      <div v-if="sended" class="email-form__popup">
        <div class="email-form__popup-close" @click="sended = false">
          <img src="../../assets/images/close_icon.svg" alt="">
        </div>
        <div class="email-form__popup-text">
          <span>Спасибо!</span>
          мы сообщим о начале акции.</div>
      </div>
    </transition>
    
  </div>
  
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: null,
    sended: false,
    errorMessage: {
      email: null,
      name: null,
      message: null,
    },

    submitStatus: null,
  }),
  validations: {
    email: { required, email },
  },

  methods: {
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        email: null,
      };
    },

    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    submit() {
      console.log("submit");
      this.$v.$touch();

      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";

        this.$store
          .dispatch("SendEntries", {
            email: this.email,
          })
          .then((r) => {
            console.log(r);
            if (r.error !== 0) {
              this.submitStatus = null;

              let fieldsError = null;
              
              if (r.message && r.message.email) {
                [this.errorMessage.email] = r.message.email;
                fieldsError = true;
              } else if (r.message && r.message.login) {
                [this.errorMessage.email] = r.message.login;
                fieldsError = true;
              }
            } else {
              this.submitStatus = null;
              this.sended = true
              setTimeout(() => {
                this.errorReset();
                this.email = null
              }, 1000);


            }
          })
          .catch(() => {
            this.submitStatus = null;
          });
      }
    },
  },
  components: {  },
};
</script>

<style lang="scss" scoped>
.email-form {
  position: relative;
  width: rem(315px);
  max-width: 100%;
  margin-bottom: rem(30px);
  z-index: 1;
  &__title {
    margin-bottom: rem(20px);
    font-size: rem(20px);
    line-height: rem(22px);
  }
  &__form {
    display: flex;
    flex-direction: column;
  }
  &__input {
    flex: auto;
    margin-bottom: 0;
  }
  &__button {
    margin-top: rem(20px);
    margin-left: auto;
    
  }
  &__popup {
    position: absolute;
    bottom: rem(-5px);
    left: 50%;
    width: rem(420px);
    max-width: calc(100vw - 30px);
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    padding: rem(10px) rem(20px) rem(37px) rem(34px);
    background: $red url('../../assets/images/popup-background-mobile.png') no-repeat center;
    background-size: 90%;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
    border-radius: rem(8px);
    z-index: 100;
    &-close {
      margin-left: auto;
      width: rem(20px);
      margin-bottom: rem(20px);
      transition: .5s;
      cursor: pointer;
      &:focus {
        transform: rotate(90deg);
      }
      
    }
    &-text {
      font-size: rem(20px);
      line-height: 1;
      span {
        display: block;
        margin-bottom: rem(10px);
      }
    }
  }
  .form__field {
    width: 100%;
  }
  @media (min-width: $sm) {
    margin-bottom: rem(76px);
    &__title {
      width: 85%;
      margin-bottom: rem(8px);
      margin-left: rem(20px);
    }
    &__form {
      flex-direction: row;
      align-items: center;
    }
    &__button {
      position: absolute;
      right: -2px;
      margin-left: rem(-7px);
      margin-top: 0;
    }
    &__popup {
      top: 0;
      bottom: auto;
      max-width: 100vw;
      min-height: 110%;
      padding: rem(16px) rem(20px) rem(50px) rem(50px);
      background: $red url('../../assets/images/popup-background.png') no-repeat center;
      background-size: 90%;
      &-close {
        width: rem(30px);
      }
      &-text {
        font-size: rem(20px);
        line-height: normal;
      }
    }
  }
}


</style>
