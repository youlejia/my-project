<template>
	<div class="recharge">
		<div class="cs">
			<van-row type="flex" justify="center">
				<van-col span="12">
					<div class="cz_a" @click="choicea" :class="isChoice==0?'cz_b':'cz_a'">
						<span class="nama">充500元</span>
					</div>
				</van-col>
				<van-col span="12">
					<div class="cz_a" @click="choiceb" :class="isChoice==1?'cz_b':'cz_a'">
						<span class="nama">充1000元</span>
					</div>
				</van-col>
			</van-row>
			<van-row type="flex" justify="center">
				<van-col span="12">
					<div class="cz_a" @click="choicec" :class="isChoice==2?'cz_b':'cz_a'">
						<span class="nama">充2000元</span>
					</div>
				</van-col>
				<van-col span="12">
					<div class="cz_a" @click="choiced" :class="isChoice==3?'cz_b':'cz_a'">
						<span class="nama">自定义金额</span>
					</div>
				</van-col>
			</van-row>
		</div>
		<div class="zf_fs">
			<div class="zf_fs_cz">支付方式</div>
		</div>
		<div>
			<van-row type="flex" justify="center">
				<van-radio-group v-model="radio" direction="horizontal" class="radio-group">
					<div class="xz_zf">
						<van-radio name="1" icon-size="16px">
							<img src="../assets/image/zfb.png" />
						</van-radio>
					</div>
					<div class="xz_zf">
						<van-radio name="2" icon-size="16px">
							<img src="../assets/image/vxzf.png" />
						</van-radio>
					</div>
				</van-radio-group>
			</van-row>
		</div>
		<div class="tc_login">
			<van-button size="large">确定充值</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		name:"atm",
		data(){
			return{
				isChoice: 0,
				radio: "1",
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
			}
		},
	}
</script>

<style lang="less" scoped="scoped">
	.recharge {
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
			/*.van-radio{
				display: inline-block;
				text-align: center;
				width: 100px;
				vertical-align: middle;
			}*/
			.xz_zf {
				margin-top: 15px;
				display: inline-block;
				width: 120px;
				// img {
				// 	margin-left: -20px;
				// }
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
	}
</style>