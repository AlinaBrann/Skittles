<template>
  <div></div>
</template>

<script>
export default {
  data: function () {

    return {
      publicPath: process.env.BASE_URL,

    };
  },

  mounted() {
    this.$parent.showFooter = false;
   
  },

  methods: {

    showModal(name) {
      this.$modal.show(name);
    },

  },

  components: {
  },
};
</script>

<style lang="scss"></style>
