<template>
  <div class="maintain">
    <div class="header-two">
        <div class="nav-bar_left lf" @click="goback()"><van-icon name="arrow-left" size='18px' color="#fff" /></div>
    </div>
    
    
    <van-swipe @change="onChange">
      <van-swipe-item><img :src="listGood.pic_url" alt=""></van-swipe-item>
      <van-swipe-item><img :src="listGood.pic_url" alt=""></van-swipe-item>
      <van-swipe-item><img :src="listGood.pic_url" alt=""></van-swipe-item>
      <van-swipe-item><img :src="listGood.pic_url" alt=""></van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/4
          
        </div>
      </template>
    </van-swipe>
    <div class="maintain-m">
      <p class="f18 mt20">{{listGood.name}}</p>
      <p style="color:#999999">{{listGood.sell_point}}</p>
      <div class="label mt20 f14">
        <div v-if="this.$route.params.id == 6">
          <span class="f18 c-ff5000" v-for="oitem in speci" :key="oitem.value">￥{{oitem.price}}.00</span>
          <span class="fr">库存：{{listGood.stock}}<span class="ml5">已售：{{listGood.sold_quantity}}</span></span>
        </div>
        <div v-if="this.$route.params.id == 4">
          <p>商品规格选择</p>
          <ul class="mt10">
              <li v-for="(oitem,index) in speci" :key="index" :class="{active:istrue==index}" @click="toolEventSlot(index)">
                {{oitem.title}}
                <input type="text" v-model='price' hidden>
              </li>
              
          </ul>
          <div class="clear"></div>
          <span>共计：<span class="f18 c-ff5000">{{price}}</span></span>
          <span class="fr">库存：{{listGood.stock}}<span class="ml5">已售：{{listGood.sold_quantity}}</span></span>
          <p>当前身份为<span class="c-ff5000"></span>，立减50元现金</p>
        </div>
        <div v-if="this.$route.params.id == 5" >
          <div v-for="oitem in speci" :key="oitem.value"> 
            <div class="line-through">原价：<span>¥{{oitem.pricess}}.00</span></div><br>
            <div class="vip">
                <span>专享7折</span>
                <span style="background: #fff;color: #2E81F3;">¥{{oitem.price}}.00</span>
            </div>
          </div>
          
          <span class="fr mt10">库存：{{listGood.stock}}<span class="ml5">已售：{{listGood.sold_quantity}}</span></span>
        </div>
        
        
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
        <img :src="listGood.item_imgs" alt="">
      </div>
    </div>
    <div class="maintain-f">
      <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" @click="goBuy">立刻购买</van-button>
    </div>

  </div>
</template>

<script>

export default {
 
  data() {
    return {
        current: 0,
        istrue: 0,
        id:0,
        goodId:this.$route.params.id,
        listGood:[],
        speci:[],
        price:'149',
    }
      
  },
  mounted(){
    this.getAdd()
  },
  methods: {
    getAdd(){
      var params = { 
        goodId:this.goodId
      };
      this.$axios.post('api/goodDetail',params).then((res) => {
        this.dataList = res.data.data;
        this.listGood=res.data.data.good;
        this.speci=res.data.data.speci;
     
      }).catch( error=>{
      　　console.log(error);
      });
    },
    toolEventSlot(index){
      this.istrue=index;
      console.log(this.istrue)
      if(this.istrue == 0 ){
        this.price='99'
        
      }else{
        this.price='49'
      }
    },
    goBuy(){
      if(this.$route.params.id == 4 && this.dataList.user_level >= 3){
        alert(2)
      }else{
         alert('请升级为vip才能购买')
      }

    },
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
.maintain-m .label li.active{
  background:linear-gradient(90deg,rgba(76,177,255,1) 0%,rgba(46,129,243,1) 100%);
  color: #fff;
}
.label li:nth-child(3){
  margin-right:0;
}
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
