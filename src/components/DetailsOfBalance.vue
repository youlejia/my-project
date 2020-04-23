<template>
	<div class="detailsOfBalance">
		<div class="ishead">
			<img :src="background_image" />
			<div class="yu_e">账户余额（元）</div>
			<div class="yu_e_s">{{balance|numFilter}}</div>
		</div>
		<div class="sz_mx">
			<div class="mx">账户明细</div>
		</div>
		<div v-if='noData'>
			暂无数据
		</div>
		<!-- <van-list 
			v-model="loading"
			:finished="finished"
			finished-text="暂无更多数据"
			@load="loadMore"
			:offset="100"
			class="index-tab">  -->
		<div class="tabs" v-for="(image, index) in list" :index="index" :key="image.id">
			<div class="media-content">
				<div class="left_m">
					<div class="left_name">{{image.name}}</div>
					<div class="left_time">{{image.time}}</div>
				</div>
				<div class="right_m" :style="{'color':(image.name == '余额提现' ? '#333333':'#2E81F3')}">
					<span v-if="image.name == '余额提现'">-</span>
					<span v-else>+</span>
					{{image.money|numFilter}}
				</div>
			</div>
		</div>
		<!-- </van-list> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				background_image: require('../assets/image/mingxi.png'),
				finished: false,
				loading: false,
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
	.detailsOfBalance {
		font-family: 'ps';
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
		// .index-tab{
		.tabs {
			.media-content {
				width: 90%;
				margin: 0 auto;
				margin-top: 10px;
				border-bottom: 1px solid #E8E8E8;
				padding: 15px 0;
				position: relative;
				.left_m {
					display: inline-block;
					.left_name {
						font-size: 16px;
						color: #333333;
						font-weight: 600;
					}
					.left_time {
						font-size: 12px;
						color: #666666;
						margin-top: 6px;
					}
				}
				.right_m {
					font-family: 'cp';
					position: absolute;
					display: inline-block;
					right: 15px;
					top: 20px;
					font-size: 18px;
					font-weight: 600;
				}
			}
		}
		// }
	}
</style>