<template>
	<div class="recharge">
		<div class="cs mt15">
			<div class="cz_a" @click="choicea(index)" v-for="(item,index) in list" :key="index" :class="{active: price == item.nama }" >
				<span class="nama">充{{item.nama}}元</span>
			</div>
			<van-field v-model="price" type="number" label="自定义金额:" placeholder="请输入充值金额" />
		</div>
		<div class="zf_fs">
			<div class="zf_fs_cz">支付方式</div>
		</div>
		<div style="margin: 20px 20px 0;height: 24px;">
			<pay-way :gateways="gateways" @payWayEvent="payWayEvent" />
		</div>
		<div class="tc_login">
			<van-button size="large" @click="rechargeSub">确定充值</van-button>
		</div>
	</div>
</template>

<script>
import payWay from "./pay/way";
export default {
	name:"atm",
	components: {
		[payWay.name]: payWay,
	},
	data(){
		return{
			currentIndex:0,
			price:'500',
			payWay: '',
			gateways:[],
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
			]
		}
	},
	created() {
		this.initData();
	},
	methods: {
		initData(){
			this.$axios.post('api/recharge').then(res => {
				this.gateways = res.data.gateways
			}).catch( error=>{
			　　console.log(error);
			});
		},
		rechargeSub(){
			var param={
				price:this.price,
				type:this.payWay
			}
			this.$axios.post('api/pay',param).then(res => {
				if (res.status != 200) return
				if (res.data.qrcode) {
					this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
				} else if (res.data.html) {
					const div = document.createElement('div') // 创建div
					div.innerHTML = res.data.html // 将返回的form 放入div
					document.body.appendChild(div)
					if (res.data.submitkey) {
					document.forms[res.data.submitkey].submit()
					}
				} 
				
			}).catch( error=>{
			　　
			});
		},
		choicea(index) {
			this.currentIndex = index
			this.price = this.list[index].nama
		},
		
		payWayEvent(value) {
			this.payWay = value
		}
	},
}
</script>

<style lang="less" scoped="scoped">
.recharge {
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