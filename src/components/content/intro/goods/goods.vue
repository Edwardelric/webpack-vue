<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <div class="text">
            <span v-show="item.type>0" :class="classMap[item.type]"></span>
            {{item.name}}
          </div>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" class="food-list">
          <h1 class="foods-title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span>月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span>RMB{{food.price}}</span>
                  <span v-show="food.oldPrice"></span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        classMap: ['decrease', 'discount', 'guarantee', 'decrease', 'discount']
      };
    },
    created() {
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        this.goods = response.data;
      });
    }
  };
</script>

<style lang="scss" scoped>
  @import 'src/static/styles/helper/_mixin';
  @import 'src/static/styles/content/goods';
</style>
