<template>
    <div class="goodOrder all">
        <div class="mt20">
           <van-card
            price="1222.00"
            desc="购买即可享受折扣保养套餐及7折加油卡权限"
            title="油乐嘉植物燃油添加剂一箱"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            >
            <p slot="footer" style="text-align:left;margin-top:10px;">订单号：46431534341157</p>
           </van-card>
        </div> 
        <div class="address mt20">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i></i>收货地址</span>
            </div>
            <van-cell-group>
                <van-cell center is-link to="index" label="郑州市金水区燕庄曼哈顿F区18号楼2304">
                    <p slot="title">刘瑞琪<i style="margin:0 5px;">|</i><span class="f12">16515153689</span></p>
                </van-cell>
            </van-cell-group>

        </div>
        <div class='order_sub mt20'>
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>订单信息提交</span>
            </div>
            <van-cell-group>
                <van-cell title="备注" value="内容" />
            </van-cell-group>
        </div>
        <div class='mt20'>
            <div class="title-s" style="margin-bottom:20px;">
                <span class="fl f17 fb"><i class="line"></i>支付方式</span>
            </div>
            <van-radio-group v-model="radioHorizontal" direction="horizontal">
                <van-radio name="1"><img src="../assets/image/zfb.png" alt=""></van-radio>
                <van-radio name="2"><img src="../assets/image/vxzf.png" alt=""></van-radio><br>
                <van-radio name="3" class="mt15 f14">账户余额（¥<span>26730.00</span>）</van-radio>
            </van-radio-group>
            <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25">提交并支付</van-button>
            <p class="tc mt10">如有问题请直接联系客服</p>
        </div>
    </div>
</template>

<script>
export default {
  
  data() {
    return {
        
    }
      
  },
  methods: {
    
    
  },
  

}
</script>

<style lang="less" scoped="scoped">
.goodOrder{

    .van-card{
        background: rgba(255,255,255,1);
        box-shadow: 0px 3px 6px rgba(46,129,243,0.32);
        border-radius: 8px;
        padding: 16px;
    }
    .van-card__price{
        color: #FF5000;
    }
    .van-card__title{
        font-size: 14px;
    }
    .van-card__desc{
        color: #999999;
        margin-top: 5px
    }
    .address{
        padding:16px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        border-radius:12px;
    }
    .van-cell{
        padding: 10px 0;
    }
}

</style>
