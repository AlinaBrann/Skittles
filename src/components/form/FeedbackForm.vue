<template>
  <div class="feedback">
    <form>
      <inputText
        placeholder="Ваше имя"
        :field="email"
        @input="name = $event"
        :class="{ error: validationStatus($v.name) || this.errorMessage.name }"
        :error="
          (!$v.name.required && $v.name.$error
            ? 'Обязательное поле'
            : !$v.name.rus && $v.name.$error
            ? 'Введите текст на русском языке'
            : '') || this.errorMessage.name
        "
      />
      <inputText
        placeholder="Ваш E-mail"
        :field="email"
        @input="email = $event"
        :class="{
          error: validationStatus($v.email) || this.errorMessage.email,
        }"
        :error="
          (!$v.email.required && $v.email.$error
            ? 'Обязательное поле'
            : !$v.email.email && $v.email.$error
            ? 'Некорректный e-mail'
            : '') || this.errorMessage.email
        "
      />
      <Select
        color="grey"
        placeholder="Тема обращения"
        :options="[
          { id: 1, label: 'Регистрация в акции' },
          { id: 2, label: 'Регистрация чека' },
          { id: 3, label: 'Призовой фонд' },
          { id: 4, label: 'Вопросы о продукте' },
          { id: 5, label: 'Технические вопросы' },
          { id: 6, label: 'Другое' },
        ]"
        field="Регистрация в акции"
        @input="subject = $event.id"
        :class="{
          error: validationStatus($v.subject) || this.errorMessage.subject,
        }"
        :error="
          (!$v.subject.required && $v.subject.$error
            ? 'Обязательное поле'
            : '') || this.errorMessage.subject
        "
      />
      <textArea
        placeholder="Текст обращения"
        :field="message"
        @input="message = $event"
        :class="{
          error: validationStatus($v.message) || this.errorMessage.message,
        }"
        :error="
          (!$v.message.required && $v.message.$error
            ? 'Обязательное поле'
            : '') || this.errorMessage.message
        "
      />
      <File
        :chosenFileName="chosenFileName"
        @submitMedia="submitMedia"
        @deleteFile="deleteFile"
      />
      <div class="feedback__checkbox_list">
        <checkBox
          label="ДАЮ СОГЛАСИЕ НА ОБРАБОТКУ ПЕРСОНАЛЬНЫХ ДАННЫХ МНЕ ИСПОЛНИЛОСЬ 18 ЛЕТ"
          :field="checkbox"
          :class="{
            error: validationStatus($v.checkbox) || this.errorMessage.checkbox,
          }"
          :error="this.errorMessage.checkbox"
          @input="checkbox = $event"
        />
      </div>
      <div class="feedback__text">
        ПЕРСОНАЛЬНЫЕ ДАННЫЕ, ОТПРАВЛЕННЫЕ ЧЕРЕЗ ЭТУ ФОРМУ, БУДУТ ИСПОЛЬЗОВАНЫ
        ТОЛЬКО ДЛЯ ОТВЕТА НА&nbsp;КОНКРЕТНЫЙ ВОПРОС, А&nbsp;ТАКЖЕ В&nbsp;ЦЕЛЯХ
        АНАЛИТИКИ, И&nbsp;НЕ&nbsp;БУДУТ ИСПОЛЬЗОВАТЬСЯ В&nbsp;МАРКЕТИНГОВЫХ
        ЦЕЛЯХ В&nbsp;СООТВЕТСТВИИ С&nbsp;ПОЛОЖЕНИЕМ О&nbsp;КОНФИДЕНЦИАЛЬНОСТИ.
      </div>

      <div class="feedback__footer">
        <button
          type="button"
          class="btn btn--primary"
          @click="
            submit(), gtmEvent('SendQuestion_CB', 'SendQuestion_CB', 'question')
          "
          :class="{ loading: submitStatus == 'PENDING' }"
        >
          Отправить<img src="../../assets/img/spinner.svg" alt="" />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import inputText from "@/components/form/inputText.vue";
import checkBox from "@/components/form/checkBox.vue";
import textArea from "@/components/form/textArea.vue";
import Select from "@/components/form/inputSelect.vue";
import File from "@/components/form/inputFile.vue";

import { required, email, sameAs } from "vuelidate/lib/validators";
const rus = (value) => /^[А-ЯЁа-яё ]+$/.test(value);

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default {
  name: "FeedbackForm",
  data() {
    return {
      ready: false,

      name: null,
      email: null,
      message: null,
      subject: 1,
      checkbox: false,
      attach: "",
      errorMessage: {
        email: null,
        name: null,
        message: null,
        subject: null,
      },

      submitStatus: null,

      chosenFileName: {},
    };
  },

  validations: {
    subject: { required },
    message: { required },
    email: { required, email },
    name: { required, rus },
    checkbox: {
      required,
      sameAs: sameAs(() => true),
    },
  },

  methods: {
    submitMedia(e) {
      let t = this;

      this.chosenFileName = e;

      if (this.chosenFileName.length) {
        getBase64(this.chosenFileName[0]).then(function (data) {
          t.attach = data;
        });
      }
    },
    deleteFile() {
      this.chosenFileName = {};
      this.attach = "";
    },

    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        email: null,
        name: null,
        message: null,
        subject: null,
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
          .dispatch("SendFeedback", {
            name: this.name,
            email: this.email,
            message: this.message,
            theme_id: this.subject,
            file_contents: this.attach,
          })
          .then((r) => {
            console.log(r);
            if (r.error !== 0) {
              this.submitStatus = null;

              this.$refs.recaptcha.reset();
              this.captcha = null;

              let fieldsError = null;

              if (r.message && r.message.email) {
                [this.errorMessage.email] = r.message.email;
                fieldsError = true;
              } else if (r.message && r.message.login) {
                [this.errorMessage.email] = r.message.login;
                fieldsError = true;
              }

              if (r.message && r.message.name) {
                [this.errorMessage.name] = r.message.name;
                fieldsError = true;
              }
              if (r.message && r.message.theme_id) {
                [this.errorMessage.theme_id] = r.message.theme_id;
                fieldsError = true;
              }

              if (r.message && r.message.text) {
                [this.errorMessage.message] = r.message.text;
                fieldsError = r.message;
              }
            } else {
              this.submitStatus = null;
              this.$modal.hide("feedback");
              this.$modal.show("success_feedback");
            }
          })
          .catch(() => {
            this.submitStatus = null;
          });
      }
    },
  },
  mounted() {},
  components: {
    inputText,
    textArea,
    checkBox,
    Select,
    File,
  },
};
</script>

<style lang="scss">
.feedback {
  margin: auto;
  .form-checkbox__caption {
    margin-left: rem(18px);
  }
  &__text {
    margin-bottom: rem(20px);
    padding-right: rem(10px);
    font-size: rem(12px);
  }
  &__checkbox_list {
    margin-bottom: rem(30px);
  }
}
</style>
