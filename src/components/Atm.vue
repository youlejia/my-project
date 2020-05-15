<template>
	<div class="atm">
		<div class="cs mt15">
			<div class="cz_a" @click="choicea(index)" v-for="(item,index) in list" :key="index" :class="{active: price == item.nama }" >
				<span class="nama">充{{item.nama}}元</span>
			</div>
			<van-field v-model="price" type="number" label="自定义金额:" placeholder="请输入充值金额" />
		</div>
		<div class="card" v-if="cards">
			<img src="../assets/image/card.png" />
			<div class="card_yw">EuroAd</div>
			<div class="card_qh" @click="AtmCard">更换银行卡</div>
			<div class="card_cardNo">{{cards.card_no}}</div>
			<div class="card_name">{{cards.real_name}}</div>
			<div class="card_cardName">{{cards.bank}}</div>
		</div>
		<div class="card" v-else >
			<img src="../assets/image/card.png" />
			<div class="card_yw">EuroAd</div>
			<div class="card_qh" @click="AtmCard">添加银行卡</div>
		</div>
		<div class="tc_login">
			<van-button size="large" @click="toAtm">确定提现</van-button>
		</div>
		
		<van-popup class="popup" v-model="show">
			<img class="imgs" src="../assets/image/atm_tk.png"/>
			<div class="is_tx">余额提现已成功</div>
			<div class="is_kf">如有任何问题请联系客服</div>
			<div class="but_qd" @click="thisOk">确定</div>
		</van-popup>
		<van-dialog v-model="showPop" title="" show-cancel-button @confirm="confirmFn">
				<van-field
                    v-model="phone"
                    name="手机号"
                    placeholder="请输入手机号"
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
	export default {
		name:"atm",
		data(){
			return{
				currentIndex:0,
				price:'500',
				list:[
					{
						nama:500,
					},
					{
						nama:1000,
					},
					{
						nama:2000,
					},
					{
						nama:5000

					}
				],
				cards:[],
				show:false,
				showPop:false,
				phone:'',
				number:'',
				content: '发送验证码',
				totalTime: 60,
				canClick: true,
			}
		},
	created() {
		this.initData();
	},
	methods: {
		initData(){
			this.$axios.post('api/atm/placeAtmEntity').then(res => {
				this.cards=res.data.cards
			}).catch( error=>{
			　　console.log(error);
			});
		},
		toAtm(){
			
			if(!this.cards){
				this.$toast('请先添加一个银行卡')
			}else{
				this.showPop = true
			}
			
		},
		confirmFn(){
			if(this.phone && this.number){
				var param={
					price:this.price,
					cardId: this.cards.id,
					sms:this.number
				}
				this.$axios.post('api/atm/sub',param).then(res => {
					if (res.status != 200) return
					this.showPop = false;
					setTimeout(() => {
						this.show=true;
					}, 1000);
					
				}).catch( error=>{
					console.log(error)
				});
			}else{
				this.$toast('请输入手机号和验证码')
				
			}
		},
		
		send(){
            if(!(/^1[345789]\d{9}$/.test(this.phone))){
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
                console.log(res)
            }).catch( error=>{
            　　console.log(error);
            });
        },
		thisOk(){
			this.$router.push({ name: "User"});
		},
		choicea(index) {
			this.currentIndex = index
			this.price = this.list[index].nama
			console.log(this.price)
		},
		AtmCard(){
			this.$router.push({name: 'MyBankCard', query: {redirect: 'atm'}})
		},
		
		
	}
}
</script>

<style lang="less" scoped="scoped">
	@font-face {
		font-family: 'ps';
		src: url('../assets/font/PingFangSC.ttf');
	}
	.atm {
		font-family: 'ps';
		.cs {
			.cz_a {
				text-align: center;
				line-height: 80px;
				width: 45%;
				float: left;
				margin-left: 3%;
				margin-bottom:10px;
				border: 1px solid #F3F3F3;
				box-shadow: 3px 3px 6px #F3F3F3;
				border-radius: 7px;
			}
			.active{
				border: 1px solid #2E81F3;
				box-shadow: 0 3px 6px #CCEBFF;
				background-color: rgba(76, 177, 255, 0.1);
				
			}
		}
		
		.tc_login {
			width: 84%;
			margin: 0 auto;
			margin-top: 30px;
			.van-button {
				background-color: #4788FF;
				color: #fff;
				font-size: 13px;
				border-radius: 22px;
				height: 44px;
				line-height: 44px;
				background: linear-gradient(left, #4CB1FF, #2E81F3);
			}
		}
		.card {
			position: relative;
			width: 94%;
			margin: 0 auto;
			color: #FFFFFF;
			img {
				width: 100%;
				height: 168px;
			}
			.card_yw {
				position: absolute;
				top: 22px;
				left: 30px;
				font-size: 16px;
			}
			.card_qh {
				position: absolute;
				top: 22px;
				right: 30px;
				font-size: 11px;
			}
			.card_cardNo {
				position: absolute;
				top: 62px;
				left: 30px;
				font-size: 20px;
			}
			.card_name {
				position: absolute;
				top: 102px;
				left: 30px;
				font-size: 10px;
			}
			.card_cardName {
				position: absolute;
				top: 102px;
				left: 110px;
				font-size: 10px;
			}
		}
		.popup{
			width: 70%;
			border-radius: 8px;
			text-align: center;
			.imgs{
				width: 100%;
				border-radius: 8px 8px 0 0;
			}
			.is_tx{
				line-height: 30px;
				font-weight: 600;
				font-size: 14px;
				color: #333333;
				margin-top: 20px;
			}
			.is_kf{
				font-size: 11px;
				color: #2E81F3;
				line-height: 20px;
			}
			.but_qd{
				width: 50%;
				height: 38px;
				line-height: 38px;
				background: linear-gradient(left, #2E81F3, #4CB1FF);
				border-radius: 19px;
				margin: 30px auto;
				font-size: 14px;
				color: #FFFFFF;
			}
		}
	}
</style>