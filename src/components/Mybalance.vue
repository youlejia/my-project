<template>
	<div class="mybalance">
		<div class="ishead">
			<img :src="background_image" />
			<div class="yu_e">账户余额（元）</div>
			<div class="yu_e_s">{{userList.balance}}</div>
			<div class="mx" @click="Detailed">明细</div>
		</div>
		<div class="yu_e" v-if="isAtm==0">
			<div class="yu_e_cz">余额充值</div>
			<div class="yu_e_tx" @click="atm">余额提现</div>
		</div>
		<div class="yu_e" v-if="isAtm==1">
			<div class="yu_e_cz">余额提现</div>
			<div class="yu_e_tx" @click="recharge">余额充值</div>
		</div>
		<recharge v-if="isAtm==0"></recharge>
		<atm v-if="isAtm==1"></atm>
		<div class="wenti">如有问题请直接联系客服</div>
	</div>
</template>

<script>
	import atm from './Atm';
	import recharge from './Recharge';
	export default {
		data() {
			return {
				background_image: require('../assets/image/mingxi.png'),
				finished: false,
				loading: false,
				userList:{},
				list: [{
						id: 1,
						name: "余额充值",
						time: "2020.03.11 23:33",
						money: 304.68
					},
					{
						id: 2,
						name: "余额提现",
						time: "2020.03.10 23:03",
						money: 616.68
					},
					{
						id: 3,
						name: "余额充值",
						time: "2020.03.09 12:33",
						money: 500.00
					},
					{
						id: 4,
						name: "余额提现",
						time: "2020.03.08 13:33",
						money: 1000.00
					}
				],
				balance: 21070.00,
				noData: false,
				page: 1,
				pageSize: 10,
				isAtm:0
			}
		},
		components:{
	        atm,
	        recharge
		},
		mounted(){
			this.$axios.post('api/user').then(res=>{
				this.userList = res.data.user;
			})
			.catch( error=>{
		　　　　console.log(error);
		　　});
		},
		
		methods: {
			recharge(){
				this.isAtm=0
			},
			atm(){
				this.isAtm=1
			},
			Detailed(){
				this.$router.push('/DetailsOfBalance')
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
	@font-face {
		font-family: 'ps';
		src: url('../assets/font/PingFangSC.ttf');
	}
	
	@font-face {
		font-family: 'cp';
		src: url('../assets/font/ChaparralPro-Light.otf');
	}
	
	.mybalance {
		font-family: 'ps';
		padding-bottom: 50px; //看app页如设置的有,可以去掉
		.van-nav-bar__title {
			font-weight: 600;
			color: #333333;
		}
		.ishead {
			width: 96%;
			margin: 0 auto;
			margin-top: 15px;
			position: relative;
			background-repeat: no-repeat;
			background-size: cover;
			box-sizing: border-box;
			img {
				width: 100%;
				height: 165px;
			}
			.yu_e {
				position: absolute;
				left: 28px;
				top: 20px;
				font-size: 12px;
				color: #FFFFFF;
				font-weight: 600;
			}
			.yu_e_s {
				position: absolute;
				left: 28px;
				top: 64px;
				font-size: 40px;
				color: #FFFFFF;
				font-family: 'cp';
				font-weight: 600;
			}
			.mx {
				position: absolute;
				right: 28px;
				top: 20px;
				font-size: 12px;
				color: #FFFFFF;
			}
		}
		.sz_mx {
			width: 90%;
			margin: 0 auto;
			margin-top: 10px;
			/*height: 25px;*/
			font-size: 15px;
			padding: 10px 0;
			.mx {
				width: 60px;
				font-weight: 600;
				border-left: 4px solid #2E81F3;
				padding-left: 5px;
			}
		}
		.yu_e {
			width: 90%;
			margin: 0 auto;
			margin-top: 15px;
			.yu_e_cz {
				display: inline-block;
				margin-right: 12px;
				border-left: 4px solid #2E81F3;
				padding-left: 5px;
				color: #333333;
				font-weight: 600;
			}
			.yu_e_tx {
				display: inline-block;
				color: #999999;
			}
		}
		.wenti {
			margin-top: 12px;
			text-align: center;
			color: #666666;
			font-size: 12px;
		}
	}
</style>