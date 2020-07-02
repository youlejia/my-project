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
            <p slot="footer" style="text-align:left;margin-top:10px;">订单号：{{trade_no}}</p>
           </van-card>
        </div> 
        <div class="address mt20" v-if="this.$route.query.goodId == 6">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>收货地址</span>
            </div>
            <user-info :address="address" redirect="GoodsOrder" style="margin-bottom: 10px;"/>

        </div>
        <div class='order_sub mt20'>
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>订单信息提交</span>
            </div>
            
            <van-cell-group v-if="this.$route.query.goodId == 5">
               
                <van-field v-model="oilcard_name" label="姓名" input-align="right" placeholder="请填写姓名"/>
                <van-field v-model="oil_phone" label="手机号" input-align="right" placeholder="请填写手机号"/>
                <van-field v-model="oil_number" label="油卡卡号" input-align="right" placeholder="请填写油卡卡号" type="number"/>
            
            </van-cell-group>
            <van-cell-group v-else>
                <van-field v-model="remarks" label="备注" input-align="right" placeholder="请填写备注"/>
            </van-cell-group>
           
        </div>
        <div class='mt20'>
            <div class="title-s" style="margin-bottom:20px;">
                <span class="fl f17 fb"><i class="line"></i>支付方式</span>
            </div>
            <!-- <van-radio-group v-model="payWay" @change="onChange">
                <div v-for="(item, i) in gateways" :key="i" class="radioMore">
                    <van-radio v-if="item.name == '支付宝'" :name="item.key"><img src="../assets/image/zfb.png" alt=""></van-radio>
                    <van-radio v-else-if="item.key == 'balance'" :disabled="item.disabled" :name="item.key"> {{item.name}} <span class="pay_way_balance">￥{{ item.balance }}</span> </van-radio>
                   
                    <van-radio v-else :name="item.key"><img src="../assets/image/vxzf.png" alt=""></van-radio>
                </div>
                
            </van-radio-group> -->
            <pay-way :gateways="gateways" @payWayEvent="payWayEvent" />
            <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25" @click="paySubmit">提交支付</van-button>
            <p class="tc mt10">如有问题请直接联系客服</p>
        </div>
        <van-dialog v-model="showPop" title="" show-cancel-button @confirm="confirmFn">
            <van-field
                v-model="phone"
                name="手机号"
                placeholder="请输入手机号"
                readonly
            />
            <van-field
                v-model="number"
                name="验证码"
                placeholder="请输入验证码"
                
            >
                <template #button>
                    <span>|</span>
                    <van-button size="small" type="default" style="border: none;" @click="send">{{content}}</van-button>
                    
                </template>
            
            </van-field>
		</van-dialog>
    </div>
</template>

<script>
import payWay from "./pay/way";
import UserInfo from "./order/UserInfo";
export default { 
    components:{
        UserInfo:UserInfo,
        [payWay.name]: payWay,

    },
    
    data() {
        return {
            radioHorizontal:"1",
            payWay:'',
            oilcard_name:'',
            oil_phone:'',
            oil_number:'',
            remarks:'',
            dataList:[],
            gateways:[],
            goods:[],
            address: {},
            statuss:'',
            addressId:'',
            trade_no:'',
            phone:'',
            number:'',
            content: '发送验证码',
            totalTime: 60,
            canClick: true,
            showPop:false,
        }
        
        
    },
    mounted(){
        this.$axios.post('api/order/placeOrderEntity',this.$route.query).then(res => {
            this.dataList=res.data;
            this.gateways=res.data.gateways;
            this.goods=res.data.goods;
            this.balance = res.data.gateways[0].balance;
            this.statuss = res.data.goods[0].statuss;
            this.address = res.data.address ? res.data.address : {} 
            this.trade_no = res.data.trade_no
            this.phone = res.data.mobile;
            if(res.data.address){
                this.addressId = res.data.address.id
            }
            
        }).catch( error=>{
        　　console.log(error);
        });
    },
   
    methods: {
        toAddressAdd(){
            let query = this.$route.query
            query.redirect = this.redirect
            return {name: 'addressEdit', params: {addressId: -1}, query: query}
        },
        confirmFn(){
			if(this.phone && this.number){
				var params={
                    statuss:this.statuss,
                    goodId:this.$route.query.goodId,
                    goodsId:this.$route.query.goodsId,
                    price:this.$route.query.price,
                    num:1,
                    addressId:this.addressId,
                    remark:this.remarks,
                    trade_no:this.trade_no,
                    oilcard_name:this.oilcard_name,
                    oil_phone:this.oil_phone,
                    oil_number:this.oil_number,
                    type:this.payWay,
                    mobile:this.phone,
                    sms:this.number,
                }
				this.$axios.post('api/order/paySub',params).then(res => {
                    if (res.status != 200) return
                   
                        if(res.data.qrcode) {
                            this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
                        }else if (res.data.html) {
                            const div = document.createElement('div') 
                            div.innerHTML = res.data.html 
                            document.body.appendChild(div)
                            if (res.data.submitkey) {
                            document.forms[res.data.submitkey].submit()
                            }
                        } else {
                            this.$toast.success('支付完成');
                            setTimeout(() => {
                            this.$router.push({ name: "User"})
                            }, 500);
                        }

                    
                    
                }).catch( error=>{
                　　console.log(error);
                });
			}else{
				this.$toast('请输入手机号和验证码')
				
			}
		},
		
		send(){
            if(!(/^1[3456789]\d{9}$/.test(this.phone))){
                this.$toast('请输入正确的手机号格式');
                return false;
            }
            if (!this.canClick) return
            this.canClick = false
            this.content = '剩余'+ this.totalTime + '秒'
            let clock = window.setInterval(() => {
                this.totalTime--
                this.content = '剩余'+ this.totalTime + '秒'
                if (this.totalTime < 0) {
                    window.clearInterval(clock)
                    this.content = '重新发送验证码'
                    this.totalTime = 60
                    this.canClick = true
                }
            },1000);
            var params = { 
                mobile:this.phone,
            };
            this.$axios.post('api/sms',params).then( res=>{
           
            }).catch( error=>{
            　　console.log(error);
            });
        },
       
        paySubmit(){
            if(this.$route.query.goodId == 5){
                if(!(/^1[3456789]\d{9}$/.test(this.oil_phone)) || !this.oilcard_name || !this.oil_number){
                    this.$toast('请填写姓名、正确的手机号、卡号'); 
                }else if(this.payWay == 'balance'){
                    this.showPop = true;
                }else{
                   var params={
                    statuss:this.statuss,
                    goodId:this.$route.query.goodId,
                    goodsId:this.$route.query.goodsId,
                    price:this.$route.query.price,
                    num:1,
                    addressId:this.addressId,
                    remark:this.remarks,
                    trade_no:this.trade_no,
                    oilcard_name:this.oilcard_name,
                    oil_phone:this.oil_phone,
                    oil_number:this.oil_number,
                    type:this.payWay,
                    sms:this.number
                }
				this.$axios.post('api/order/paySub',params).then(res => {
                    if (res.status != 200) return

                        if(res.data.qrcode) {
                            this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
                        }else if (res.data.html) {
                            const div = document.createElement('div') 
                            div.innerHTML = res.data.html 
                            document.body.appendChild(div)
                            if (res.data.submitkey) {
                            document.forms[res.data.submitkey].submit()
                            }
                        } else {
                            this.$toast.success('支付完成');
                            setTimeout(() => {
                            this.$router.push({ name: "User"})
                            }, 500);
                        }

                    
                    
                }).catch( error=>{
                　　console.log(error);
                });
                }
            }else if(this.$route.query.goodId == 6){
                if(!this.addressId){
                     this.$toast('收货地址不能为空');
                }else{
                    if(this.payWay == 'balance'){
                        this.showPop = true; 
                    }else{
                        var params={
                            statuss:this.statuss,
                            goodId:this.$route.query.goodId,
                            goodsId:this.$route.query.goodsId,
                            price:this.$route.query.price,
                            num:1,
                            addressId:this.addressId,
                            remark:this.remarks,
                            trade_no:this.trade_no,
                            oilcard_name:this.oilcard_name,
                            oil_phone:this.oil_phone,
                            oil_number:this.oil_number,
                            type:this.payWay,
                            sms:this.number
                        }
                        this.$axios.post('api/order/paySub',params).then(res => {
                            if (res.status != 200) return
                            if(res.code == 22){
                                Toast(res.msg);
                                setTimeout(() => {
                                    this.$router.push('/certification')
                                }, 1000);
                            }else{
                                if(res.data.qrcode) {
                                    this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
                                }else if (res.data.html) {
                                    const div = document.createElement('div') 
                                    div.innerHTML = res.data.html 
                                    document.body.appendChild(div)
                                    if (res.data.submitkey) {
                                    document.forms[res.data.submitkey].submit()
                                    }
                                } else {
                                    this.$toast.success('支付完成');
                                    setTimeout(() => {
                                    this.$router.push({ name: "User"})
                                    }, 500);
                                }

                            }
                            
                        }).catch( error=>{
                        　　console.log(error);
                        });
                    }
                }
            }else{
                if(this.payWay == 'balance'){
                    this.showPop = true; 
                }else{
                    var params={
                        statuss:this.statuss,
                        goodId:this.$route.query.goodId,
                        goodsId:this.$route.query.goodsId,
                        price:this.$route.query.price,
                        num:1,
                        addressId:this.addressId,
                        remark:this.remarks,
                        trade_no:this.trade_no,
                        oilcard_name:this.oilcard_name,
                        oil_phone:this.oil_phone,
                        oil_number:this.oil_number,
                        type:this.payWay,
                        sms:this.number
                    }
                    this.$axios.post('api/order/paySub',params).then(res => {
                        if (res.status != 200) return
                       
                            if(res.data.qrcode) {
                                this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
                            }else if (res.data.html) {
                                const div = document.createElement('div') 
                                div.innerHTML = res.data.html 
                                document.body.appendChild(div)
                                if (res.data.submitkey) {
                                document.forms[res.data.submitkey].submit()
                                }
                            } else {
                                this.$toast.success('支付完成');
                                setTimeout(() => {
                                this.$router.push({ name: "User"})
                                }, 500);
                            }

                        
                        
                    }).catch( error=>{
                    　　console.log(error);
                    });
                }
            }
        
            
        },
        
            
        
        payWayEvent(value) {
            this.payWay = value
        },

        
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
    .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{
        border-top: none;
    }
    .address{
        padding:16px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        border-radius:12px;
    }
    
    
}

</style>
