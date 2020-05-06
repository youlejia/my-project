<template>
  <div slot="footer" class="order_list--footer_btn">
		<!-- <div class="title-s fl" style="margin-bottom:0;">
				<span class="fl f17 fb"><i class="line"></i></span>
		</div> -->
		
		<div v-if="show">
			<van-cell-group>
				<van-cell title="订单"/>
				<van-cell title="下单手机号"/>
				<van-cell title="下单时间"/>
				<van-cell title="快递单号"/>
			</van-cell-group>
			<van-button size="small" class="fr" @click="up">收起详情</van-button>
			
		</div>
		<van-button size="small" @click="down" class="fr"  v-else>查看详情</van-button>
		<!-- <van-panel 
                v-for="item in parant"
                class="order_list--panel"
                :key="item.value"
                :title="item.name"
               
                >
		</van-panel> -->
		<!-- <van-cell-group>
				<van-cell title="油卡姓名" />
				<van-cell title="手机号" />
				<van-cell title="油卡卡号"/>
		</van-cell-group> -->
	</div>	
</template>

<script>

export default {
	props:{
		parant: Array
	},
  

	data () {
		return {
		show: false,
		newdata:{}
		}
	},
	

	methods: {
		down(){
		
			this.show = !this.show 
		},
		up(){
			this.show = false
		}
	}
};
</script>
<style scoped="scoped">
.van-button--small{
	margin-top: 10px;
}
.van-cell-group{
	background:none;
}
.van-cell{
	padding: 7px 0px;
}
.van-cell:not(:last-child)::after{
	left: 0;
}
</style>
