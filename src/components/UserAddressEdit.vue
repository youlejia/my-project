<template>
  <div class="mall-cell">
    <!-- <van-nav-bar title="地址详情" @click-left="$router.goBack()" >
      <van-icon name="left" slot="left" style="font-size:16px;"/>
    </van-nav-bar> -->
    <van-address-edit
      style="background-color: #fff;"
      :areaList="areaList"
      :addressInfo="addressInfo"
      :isSaving="isSave"
      showPostal
      @save="save"
      @delete="onDelete"
    />
  </div>
</template>

<script>
// import { AddressEdit } from 'vant';
import areaList from './area.json';

export default {
    name: "address-edit",
    props: {
        addressId: [Number, String],
    },
    data () {
        return {
            areaList,
            isSave: false,
            addressInfo: {},
        }
    },
    created(){
        if (this.isEdit) {
        this.initData()
        }
    },
    computed: {
        isEdit() {
            return this.addressId > 0
        },
    },

  
   

    methods: {
        save(){
            if (this.isEdit) {
                // const res = await this.$reqPost(this.$api.address_edit, data);
                // if (res.status != 200) return
                this.$toast.success('修改成功');
            } else {
                // const res = await this.$reqPost(this.$api.address_add, data);
                // if (res.status != 200) return
                // let query = this.$route.query
                // if (query.redirect) {
                // let redirect = query.redirect
                // delete query.redirect
                // query.addressId = res.data.id
                // this.$router.push({name: redirect, query: query})
                // } else {
                // this.$router.goBack()
                // }
            }

        },
        onDelete(){

        },
        initData(){

        }

  },
}
</script>
