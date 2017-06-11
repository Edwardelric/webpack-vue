<template>
  <div class="swiper">
    <img src="../static/images/common/1.jpg"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {};
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  .swiper {
    overflow:hidden;
    height: 6rem;
    background: $gray1;
    text-align: center;
    img {
      width: 100%;
    }
  }
</style>
