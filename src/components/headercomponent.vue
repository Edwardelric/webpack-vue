<template>
  <div class="flex header-menu-wrapper">
    <ul class="flex header-menu">
      <li v-for="(item, index) in menu" :key="index">
        <router-link :to="item.url">{{item.menuText}}</router-link>
      </li>
    </ul>
    <mu-icon value="view_headline"/>
    <mu-icon value="search"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {};
    },
    computed: mapGetters({
      menu: 'getHeaderMenu'
    })
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  .header-menu-wrapper{
    overflow: hidden;
    align-items: center;
    height: 46px;
    padding:0 10px;
    border-bottom: 2px solid $gray1;
    background: #fff;
    .header-menu {
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling:touch;
      flex: 7;
      align-items: center;
      height: 60px;
      white-space: nowrap;
      li {
        padding-right:25px;
      }
    }
    i {
      flex: 1;
      padding-left: 8px;
      font-size:30px;
      &:nth-of-type(2) {
        font-size: 34px;
      }
    }
  }
</style>

