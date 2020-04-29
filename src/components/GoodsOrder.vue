<template>
    <div class="goodOrder all">
        <div class="mt20">
           <van-card 
            v-for="item in goods"
            :key="item.value"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
            >
            <p slot="price">¥<span class="f16">{{item.price}}.00</span></p>
            <p slot="footer" style="text-align:left;margin-top:10px;">订单号：{{dataList.trade_no}}</p>
           </van-card>
        </div> 
        <div class="address mt20" v-if="this.$route.query.goodId == 6">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i></i>收货地址</span>
            </div>
            <div v-if="dataList.address == null">
                <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25">新增地址</van-button>
            </div>
            <van-cell-group v-else>
                <van-cell center is-link to="index" label="sdff">
                    <p slot="title">asdsd<i style="margin:0 5px;">|</i><span class="f12">dd</span></p>
                </van-cell>
            </van-cell-group>

        </div>
        <div class='order_sub mt20'>
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>订单信息提交</span>
            </div>
            <van-cell-group v-if="this.$route.query.goodId == 6">
                <van-field v-model="remarks" label="备注" input-align="right"/>
            </van-cell-group>
            <van-cell-group v-else>
                <van-cell title="姓名" value="刘瑞琪" />
                <van-cell title="手机号" value="16515153689" />
                <van-cell title="油卡卡号" value="1654 6416 9884 7987" />
            </van-cell-group>
        </div>
        <div class='mt20'>
            <div class="title-s" style="margin-bottom:20px;">
                <span class="fl f17 fb"><i class="line"></i>支付方式</span>
            </div>
            <van-radio-group v-model="payWay" @change="onChange">
                <div v-for="(item, i) in gateways" :key="i" class="radioMore">
                    <van-radio v-if="item.key == 'balance'" name="1" :value='item.key'> {{item.name}} <span class="pay_way_balance">￥{{ item.balance }}</span> </van-radio>
                    <van-radio v-else-if="item.key == 'wechat_weixin'" name="2" :value='item.key'><img src="../assets/image/vxzf.png" alt=""></van-radio>
                    <van-radio v-else name="3" :value='item.key'><img src="../assets/image/zfb.png" alt=""></van-radio>
                </div>
                
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
            radioHorizontal:"1",
            payWay:'1',
            remarks:'vvv',
            dataList:[],
            gateways:[],
            goods:[],
        }
        
        
    },
    mounted(){
        
        this.$axios.post('api/order/placeOrderEntity',this.$route.query).then(res => {
            this.dataList=res.data;
            this.gateways=res.data.gateways;
            this.goods=res.data.goods;
            this.balance = res.data.gateways[0].balance;
            console.log(res)
      
        }).catch( error=>{
        　　console.log(error);
        });
    },
    methods: {
        onChange(value) {
      this.$emit("payWayEvent", value)
    }
        
    },
    filters: {
        numFilter(value) {
            let realVal = ''
            if(value) {
                realVal = parseFloat(value).toFixed(2)
            }
            return realVal
        }
    }
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
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
        border-top: none;
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
    .radioMore{
        .van-radio{
            width: 50%;
            float: left;
            margin-bottom: 15px;
        }
    }
}

</style>
