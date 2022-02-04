<template>
  <label class="form-textarea">
    <div class="form-textarea__caption" v-if="label">{{ label }}</div>
    <textarea
      class="form-textarea__field"
      :placeholder="placeholder"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @input="onInput()"
      @blur="onBlur()"
    ></textarea>

    <div class="error-hint" v-if="error">{{ error }}</div>
  </label>
</template>
<script>
export default {
  data() {
    return {
      retValue: this.field,
      nameValue: this.name || "",
    };
  },
  methods: {
    errorReset() {
      this.$parent.errorReset();
    },

    onInput() {
      this.$emit("input", this.retValue);
    },

    onBlur() {
      this.$emit("input", this.retValue);
    },
  },
  props: {
    field: String,
    name: String,
    label: {
      type: String,
    },
    error: {
      type: String,
    },
    value: [String, Number],
    placeholder: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.form-textarea {
  display: block;
  max-width: 100%;
  margin: 0 auto rem(15px);

  &__field {
    resize: none;
    min-height: rem(160px);
    width: 100%;
    font-size: rem(18px);
    line-height: 2.2rem;
    letter-spacing: rem(2px);
    color: #3c140a;
    border: 0.33rem solid #d0d0d0;
    box-sizing: border-box;
    text-transform: uppercase;
    box-shadow: 0.9rem 0.9rem 0 rgb(0 0 0 / 25%);
    border-radius: 0.5rem;
    padding: rem(8px) rem(30px);
    transition: all 0.3s ease-in-out;
    &::placeholder {
      color: #a9918b;
    }
    &:focus {
      &::placeholder {
        color: #fff;
      }
    }
  }

  &__caption {
    font-size: rem(14px);
    line-height: rem(16px);
    color: #000;
    text-transform: none;
    margin-bottom: rem(3px);
  }
}
</style>
