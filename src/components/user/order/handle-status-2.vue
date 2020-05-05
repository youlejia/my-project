<template>
  <div slot="footer" class="order_list--footer_btn">
    
		<van-button round block plain type="info" size="small" @click="$emit('handle', 'reminderOrder')" class="card-btn">联系客服</van-button>
	</div>	
</template>

<script>
export default {
  props: {
    reminder: Boolean,
    isback: Boolean
  }
};
</script>
<style>
.card-btn{
  width: 90px;
  float: right;
  /* margin-top:15px;
  margin-left: 15px; */
}
</style>
