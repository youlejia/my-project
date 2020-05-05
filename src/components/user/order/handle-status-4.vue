<template>
  <div slot="footer" class="order_list--footer_btn">
		<div class="title-s fl" style="margin-bottom:0;">
				<span class="fl f17 fb"><i class="line"></i>商品详情</span>
		</div>
		<van-button size="small" @click="$emit('handle', 'toOrderDetail')" class="fr">查看详情</van-button>
		<van-cell-group>
				<van-cell title="订单" :value="item.order" />
				<van-cell title="下单手机号" :value="item.orderPhone" />
				<van-cell title="下单时间" :value="item.orderTime" />
				<van-cell title="快递单号" :value="item.oddNumber" />
		</van-cell-group>
		<van-cell-group v-if="item.oilCard !== 0">
				<van-cell title="油卡姓名" :value="item.cardName" />
				<van-cell title="手机号" :value="item.cardPhone" />
				<van-cell title="油卡卡号" :value="item.cardNumber" />
		</van-cell-group>
	</div>	
</template>

<script>
</script>