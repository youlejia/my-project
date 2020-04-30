<template>
  <div class="mall-cell">
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
        save(data){
            
                this.$axios.post('api/address/add',data).then(res => {
                    if (res.status != 200) return
                    let query = this.$route.query
                    if (query.redirect) {
                        let redirect = query.redirect
                        delete query.redirect
                        query.addressId = res.data.id
                        console.log(query)
                        this.$router.push({name: redirect, query: query})
                    } else {
                        this.$router.go(-1);
                    }
            
                }).catch( error=>{
                　　console.log(error);
                });
            

        },
        onDelete(){

        },
        initData(){

        },


  },
}
</script>
<style lang="less" scoped="scoped">
.mall-cell{
    .van-address-edit{
        padding: 0;
    }
}
</style>

