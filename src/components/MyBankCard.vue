<template>
	<div class="mybankcard">
		
		<van-radio-group v-model="radio">
			<div class="card_time" v-for="(image, index) in cards" :index="index" :key="image.id">
				<div class="time">
					<div class="time_count">
						<span></span>
						{{image.time}}
					</div>
					<div class="time_xz">
						<van-radio icon-size="12px" :name="image.id">设为默认</van-radio>
					</div>
				</div>
				<div class="card">
					<img src="../assets/image/card.png" />
					<div class="card_yw">EuroAd</div>
					<div class="card_qh" @click="show=true">解绑银行卡</div>
					<div class="card_cardNo">{{image.cradId}}</div>
					<div class="card_name">{{image.name}}</div>
					<div class="card_cardName">{{image.cardName}}</div>
				</div>
				<van-popup class="popup" v-model="show">
					<img class="imgs" src="../assets/image/atm_tk.png"/>
					<div class="is_tx">确定解绑银行卡吗？</div>
					<div class="is_kf">如有任何问题请联系客服</div>
					<div class="but">
						<div class="but_qx" @click="show=false">取消</div>
						<div class="zhong"></div>
						<div class="but_qd" @click="isQd(image.id)">确定</div>
					</div>
				</van-popup>
			</div>
		</van-radio-group>
		<div class="card_add">
           <van-icon :name="jiahao" slot="left" style="font-size:22px;" size="22"/>
           <span class="add_name">添加银行卡</span>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				radio:1,
				cards:[
					{id:1,cardName:"中国邮政储蓄",cradId:"4894 4984 4984 3728",name:"白**",time:"2020/04/10 20:16"},
					{id:2,cardName:"中国邮政储蓄",cradId:"4894 4984 4984 3728",name:"白**",time:"2020/04/10 20:16"},
				],
				jiahao:require('../assets/image/jia.png'),
				show:false
			}
		},
		methods:{
			isQd(id){
				console.log(id);
				this.show=false;
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	@font-face {
	    font-family: 'ps';
	    src: url('../assets/font/PingFangSC.ttf');
	}
	.mybankcard{
		font-family: 'ps';
		.card_time{
			margin-top: 15px;
			.time{
				width: 80%;
				margin: 0 auto;
				position: relative;
				.time_count{
					font-size:11px;
					color: #999999;
					line-height: 20px;
					span{
						display: inline-block;
						width: 8px;
						height: 8px;
						background-color: #F487A6;
						border-radius: 50%;
					}
				}
				.time_xz{
					position: absolute;
					right: 0;
					top: 0;
					font-size: 11px;
					color: #333333;
					.van-radio__label{
						padding-top: 2px;
					}
				}
			}
			.card {
				position: relative;
				width: 94%;
				margin: 0 auto;
				margin-top: 8px;
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
				.but{
					.but_qd,.but_qx{
						display: inline-block;
						width: 35%;
						height: 35px;
						line-height: 35px;
						border-radius: 19px;
						margin: 30px auto;
						font-size: 14px;
					}
					.but_qd{
						background: linear-gradient(left, #2E81F3, #4CB1FF);
						color: #FFFFFF;
					}
					.but_qx{
						color: #2E81F3;
						border: 1px solid #2E81F3;
					}
					.zhong{
						display: inline-block;
						width: 10px;
					}
				}
			}	
		}
		.card_add{
	        width: 90%;
	        margin: 0 auto;
	        line-height: 44px;
	        margin-top: 30px;
	        text-align: center;
	        color: #FFFFFF;
	        font-size: 15px;
	        border-radius: 22px;
	        background: linear-gradient(left, #4CB1FF, #2E81F3);
	        box-shadow: 0 3px 6px rgba(24, 123, 43, 0.1);
	        .add_name{
	            margin-left: 5px;
	        }
	        .van-icon{
	            vertical-align: middle;
	        }
	    }
	}
</style>