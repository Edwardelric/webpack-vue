<template>
  <div class="content">
    <div class="nav">
      <router-link to="/intro">推荐</router-link>
      <router-link to="/video">视频</router-link>
      <router-link to="/hot">热点</router-link>
      <router-link to="/society">社会</router-link>
      <router-link to="/entertainment">娱乐</router-link>
      <router-link to="/military">军事</router-link>
      <router-link to="/tech">科技</router-link>
    </div>
    <div class="main">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        this.seller = response.body;
      });
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  .content{
    .nav{
      display: flex;
      margin-top: 42px;
      padding:6px 0;
      flex-direction: row;
      flex-flow: flex-start;
      justify-content: space-around;
      background:$gray;
      a{
        flex-grow: 1;
        text-align:center;
      }
    }
  }

</style>

