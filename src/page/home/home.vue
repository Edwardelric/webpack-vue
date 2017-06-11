<template>
  <section class="home flex-column">
    <HeaderComponent></HeaderComponent>
    <Swiper></Swiper>
    <ul class="flex quick-menu">
      <li v-for="(item, index) in quickMenu" :key="index">
        <mu-icon value="android"/>
        <p>{{item.menuText}}</p>
      </li>
    </ul>
    <section class="list overflow-scroll" @touchstart="touchStart" @touchmove = "touchMove" @touchend= "touchEnd">
      <section class="dropload-up" ref="droploadUp" :class="{active: !touchData.swipeY}">
        <img src="../../static/images/common/loading.gif"/>
        <p ref="droploadupText">松开加载</p>
      </section>
      <section v-for="(item, index) in [1,2,3,4,5,6,7,8,9,10]" :key="index" class="flex">
        <article>
          <h2>2017重庆车展:斯威X3售价5.99 - 8.29万元</h2>
          <p>头条 <span>28评论</span></p>
        </article>
        <article>
          <img src="../../static/images/common/1.jpg"/>
        </article>
      </section>
    </section>
  </section>
</template>

<script type="text/ecmascript-6">
  import HeaderComponent from 'components/headercomponent';
  import Swiper from 'components/swiper';
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        touchData: {
          startX: 0,
          startY: 0,
          swipeX: false,
          swipeY: false
        }
      };
    },
    components: {
      'HeaderComponent': HeaderComponent,
      'Swiper': Swiper
    },
    mounted() {
      this.$http({
        url: this.api.base + this.api.comments,
        method: 'get'
      }).then((response) => {
        console.log(response);
      });
    },
    computed: mapGetters({
      quickMenu: 'getQuickMenu'
    }),
    methods: {
      touchStart(event) {
        let touch = event.targetTouches[0];
        this.touchData.startX = touch.pageX;
        this.touchData.startY = touch.pageY;
        this.touchData.swipeX = true;
        this.touchData.swipeY = true;
        this.$refs.droploadupText.innerHTML = '松开加载';
      },
      touchMove(event) {
        let touch = event.targetTouches[0];
        let curX = touch.pageX;
        let curY = touch.pageY;
        let oldX = this.touchData.startX;
        let oldY = this.touchData.startY;
        if (this.touchData.swipeY && window.Math.abs(oldY - curY) - window.Math.abs(oldX - curX) > 0) {
          if (curY - oldY > 10) {
            console.log(curY - oldY - 44);
            this.$refs.droploadUp.style.height = (curY - oldY - 44) + 'px';
          } else {

          }
          event.stopPropagation();
        }
      },
      touchEnd(event) {
        this.touchData.swipeY = false;
        this.$refs.droploadUp.style.height = 0;
        this.$refs.droploadupText.innerHTML = '加载中';
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  .home {
    .quick-menu {
      padding: 10px;
      background: $white;
      font-size: 12px;
      i {
        font-size: 20px;
      }
      p {
        padding-top: 8px;
      }
    }
    .list {
      height: calc(100vh - 260px);
      margin-top: 6px;
      padding-bottom: 0;
      background: $white;
      section.flex {
        align-items: stretch;
        padding: 10px;
        border-bottom: 1px solid $gray1;
        article:nth-of-type(1) {
          flex: 1;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          text-align:left;
          h2 {
            line-height: 20px;
          }
        }
        article:nth-of-type(2) {
          flex: 0 0 112px;
          img {
            height: 84px;
          }
        }
      }
    }
  }
</style>
