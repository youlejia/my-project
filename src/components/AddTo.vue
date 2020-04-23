<template>
  <div class="maintain">
    <div class="header-two">
        <div class="nav-bar__left lf"><i></i></div>
    </div>
    
    <van-swipe @change="onChange">
      <van-swipe-item><img src="../assets/image/addto.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/addto.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/addto.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="../assets/image/addto.png" alt=""></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
          
        </div>
      </template>
    </van-swipe>
    <div class="maintain-m">
      <p class="f18 mt20">油乐嘉植物燃油添加剂一瓶</p>
      <p style="color:#999999">购买即可享受折扣保养套餐</p>
      <div class="label mt20 f14">
        <span class="f18 c-ff5000">￥99.00</span>
        <span class="fr">库存：996<span class="ml5">已售：78</span></span>
      </div>
      
    </div>
    <!-- vip -->

    <!-- <div class="maintain-m vip">
      <p class="f18 mt20">油乐嘉植物燃油添加剂一箱</p>
      <p style="color:#999999">购买即可享受折扣保养套餐及7折加油卡权限</p>
      <div class="label mt20 f14">
        <span class="f18 c-ff5000">￥1314.00</span>
        <span class="fr">库存：996<span class="ml5">已售：78</span></span>
      </div>
      
    </div> -->

    <div>
      <div class="title-s" style="width: 90%;margin:20px auto;">
          <span class="fl f17 fb"><i class="line"></i>商品详情</span>
      </div>
      <div>
        <img src="../assets/image/addto.png" alt="">
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
        
        
    }
      
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    
    
  },
  

}
</script>

<style>


</style>
