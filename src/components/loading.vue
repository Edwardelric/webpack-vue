<template>
  <section class="loading" :class="{active: isLoading}">
    <img src="../static/images/common/loading.gif"/>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    computed: {
      isLoading() {
        return this.$store.getters.getLoadingState;
      }
    }
  };
</script>
