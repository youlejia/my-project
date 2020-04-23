<template>
	<div class="atm">
		<div class="cs">
			<van-row type="flex" justify="center">
				<van-col span="12">
					<div class="cz_a" @click="choicea" :class="isChoice==0?'cz_b':'cz_a'">
						<span class="name">提现500元</span>
					</div>
				</van-col>
				<van-col span="12">
					<div class="cz_a" @click="choiceb" :class="isChoice==1?'cz_b':'cz_a'">
						<span class="name">提现1000元</span>
					</div>
				</van-col>
			</van-row>
			<van-row type="flex" justify="center">
				<van-col span="12">
					<div class="cz_a" @click="choicec" :class="isChoice==2?'cz_b':'cz_a'">
						<span class="name">提现2000元</span>
					</div>
				</van-col>
				<van-col span="12">
					<div class="cz_a" @click="choiced" :class="isChoice==3?'cz_b':'cz_a'">
						<span class="name">自定义金额</span>
					</div>
				</van-col>
			</van-row>
		</div>
		<div class="card">
			<img src="../assets/image/card.png" />
			<div class="card_yw">EuroAd</div>
			<div class="card_qh">更换银行卡</div>
			<div class="card_cardNo">4894 4984 4984 3728</div>
			<div class="card_name">白**</div>
			<div class="card_cardName">中国邮政储蓄</div>
		</div>
		<div class="tc_login">
			<van-button size="large" @click="toAtm">确定提现</van-button>
		</div>
		<van-popup class="popup" v-model="show">
			<img class="imgs" src="../assets/image/atm_tk.png"/>
			<div class="is_tx">余额提现已成功</div>
			<div class="is_kf">如有任何问题请联系客服</div>
			<div class="but_qd" @click="show=false">确定</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		name:"atm",
		data(){
			return{
				isChoice: 0,
				show:false
			}
		},
		methods: {
			choicea() {
				this.isChoice = 0;
			},
			choiceb() {
				this.isChoice = 1;
			},
			choicec() {
				this.isChoice = 2;
			},
			choiced() {
				this.isChoice = 3;
			},
			toAtm(){
				this.show=true;
			}
		},
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
			padding: 0 8px;
			.van-col {
				font-weight: bold;
				.cz_a {
					text-align: center;
					line-height: 80px;
					width: 88%;
					margin: 0 auto;
					margin-top: 20px;
					box-shadow: 3px 3px 6px #F3F3F3;
					border-radius: 7px;
				}
				.cz_b {
					text-align: center;
					line-height: 80px;
					width: 88%;
					margin: 0 auto;
					margin-top: 20px;
					border: 1px solid #2E81F3;
					box-shadow: 0 3px 6px #CCEBFF;
					background-color: rgba(76, 177, 255, 0.1);
					color: #2E81F3;
				}
			}
		}
		.zf_fs {
			width: 90%;
			margin: 0 auto;
			margin-top: 25px;
			.zf_fs_cz {
				display: inline-block;
				margin-right: 12px;
				border-left: 4px solid #2E81F3;
				padding-left: 5px;
				color: #333333;
				font-weight: 600;
			}
		}
		.radio-group {
			.xz_zf {
				margin-top: 15px;
				display: inline-block;
				width: 120px;
				img {
					margin-left: -20px;
				}
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
			margin-top: 18px;
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