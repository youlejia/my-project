<template>
  <div class="pay_way_group">
 
    <van-radio-group v-model="payWay" @change="onChange">
    
        <div v-for="(item, i) in gateways" :key="i" class="radioMore">
            <van-radio v-if="item.name == '支付宝'" :name="item.key"><img src="" alt="">{{item.name}} </van-radio>
            <van-radio v-else-if="item.key == 'balance'" :disabled="item.disabled" :name="item.key"> {{item.name}} <span class="pay_way_balance">￥{{ item.balance }}</span> </van-radio>
                   
            <van-radio v-else :name="item.key"><img src="" alt="">{{item.name}} </van-radio>
        </div>
     
    </van-radio-group>
  </div>
</template>

<script>


export default {
  name: "pay-way",
  props: {
    gateways: Array,
  },

  data () {
    return {
      payWay: '',
    }
  },

  watch: {
    'gateways': function() {
      if (this.gateways.length > 0) this.payWay = this.gateways[0].key
    }
  },

  methods: {
    onChange(value) {
      this.$emit("payWayEvent", value)
    }
  }
};
</script>

<style scoped>
  .pay_way_balance {
    color: #999;
  }
  .pay_way_group img {
    vertical-align: middle;
  }

  .pay_way_title {
    padding: 15px;
    background-color: #fff;
  }
  .radioMore .van-radio{
    width: 50%;
    float: left;
    margin-bottom: 15px;
        
    }
 
</style>