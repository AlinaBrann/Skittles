<template>
  <div class="form-select">
    <div class="form__caption" v-if="labelText">{{ labelText }}</div>
    <v-select
      :searchable="false"
      :options="options"
      v-model.trim="retValue"
      :name="name"
      @focus="errorReset()"
      @change="onInput()"
      @input="onInput()"
      :class="className"
    >
      <span slot="no-options">Ничего не найдено</span>
    </v-select>

    <div class="error-hint" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      retValue: this.field,
    };
  },

  methods: {
    errorReset() {
      this.$parent.errorReset();
    },

    onInput() {
      this.$emit("input", this.retValue);
    },
  },
  props: ["options", "field", "name", "error", "labelText", "className"],
};
</script>

<style lang="scss">
.form-select {
  position: relative;
  max-width: 100%;
  margin: 0 auto 15px;
  z-index: 10;
  .v-select {
    height: rem(54px);
    &._bordered {
      .vs__open-indicator {
        width: rem(42px);
        height: rem(42px);
        background-color: $yellow;
        background-image: url("../../assets/images/select_arrow.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      .vs__selected {
        position: relative;
        color: #1a1511;
        padding: 2px 5px 0 0;
      }
      .vs__dropdown-toggle {
        border: 2px solid #912982;
        border-radius: 20px;
      }
      .vs__dropdown-menu {
        width: 100%;
        min-width: auto;
      }
    }
  }
  .vs__dropdown-toggle {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 1;
    height: 100%;
    z-index: 1001;
    background: #ffffff;
    border: 0.33rem solid #d0d0d0;
    box-sizing: border-box;
    box-shadow: 0.9rem 0.9rem 0 rgb(0 0 0 / 25%);
    border-radius: 0.5rem;
    padding: 0px rem(3px) 0 rem(30px);
  }

  .vs--open .vs__dropdown-toggle {
    border-bottom-color: rgb(0 0 0 / 25%);
    border-radius: 0.5rem;
    box-shadow: none;
  }

  .vs__selected-options {
    padding: 0;
  }

  .vs__search {
    padding: 0;
    margin: 0;
    border: 0;
    color: #1a1511;
    font-size: 13px;
    text-transform: uppercase;

    &:focus {
      border: 0;
      padding: 0;
      margin: 0;
      font-size: 13px;
    }
  }

  .vs__actions {
    padding: 0px 0px 0 3px;
  }

  .vs__clear {
    display: none;
  }

  .vs__open-indicator {
    width: rem(40px);
    height: rem(40px);
    padding: rem(3px);
    background-color: $yellow;
    background-image: url("../../assets/images/select_arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: rem(14px);
    border-radius: rem(2px);
    transition: 0s;
    path {
      display: none;
    }
  }

  .vs__selected {
    bottom: 0;
    padding: 0;
    margin: 0;
    color: #a9918b;
    font-size: rem(18px);
    text-transform: uppercase;
    letter-spacing: rem(2px);
  }

  .vs--single.vs--open .vs__selected {
    position: relative;
    opacity: 1;
  }

  .vs__dropdown-menu {
    border: 0;
    margin-top: rem(3px);
    padding: rem(3px);
    // background: rgba(238, 178, 36, 0.5);
    box-shadow: 0px 4px 4px rgba(99, 89, 66, 0.25);
    border-radius: 0.5rem;
    z-index: 100;
  }

  .vs__dropdown-option {
    cursor: pointer;
    background: #fff;
    padding: rem(12px) rem(30px);
    text-transform: uppercase;
    font-size: rem(16px);
    line-height: rem(19px);
    letter-spacing: 0.09em;
    color: #3c140a;
    border-radius: 0.3rem;
  }

  .vs__dropdown-option--highlight {
    color: #1a1511;
    background-color: rgba(238, 178, 36, 1);
  }
}
</style>
