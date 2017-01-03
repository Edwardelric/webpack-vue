<template>
  <div class="list-content" v-if="seller && seller.data">
    <div class="title">
      <div class="pull-left brand-img">
        <img :src="seller.data.avatar" />
      </div>
      <div class="pull-left description">
        <h4>
          <span class="brand"></span>
          {{seller.data.name}}
        </h4>
        <p class="name">{{seller.data.description}}/{{seller.data.deliveryTime}}分钟后送达</p>
        <div>
          <span :class="'seller-type '+typeList[seller.data.supports[0].type]"></span>
          {{seller.data.supports[0].description}}
        </div>
      </div>
      <p class="add-button" @click="detailShow=!detailShow">
        <span>{{seller.data.supports.length}}</span>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </p>
      <div class="background">
        <img :src="seller.data.avatar" width="100%" height="100%"/>
      </div>
      <div class="detail" v-show="detailShow" transition="expand">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.data.name}}</h1>
            <star :score="seller.data.score"></star>
            <div class="info-line">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul>
              <li v-for="item in seller.data.supports" class="info-list">
                <span :class="typeList[item.type]"></span>
                {{item.description}}
              </li>
            </ul>
            <div class="info-line">
              <div class="line"></div>
              <div class="text">商家内容</div>
              <div class="line"></div>
            </div>
            <p class="info-details">{{seller.data.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close" @click="detailShow = !detailShow">
          <i class="iconfont icon-tubiao06"></i>
        </div>
      </div>
    </div>
    <div class="marguee">
      <span></span>
      {{seller.data.bulletin}}
    </div>
    <div class="tab">
      <router-link to="/intro/goods">商品</router-link>
      <router-link to="/intro/ratings">评论</router-link>
      <router-link to="/intro/seller">商家</router-link>
    </div>
    <div class="sub-main">
      <router-view :seller="seller"></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import star from 'components/star/star';
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        typeList: ['decrease', 'discount', 'guarantee', 'decrease', 'discount'],
        detailShow: false
      };
    },
    methods: {},
    components: {
      star
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  @import 'src/static/styles/content/intro';
</style>
