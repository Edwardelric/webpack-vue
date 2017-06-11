<template>
  <section class="login flex-column">
    <HeaderNav title='登录' v-bind:hidden-icon="false"></HeaderNav>
    <div class="login-content">
      <h2 class="flex logo-title">手机号快捷登录</h2>
      <div class="flex form">
        <mu-text-field hintText="手机号" v-model="phone" type="number"/>
        <div class="yzm">
          <mu-text-field hintText="验证码" type="number" />
          <span @click="deadLine" :class="{active:hasDeadLine}"><i>{{deadLineTxt}}</i></span>
        </div>
        <mu-raised-button label="登录" fullWidth @click="login" class="btn-style"/>
      </div>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import HeaderNav from 'components/headernav';
  export default {
    data() {
      return {
        'phone': '',
        'deadLineTxt': '点击获取验证码',
        'hasDeadLine': false
      };
    },
    components: {
      'HeaderNav': HeaderNav
    },
    methods: {
      deadLine() {},
      login() {
        this.$router.back(-1);
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  .login {
    .login-content {
      flex: 1;
      background: $white;
      text-align:center;
      .logo-title {
        padding: 6rem 0 1rem 0;
        justify-content: center;
      }
      .form{
        flex-direction: column;
        .mu-text-field{
          width:90%;
        }
        .yzm {
          position: relative;
          width: 100%;
          margin: 1rem 0;
          span{
            position: absolute;
            bottom: 18px;
            right: -1px;
            padding: 9px 1rem 9px 1rem;
            color: $gray1;
            i{
              display: inline-block;
              width: 132px;
              padding-left: 16px;
              border-left: 1px solid $gray1;
              font-style: normal;
              text-align: center;
            }
            &.active{
              color: $red1;
            }
          }
        }
      }
    }
  }
</style>
