<template>
  <div class="flex header">
    <mu-icon value="navigate_before" :class="{'hiddenIcon': hiddenIcon}" @click.prevent="goback"/>
    <span>{{title}}</span>
    <mu-icon value="store"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String
      },
      url: {
        type: String
      },
      hiddenIcon: {
        type: Boolean
      }
    },
    data() {
      return {};
    },
    methods: {
      goback() {
        this.$router.back(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  .header {
    height: 2.5rem;
    background: $orange2;
    .hiddenIcon {
      opacity: 0;
    }
  }
</style>
