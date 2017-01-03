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
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.data.name}}</h1>
            <star :score="seller.data.score"></star>
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
        typeList: ['decrease', 'disaccount', 'guarentee'],
        detailShow: true
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
  .title{
    position:relative;
    overflow:hidden;
    padding:10px 0;
    background:rgba(0,0,0,0.2);
    .brand-img{
      width:70px;
      height:70px;
      padding-left:12px;
      img{
        width:100%;
        height:100%;
      }
    }
    .description{
      padding-left:10px;
      h4{
        font-size:16px;
        .brand{
          display:inline-block;
          width:40px;
          height:20px;
          @include bgUrl('common/brand.png');
          vertical-align:middle;
        }
      }
      p{
        padding:8px 0;
      }
      .decrease{
        @include bgUrl('common/decrease.png');
      }
      .discount{
        @include bgUrl('common/discount.png');
      }
      .guarantee{
        @include bgUrl('common/guarantee.png');
      }
      .seller-type{
        display:inline-block;
        width:20px;
        height:20px;
        vertical-align:middle;
      }
    }
    .add-button{
      float:right;
      margin-top:40px;
      margin-right:12px;
      padding:4px 2px;
      background:rgba(255,255,255,0.8);
      border-radius:4px;
      cursor:pointer;
    }
    .background{
      position:absolute;
      top:0;
      left:0;
      z-index:-1;
      width:100%;
      height:100%;
      filter:blur(3px);
    }
    .detail{
      position:fixed;
      top:0;
      left:0;
      z-index:100;
      width:100%;
      height:100%;
      overflow:auto;
      background:rgba(7,17,27,0.8);
      .detail-wrapper{
        width:100%;
        height:auto;
        min-height:100%;
        .detail-main{
          margin-top:64px;
          padding-bottom:64px;
          .name{
            line-height:16px;
            text-align:center;
            font-size:16px;
            font-weight:bolder;
            text-align:center;
            color:$white;
          }
        }
      }
      .detail-close{
        position:relative;
        clear:both;
        width:100%;
        height:64px;
        margin-top:-64px;
        color:$white;
        line-height:30px;
        text-align:center;
        .iconfont{
          font-size:20px;
        }
      }
    }
  }
  .marguee{
    width:100%;
    overflow:hidden;
    padding:4px 0;
    background:rgba(0,0,0,0.4);
    text-overflow:ellipsis;
    white-space:nowrap;
    text-indent:10px;
    span{
      display:inline-block;
      width:40px;
      height:16px;
      @include bgUrl('common/bulletin.png');
      vertical-align:middle;
    }
  }
</style>
