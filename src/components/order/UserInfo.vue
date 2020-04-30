<template>
  <div class="user-info">
    <van-cell-group>
      <van-cell v-if="isAddress"
        icon="user-dizhi" 
        isLink 
        :title="address.name + ' ' + address.tel" 
        :label="'收货地址: ' + address.province + ' ' + address.city + ' ' + address.county + ' ' + address.addressDetail"
        :to="toAddress()"
      />
       
      <van-cell v-else
        icon="add"
        is-link
        class="van-address-list__add van-hairline--top"
        :title="'添加收货地址'"
        :to="toAddressAdd()"
      />
    </van-cell-group>
  </div>
</template>

<script>

export default {
  name: "user-info",

  props: {
    address: {
      type: Object,
      default: () => ({})
    },
    redirect: {
      type: String,
      default: ''
    }
  },
  methods:{
    toAddressAdd(){
      let query = this.$route.query
      query.redirect = this.redirect
      return {name: 'addressEdit', params: {addressId: -1}, query: query}
    },
    toAddress() {
      let query = this.$route.query
      query.redirect = this.redirect
      return {name: 'ReceivingAddress', query: query}
    }
  },
  computed: {
    isAddress: function () {
      return Object.keys(this.address).length > 0
    },
  }
};
</script>

<style lang="less" scoped="scoped">
.user-info{
  .van-address-list__add{
      line-height:24px;
  }
}
/* .user-info::after {
  content: ' ';
  display: block;
  width: 100%;
  height: 2px;
  background-image: url('/image/cell_bg.jpg');
  background-size: 34px 2px;
} */

</style>
