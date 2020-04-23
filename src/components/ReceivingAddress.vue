<template>
	<div class="receivingAddress">
		<div class="address" v-if="address!==''">
			<div class="time_count">
				<span></span> 2020/04/10 20:16
			</div>
			<div class="address_count">
				<div class="count_img"><img src="../assets/image/shdz.png" alt="" /></div>
				<div class="address_dz">
					<div class="dz">曼哈顿18号楼2单元2304</div>
					<div class="user_name"><span>米岚</span>18768888888</div>
				</div>
				<!--<div class="exit">修改</div>-->
			</div>
		</div>
		<div class="exit_address" v-if="address!==''">
			<div class="address_title">收货地址修改</div>
			<div class="address_c">
				<van-field v-model="address" label="收货地址" input-align="right" />
				<van-field v-model="name" label="姓名" input-align="right" />
				<van-field v-model="mobile" label="电话号" input-align="right" />
			</div>
			<div class="but">保存</div>
		</div>
		<div class="addressadd" v-if="address==''">
			<div class="time_count">
				<span></span> 2020/04/10 20:16
			</div>
			<div class="address_add" @click="show=true">
				<div class="count_img"><img src="../assets/image/shdz.png" alt="" /></div>
				<div class="address_xz">
					新增收货地址
				</div>
			</div>
		</div>
		<van-popup class="popup" v-model="show">
			<div class="address_title">添加收货地址</div>
			<div class="address_c">
				<van-field v-model="address" label="收货地址" placeholder="请输入收货地址"/>
				<van-field v-model="name" label="姓名" placeholder="请输入姓名"/>
				<van-field v-model="mobile" label="电话号" placeholder="请输入电话号"/>
			</div>
			<div class="but" @click="addAddress">添加</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				address:"曼哈顿18号楼2单元2304",//地址  如果为空时显示 只新增收货地址   不为空时显示地址和地址修改(隐藏新增)
				name:"米岚",
				mobile:"187 6888 8888",
				show:false
			}
		},
		methods: {
			addAddress(){
				this.show = false;
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@font-face {
		font-family: 'ps';
		src: url('../assets/font/PingFangSC.ttf');
	}
	
	.receivingAddress {
		font-family: 'ps';
		.address {
			.time_count {
				width: 80%;
				margin: 0 auto;
				font-size: 11px;
				color: #999999;
				line-height: 35px;
				span {
					display: inline-block;
					width: 8px;
					height: 8px;
					background-color: #2793F3;
					border-radius: 50%;
				}
			}
			.address_count {
				width: 90%;
				margin: 0 auto;
				background: linear-gradient(left, #2791F3, #39D7FC);
				border-radius: 8px;
				color: #FFFFFF;
				position: relative;
				.count_img {
					display: inline-block;
					margin: 24px 12px 24px 21px;
					img {
						width: 32px;
						height: 30px;
					}
				}
				.address_dz {
					display: inline-block;
					.dz {
						font-size: 14px;
						font-weight: 600;
						line-height: 30px;
					}
					.user_name {
						font-size: 10px;
						span {
							margin-right: 10px;
						}
					}
				}
				/*.exit {
					position: absolute;
					right: 30px;
					top: 35px;
					font-size: 12px;
				}*/
			}
		}
		.exit_address{
			width: 80%;
			margin: 0 auto;
			margin-top: 15px;
			border-radius: 8px;
			box-shadow: 0 3px 6px rgba(71,136,255,0.5);
			padding: 10px 0;
			.address_title{
				width: 86%;
				margin: 10px auto;
				padding-left: 8px;
				border-left: 4px solid #2E81F3;
				font-size: 13px;
				color: #333333;
			}
			.address_c{
				width: 98%;
				margin: 0 auto;
				.van-field{
					font-size: 12px;
				}
			}
			.but{
				width: 86%;
				line-height: 42px;
				margin: 0 auto;
				margin-top: 15px;
				margin-bottom: 10px;
				border-radius: 21px;
				background: linear-gradient(left, #4CB1FF, #2E81F3);
				text-align: center;
				color: #FFFFFF;
				font-size: 13px;
				font-weight: 600;
			}
		}
		.addressadd {
			margin-top: 10px;
			.time_count {
				width: 80%;
				margin: 0 auto;
				font-size: 11px;
				color: #999999;
				line-height: 35px;
				span {
					display: inline-block;
					width: 8px;
					height: 8px;
					background-color: #2793F3;
					border-radius: 50%;
				}
			}
			.address_add {
				width: 90%;
				margin: 0 auto;
				background: linear-gradient(left, #2791F3, #39D7FC);
				border-radius: 8px;
				color: #FFFFFF;
				position: relative;
				.count_img {
					display: inline-block;
					margin: 24px 12px 24px 21px;
					img {
						width: 32px;
						height: 30px;
					}
				}
				.address_xz {
					position: absolute;
					top: 32px;
					left: 70px;
					font-size: 14px;
					font-weight: 600;
				}
			}
		}
		.popup{
			width: 80%;
			margin: 0 auto;
			border-radius: 8px;
			padding: 10px 0;
			.address_title{
				width: 86%;
				margin: 10px auto;
				padding-left: 8px;
				border-left: 4px solid #2E81F3;
				font-size: 13px;
				color: #333333;
			}
			.address_c{
				width: 98%;
				margin: 0 auto;
				.van-field{
					font-size: 12px;
				}
			}
			.but{
				width: 86%;
				line-height: 42px;
				margin: 0 auto;
				margin-top: 15px;
				margin-bottom: 10px;
				border-radius: 21px;
				background: linear-gradient(left, #4CB1FF, #2E81F3);
				text-align: center;
				color: #FFFFFF;
				font-size: 13px;
				font-weight: 600;
			}
		}
	}
</style>