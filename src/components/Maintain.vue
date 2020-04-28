<template>
  <div class="maintain">
    <div class="header-two">
        <div class="nav-bar_left lf" @click="goback()"><van-icon name="arrow-left" size='18px' color="#fff" /></div>
        <div class="nav-bar_right fr f16"><span>联系客服</span></div>
    </div>
    
    <van-swipe @change="onChange">
      <van-swipe-item><img src="../assets/image/maintain.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/maintain.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/maintain.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/maintain.png" alt=""></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
          
        </div>
      </template>
    </van-swipe>
    <div class="maintain-m">
      <p class="f18 mt20"><span class="fr c-2e81f3 f12 mt5">VIP特权立减50元现金</span></p>
      <p style="color:#999999">购买之后在我的卡券中使用</p>
      <div class="label mt20 f14">
        <p>商品规格选择</p>
        <ul class="mt10">
            <li v-for="(oItem,index) in ProductItem" :key='index' @click="specificationBtn(index)">{{oItem.price}}保养券</li>
        </ul>
        <div class="clear"></div>
        <span>共计：<span class="f18 c-ff5000">￥149.00</span></span>
        <span class="fr">库存：996<span class="ml5">已售：78</span></span>
        <p>当前身份为<span class="c-ff5000">{{identity}}</span>，立减50元现金</p>
      </div>
      
    </div>
    <div>
      <div class="title-s" style="width: 90%;margin:20px auto;">
          <span class="fl f17 fb"><i class="line"></i>商品详情</span>
      </div>
      <div>
        <img src="../assets/image/maintain.png" alt="">
      </div>
    </div>
    <div class="maintain-f">
      <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)">立刻购买</van-button>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      current: 0,
      ProductItem:[
        {
          "price": "149",
          "stock": "237",
          "sold": "100"
        },
        {
          "price": "169",
          "stock": "187",
          "sold": "10"
        },
        {
          "price": "189",
          "stock": "100",
          "sold": "10"
        },
        {
          "price": "209",
          "stock": "1000",
          "sold": "10"
        },
      ],
      identity:"VIP",
      list:[]
    }   
  },
  mounted(){
    this.newDa()
  },
  methods: {
   
    onChange(index) {
      this.current = index;
    },
    goback(){
     this.$router.go(-1);
    }
    
  },
  

}
</script>

<style>
.maintain-m .label li{
  width:31%;
  margin-right: 3%;
  height:26px;
  margin-bottom: 10px;
  line-height: 26px;
  /* background:linear-gradient(90deg,rgba(76,177,255,1) 0%,rgba(46,129,243,1) 100%); */
  background:rgba(241,241,241,1);
  float: left;
  border-radius:8px;
  /* color: #fff; */
  text-align: center;
}
.label li:nth-child(3){
  margin-right:0;
}

</style>
