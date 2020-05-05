<template>
  <div slot="footer" class="order_list--footer_btn">
	  	<van-button round block type="info" size="small" class="card-btn" color="linear-gradient(to right, #2E81F3, #4CB1FF)" @click="$emit('handle', 'receiptOrder')">确认收货</van-button>
		<van-button round block plain type="info" size="small" class="card-btn"  @click="$emit('handle', 'toDetail')">联系客服</van-button>
		

	</div>	
</template>

<script>
</script>
<style>
.card-btn{
  width: 90px;
  float: right;
  
 margin-left: 15px;
}
</style>