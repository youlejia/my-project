<template>
	<div class="mycore">
		<div class="head" :style="{backgroundImage: `url(${background_image})`}">
			<div class="tb_icon">
				<van-icon :name="useric" size="22" @click="setUp()"/>
			</div>
			<div class="zhongbu">
				<div class="yh_tx">
					<img :src="userList.avatar" alt="">
				</div>
				<div class="yh_js">
					<div class="yh_name">{{userList.name}}</div>
					<p class="c-ff5000">{{userList.id}}</p>
					<div class="yh_c">
						<div class="yh_dj">
							<img src="../assets/image/vip.svg" alt=""/>
							<i class="vip_num">{{userList.level_id}}</i>
						</div>
						<span class="yh_zh">{{userList.levelName}}</span>
					</div>
				</div>
				<div class="card_quan" @click="maintain">
					<div class="quan_zhang">{{securities}}</div>
					<div class="quan_name">我的保养卡</div>
				</div>
			</div>
			<div class="head_bot">
				<div class="ye_bt">账户余额</div>
				<div class="ye_sy"> <span>¥</span>{{userList.balance}}</div>
				<div class="but" @click="balance()">查看详情</div>
			</div>
		</div>
		<div class="user_dd">我的订单</div>
		<van-grid :border="false" :column-num="3">
			<van-grid-item  @click="$router.push({path: '/user/order/list/2'})">
				<div slot="default">
					<img src="../assets/image/user_df.svg" alt="">
					<p class="tc mt5">待发货</p>
					<span class="num" v-if="userOrders.unship ? userOrders.unship : ''">{{userOrders.unship}}</span>
				</div>
				
			</van-grid-item>
			<van-grid-item @click="$router.push({path: '/user/order/list/3'})">
				<div>
					<img src="../assets/image/user_ds.svg" alt="">
					<p class="tc mt5">待收货</p>
					<span class="num" v-if="userOrders.undelivery ? userOrders.undelivery : ''">{{userOrders.undelivery}}</span>
				</div>
				
			</van-grid-item>
			<van-grid-item  @click="$router.push({path: '/user/order/list/4'})">
				<div>
					<img src="../assets/image/user_wc.svg" alt="">
					<p class="tc mt5">已完成</p>
				</div>
			</van-grid-item>
		
		</van-grid>
		<!--<van-cell-group>	-->
		<van-cell title="车友会" @click="onClickAlert">
			<template slot="icon" to=''><img src="../assets/image/user_cy.svg" /></template>
		</van-cell>
		<van-cell title="公益基金" to='' @click="onClickAlert">
			<template slot="icon"><img src="../assets/image/user_jijin.svg" /></template>
		</van-cell>
		<van-cell title="收货地址" to='/ReceivingAddress'>
			<template slot="icon"><img src="../assets/image/user_dz.svg" /></template>
		</van-cell>
		<van-cell title="会员协议" to='/MemberAgreement'>
			<template slot="icon"><img src="../assets/image/user_xy.svg" /></template>
		</van-cell>
		<van-cell title="商务合作" to='/Cooperation'>
			<template slot="icon"><img src="../assets/image/user_hz.svg" /></template>
		</van-cell>
		<van-cell title="联系客服" to='/Customer'>
			<template slot="icon"><img src="../assets/image/user_kf.svg" /></template>
		</van-cell>
		<van-cell title="我的银行卡" to='MyBankCard'>
			<template slot="icon"><img src="../assets/image/user_yhk.svg" /></template>
		</van-cell>
		<van-cell title="APP下载" to='/download' :border="false">
			<template slot="icon"><img src="../assets/image/user_xz.svg" /></template>
		</van-cell>
		<div class="user_but">
			<van-button size="large"  @click="Logout">退出登录</van-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				background_image: require('../assets/image/wd_bj.png'),
				useric: require('../assets/image/user_setup.svg'),
				show: false,
				userList:[],
				userOrders:[],
				securities:'',
			}
		},
		mounted(){
			this.$axios.post('api/user').then(res=>{
				this.userList = res.data.user;
				this.securities =res.data.securities;
				this.userOrders = res.data.orders;
			
			})
			.catch( error=>{
		　　　　console.log(error);
		　　});
		},
		methods:{
			maintain(){
			
			this.$router.push({ name: "MaintainCard", query:{id:this.userList.id}});
				
			},
			balance(){
				this.$router.push('/Mybalance');
			},
			setUp(){
				this.$router.push('/Changeinfo');
			},
			Logout(){
				this.$axios.post('api/logout').then(res=>{
					if (res.status != 200) return;
					localStorage.removeItem('Authorization');
					this.$toast.success('退出成功');
					setTimeout(() => {
						this.$router.push('/login');
						
					},1000)
				
					})
				.catch( error=>{
			　　　　console.log(error);
			　　});
				
			},
			onClickAlert() {
				this.$dialog.alert({
					
					message:'敬请期待！' ,
				});
			},

		}
	}
</script>

<style lang="less" scoped="scoped">
	
	.mycore {
		margin: 0;
		padding-bottom:60px;
		.head {
			padding-top: 10px;
			position: relative;
			background-repeat: no-repeat;
			background-size: cover;
			box-sizing: border-box;
			.tb_icon {
				text-align: right;
				line-height: 40px;
				width: 92%;
				margin: 0 auto;
			}
			.zhongbu {
				width: 92%;
				margin: 0 auto;
				position: relative;
				margin-bottom: 10px;
				.yh_tx {
					display: inline-block;
					vertical-align: middle;
					line-height: 42px;
					img {
						width: 80px;
						height: 80px;
						border-radius: 50%;
					}
				}
				.yh_js {
					display: inline-block;
					position: absolute;
					left: 85px;
					top:21px;
					color: #ffffff;
					.yh_name {
						font-size: 15px;
					}
					.yh_c {
						display: inline-block;
						// margin-top: 6px;
						.yh_dj {
							display: inline-block;
							// padding-top: 3px;
							position: relative;
							// text-align: center;
							// vertical-align: middle;
							img {
								width: 20px;
								height:20px;
							}
							.vip_num{
								position: absolute;
								top: 5px;
								left: 14px;
								color: #ff5000;
								font-size: 12px;
								-webkit-text-stroke: .5px #f7e9da;
							}
						}
						.yh_zh {
							font-size: 13px;
							position: relative;
							color: #FF5000;
							top: -3px;
						}
					}
				}
				.card_quan{
					display: inline-block;
					color: #ffffff;
					position: absolute;
					right: 25px;
					top: 15px;
					text-align: center;
					.quan_zhang{
						font-size: 16px;
						font-weight: bold;
					}
				}
			}
			.head_bot {
				width: 80%;
				margin: 0 auto;
				background-color: #353949;
				line-height: 48px;
				border-radius: 11px 11px 0 0;
				padding: 0 15px;
				position: relative;
				.ye_bt {
					display: inline-block;
					font-size: 11px;
					color: #E0DCAB;
					margin-right: 16%;
				}
				.ye_sy {
					position: absolute;
					top: 11px;
					display: inline-block;
					font-size: 16px;
					line-height: 30px;
					font-weight: 600;
					color: #E0DCAB;
					span {
						font-size: 12px;
						margin-right: 3px;
					}
				}
				.but {
					position: absolute;
					right: 13px;
					top: 13px;
					width: 68px;
					line-height: 21px;
					border: 1px #E0DCAB solid;
					border-radius: 10px;
					text-align: center;
					font-size: 11px;
					color: #E0DCAB;
				}
			}
		}
		.van-grid-item__content{
			padding: 16px 8px;
			div{
				width: 38px;
			}
		}
		.user_dd {
			font-size: 16px;
			color: #333333;
			width: 90%;
			margin: 0 auto;
			border-left: 4px solid #2E81F3;
			margin-top: 28px;
			padding-left: 5px;
			font-weight: 600;
		}
		.num{
			position: absolute;
			top: 12px;
			right: 26px;
			background: #2e82f3;
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			border-radius: 100px;
			color: #fff;
		}
		.van-cell {
			font-size: 14px;
			color: #333333;
			line-height: 30px;
			padding: 10px 20px;
			font-weight: bold;
			img {
				margin-right: 6px;
				width: 18px;
				height: 18px;
				margin-top: 6px;
			}
		}
		.user_but {
			width: 84%;
			margin: 0 auto;
			margin-top: 10px;
			.van-button {
				background-color: #4788FF;
				color: #fff;
				font-size: 13px;
				border-radius: 22px;
				height: 44px;
				line-height: 44px;
				background: linear-gradient(left,#4CB1FF,#2E81F3);
			}
		}
		.user-links {
			padding: 10px 0;
			font-size: 12px;
			text-align: center;
			// background-color: #fff;
			line-height: 2;
			background-color: #ffffff;
			margin-bottom: 6px;
			img {
				display: block;
				margin: 0 auto;
				width: 52px;
				height: 52px;
			}
		}
	}
</style>