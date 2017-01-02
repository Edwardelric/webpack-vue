<template>
  <div id="app">
    <v-header></v-header>
    <v-content :seller="seller"></v-content>
    <v-footer></v-footer>
    <!--<div class="mask"></div>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import header from 'components/header/header';
  import content from 'components/content/content';
  import footer from 'components/footer/footer';
  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header,
      'v-content': content,
      'v-footer': footer
    }
  };
</script>

<style lang="scss">
  @import 'static/styles/_reset';
  @import 'static/styles/common.scss';
</style>

