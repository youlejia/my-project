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
          <p>商品规格选择</p>
          <ul class="mt10">
              <li v-for="(oitem,index) in speci" :key="index" :class="{active:istrue==index}" @click="toolEventSlot(index)">
                {{oitem.title}}
                <input type="text" v-model='price' hidden>
                <input type="text" v-model='goodsId' hidden>
              </li>
              
          </ul>
          <div class="clear"></div>
          <span>共计：<span class="f18 c-ff5000">{{price}}</span></span>

          <span class="fr">库存：{{listGood.stock}}<span class="ml5">已售：{{listGood.sold_quantity}}</span></span>
        </div>
        <div v-if="this.$route.params.id == 4">
          <p>商品规格选择</p>
          <ul class="mt10">

              <li 
              v-for="(oitem,index) in speci" 
              :key="index" 
              :class="{active:istrue==index}" 
              @click="toolEventSlot(index)"
              >
                {{oitem.title}}
                <input type="text" v-model='price' hidden>
                <input type="text" v-model='goodsId' hidden>
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
        istrue:0,
        id:0,
        goodId:this.$route.params.id,
        listGood:[],
        speci:[],
        price:'',
        goodsId:'',
        userId:'',
        user_level:'',
        num:1
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
        this.price = res.data.data.speci[0].price
        this.goodsId = res.data.data.speci[0].id
        this.userId = res.data.data.id
        this.user_level = res.data.data.user_level
      }).catch( error=>{
      　　console.log(error);
      });
    },
    toolEventSlot(index){
      this.istrue=index;
      this.goodsId = this.speci[index].id;
      this.price = this.speci[index].price;
      
    },
    goBuy(goodId){
      if(this.user_level <= 2 && this.$route.params.id == 5){
        this.$toast('用户等级不足无法购买！')
      }else{
        var params={
          goodId:this.goodId,
          price:this.price,
          goodsId:this.goodsId,
          num:this.num
        }
        this.$axios.post('api/order/placeOrderEntity',params).then((res) => {
          console.log(res)
          if(res.data.code == 22){
            this.$router.push({ name: "certification",query:{id:this.userId}});
          }else if(res.data.code == 11){
            this.$toast(res.data.msg)
          }else{
            this.$router.push({ name: "GoodsOrder", query:{goodId:this.goodId,price:this.price,goodsId:this.goodsId,num:this.num}});
          }
        }).catch( error=>{
        　　console.log(error);
        });
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
  /* width:31%; */
  margin-right: 3%;
  padding: 0px 7px;
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
