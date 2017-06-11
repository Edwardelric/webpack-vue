<template>
  <section class="wrapper">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <FooterComponent></FooterComponent>
    <!--<Toast></Toast>-->
    <Loading></Loading>
  </section>
</template>

<script type="text/ecmascript-6">
  import FooterComponent from 'components/footercomponent';
  import toast from 'components/toast';
  import loading from 'components/loading';
  export default {
    components: {
      'FooterComponent': FooterComponent,
      'Toast': toast,
      'Loading': loading
    }
  };
</script>

<style lang="scss">
  @import 'static/styles/common.scss';
</style>

