<template>
  <div class="star-wrapper">
    <span v-for="item in startType" :class="item" track-by="$index">
      <i class="iconfont icon-star1" v-if="item =='on'"></i>
      <i class="iconfont icon-star" v-if="item =='off'"></i>
      <i class="iconfont icon-starHalf" v-if="item =='half'"></i>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  const STAR_ON = 'on';
  const STAR_OFF = 'off';
  const STAR_HALF = 'half';
  export default {
    props: {
      score: {
        type: Number
      }
    },
    computed: {
      startType() {
        let arr = [];
        let integer = Math.floor(this.score);
        let decimal = (this.score - integer) % 2;
        for (let i = 0; i < integer; i++) {
          arr.push(STAR_ON);
        }
        if (decimal && decimal >= 0.5) {
          arr.push(STAR_HALF);
        } else if (decimal && decimal < 0.5) {
          arr.push(STAR_OFF);
        }
        return arr;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';

  .star-wrapper {
    padding: 20px 0;
    text-align: center;

    span {
      display: inline-block;
      margin: 0 10px;
      color: #ff9900;
      .iconfont {
        font-size: 26px;
      }
      .icon-starHalf{
        font-size:30px;
        vertical-align:middle;
      }
    }
  }
</style>
