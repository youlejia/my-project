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
				:immediate-check="false"
				:offset="100"
				@load="loadMore"
			>
				<div class="tabs" v-for="(items, index) in items" :index="index" :key="items.id">
					<div class="media-content">
						<div class="left_m">
							<div class="left_name">{{items.type}}</div>
							<div class="left_time">{{items.created_at}}</div>
						</div>
						<div class="right_m" :style="{'color':(items.account_type == 2 ? '#333333':'#2E81F3')}">
							<span v-if="items.account_type == 2">-</span>
							<span v-else>+</span>
							{{items.account_amount}}
						</div>
					</div>
				</div>
			</van-list>
		</van-cell-group>
		<is-empty v-model="isEmpty">抱歉,没有找到符合条件的记录</is-empty>
	</div>
</template>

<script>
import IsEmpty from "./items/is-empty";
import loadMore from "../mixin/list-load-more";
	export default {
		components: {

			[IsEmpty.name]: IsEmpty,
		},

		mixins: [loadMore],
		data() {
			return {
				background_items: require('../assets/image/mingxi.png'),
				
				items:{},
				balance:'',
			}
		},
		 created() {
			this.resetInit();
		},

		methods: {
			initData() {
				let params = {
					page: this.pages.currPage,
				}
				this.$axios.post('api/user/fund',params).then(res=>{
					if (res.status != 200) return
					this.items = res.data.data;
					const page = res.data.meta;
					this.balance = res.data.top.balance;
					this.items.push(...items);
					return page;
				})
				.catch( error=>{
			　　　　console.log(error);
			　　});
				
			}
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