<template>
  <div class="maintain">
    <div class="header-two">
        <div class="nav-bar__left lf"><i></i></div>
        <!-- <div class="nav-bar__right fr f16"><span>联系客服</span></div> -->
    </div>
    
    <van-swipe @change="onChange">
      <van-swipe-item><img src="../assets/image/timg.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/timg.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/timg.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/timg.png" alt=""></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
        </div>
      </template>
    </van-swipe>
    <div class="maintain-m">
      <p class="f18 mt20">VIP专享折扣-加油卡<span class="fr c-2e81f3 f12 mt5">VIP专享7折加油卡限购一次</span></p>
      <p style="color:#999999">购买之后提交油卡信息，稍后即可到账</p>
      <div class="label mt20 f14">
        <div class="line-through">原价：<span>¥2400</span></div><br>
        <div class="vip">
            <span>专享7折</span>
            <span style="background: #fff;color: #2E81F3;">¥1680.00</span>
        </div>
        <span class="fr mt10">库存：996<span class="ml5">已售：78</span></span>
      
      </div>
      
    </div>
    <div>
      <div class="title-s" style="width: 90%;margin:20px auto;">
          <span class="fl f17 fb"><i class="line"></i>商品详情</span>
      </div>
      <div>
        <img src="../assets/image/timg.png" alt="">
      </div>
    </div>
    <div class="maintain-f">
      <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" @click="showBuy">立刻购买</van-button>
    </div>
    <van-popup v-model="show">
        <div class="card-t">
            <img src="../assets/image/tc_bg.jpg" alt="">
            <div style="width: 60%;margin-left:20%;">
                <p class="f14 mt25 mb10">VIP专享折扣-加油卡</p>
                <p class="c-2e81f3" >一位用户仅可购买一次</p>
                <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" @click="buyOK" style="margin-top: 35px;">确认</van-button>
            </div>
        </div>
    </van-popup>
    
 
      
   
    
    
      
  </div>
</template>

<script>

export default {
 
  data() {
    return {
        current: 0,
        show: false,
    }
      
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    showBuy() {
        this.show = true;
    },
    buyOK(){
        this.show = false;
    }
  },
  

}
</script>

<style>

.maintain-m .vip{
    width:142px;
    height:24px;
    line-height: 24px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(46,129,243,1);
    border-radius:4px;
    display: inline-block;
    margin-top: 8px;
}
.maintain-m .vip span{
    width:71px;
    height:24px;
    display: block;
    background:linear-gradient(180deg,rgba(76,177,255,1) 0%,rgba(46,129,243,1) 100%);
    text-align: center;
    color: #fff;
    float: left;
}
.card-t{
    width:268px;
    height:288px;
    background:rgba(255,255,255,1);
    border-radius:8px;
    text-align: center;
}
</style>
