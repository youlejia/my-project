<template>
    <div class="OilCardOrder all">
        <div class="oil-card">
            <van-card
            :price="price"
            desc="购买之后提交油卡信息，稍后即可到账"
            title="VIP专享折扣-加油卡"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
            <p class='ml15'>订单号：<span>{{ordernumber}}</span></p>

        </div>
        <div class="mt15">
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>订单信息提交</span>
            </div>
            <van-cell-group>
                <van-cell title="姓名" value="刘瑞琪" />
                <van-cell title="手机号" value="16515153689" />
                <van-cell title="油卡卡号" value="1654 6416 9884 7987" />
            </van-cell-group>
        </div>
        <div class="mt15">
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>支付方式</span>
            </div>
            <van-radio-group v-model="radioHorizontal" direction="horizontal">
                <van-radio name="1"><img src="../assets/image/zfb.png" alt=""></van-radio>
                <van-radio name="2"><img src="../assets/image/vxzf.png" alt=""></van-radio><br>
                <van-radio name="3" class="mt15 f14">账户余额（¥<span>{{balance}}</span>）</van-radio>
            </van-radio-group>
            <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25">立即开通</van-button>
            <p class="tc mt10">只有VIP用户拥有升级代理权限</p>
        </div>
    </div>
</template>

<script>

export default {
 
  data() {
    return {
        radioHorizontal: '1',
        price:"2400.00",
        ordernumber:"46431534341157",
        balance:"26730.00"
    }
      
  },
  methods: {
    
    
    
  },
  

}
</script>

<style lang="less" scoped="scoped">
.OilCardOrder{
    .oil-card{
        background: #fff;
        height:138px;
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        opacity:1;
        border-radius:8px;
        margin-top: 20px;    
        .van-card{
            background: #fff;
            
        }
    }
    .van-cell__value{
        font-size: 12px;
    }


}


</style>
