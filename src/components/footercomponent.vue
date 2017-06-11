<template>
  <footer class="footer">
    <ul class="flex bottom-menu">
      <li v-for="(item, index) in bottomMenu" :key = "index">
        <router-link :to="item.url">
          <mu-icon :value="item.iconClass"/>
          <p>{{item.menuText}}</p>
        </router-link>
      </li>
    </ul>
  </footer>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex';
  export default {
    computed: mapGetters({
      bottomMenu: 'getFooterMenu'
    })
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.125rem;
    margin-top: -3.25rem;
    border-top: 0.125rem solid $gray1;
    background: $white;
    .bottom-menu {
      padding: 0 10px;
      align-items: center;
      height: 3.125rem;
      font-size: 12px;
    }
  }
</style>
