<template>
  <div slot="footer" class="order_list--footer_btn">
		<!-- <div class="title-s fl" style="margin-bottom:0;">
				<span class="fl f17 fb"><i class="line"></i></span>
		</div> -->
		
		<div v-if="show" class="mt10">
			<van-cell-group>
				<van-cell title="下单手机号" :value="phone"/>
				<van-cell title="下单时间" :value="updated_at"/>
				<van-cell title="快递单号" :value="ship_code"/>
				<van-cell title="手机号" :value="oil_phone" v-if="oil_phone"/>
				<van-cell title="油卡姓名" :value="oilcard_name" v-if="oilcard_name"/>
				<van-cell title="油卡卡号" :value="oil_number" v-if="oil_number"/>
			</van-cell-group>
			<van-button size="small" class="fr" @click="up">收起详情</van-button>
			
		</div>
		<van-button size="small" @click="down" class="fr"  v-else>查看详情</van-button>
	</div>	
</template>

<script>

export default {
	props:{
		phone:'',
		updated_at: '',
		ship_code:'',
		oil_phone:'',
		oilcard_name:'',
		oil_number:''
	},
  

	data () {
		return {
		show: false,
		
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
