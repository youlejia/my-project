<template>
	<div class="detailsOfBalance">
		<div class="ishead">
			<img :src="background_items" />
			<div class="yu_e">账户余额（元）</div>
			<div class="yu_e_s">{{balance}}</div>
		</div>
		<div class="sz_mx">
			<div class="mx">账户明细</div>
		</div>
		<van-cell-group>
			<van-list
			v-model="loading"
            :finished="finished"
            finished-text="- 没有更多了 -"
            @load="onLoad"
            :offset="130"
			>
				<div class="tabs" v-for="(item, index) in items" :index="index" :key="item.id">
					<div class="media-content">
						<div class="left_m">
							<div class="left_name">{{item.type}}</div>
							<div class="left_time">{{item.created_at}}</div>
						</div>
						<div class="right_m" :style="{'color':(item.account_type == 2 ? '#333333':'#2E81F3')}">
							<span v-if="item.account_type == 2">-</span>
							<span v-else>+</span>
							{{item.account_amount}}
						</div>
					</div>
				</div>
			</van-list>
		</van-cell-group>
	</div>
</template>

<script>

	export default {
		
		data() {
			return {
				background_items: require('../assets/image/mingxi.png'),
				items:[],
				balance:'',
				page: 1,
				loading: false,
				finished: false,
				noData: false
			}
		},
		created() {
			this.initData();
		},

		methods: {
			initData() {
				let params = {
					page: this.page,
				}
				this.$axios.post('api/user/fund',params).then(res=>{
					if (res.status != 200) return
					this.balance = res.data.top.balance;
					this.loading = false
					this.items = this.items.concat(res.data.data)
					this.page++
					// 如果没有数据，显示暂无数据
					if (this.items.length === 0 && this.page === 1) {
						this.noData = true
					}
					// 如果加载完毕，显示没有更多了
					if (res.data.data.length === 0) {
						this.finished = true
					}

				})
				.catch( error=>{
			　　　　console.log(error);
			　　});
				
			},
			onLoad () {
				setTimeout(() => {
					this.initData()
					this.loading = true
				}, 500)
			},
		},
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