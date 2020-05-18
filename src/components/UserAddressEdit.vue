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
import { AddressEdit } from 'vant';
import areaList from './area.json';

export default {
    name: "address-edit",
    components: {
    [AddressEdit.name]: AddressEdit
  },
    data () {
        return {
            areaList,
            isSave: false,
            addressInfo: {},
            addressId:this.$route.params.addressId,
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
             if (this.isEdit) {
                this.$axios.post('api/address/edit',data).then(res => {
                    if (res.status != 200) return
                    this.$toast.success('修改成功');
                    this.$router.go(-1);
                }).catch( error=>{
                　　console.log(error);
                });
            }else{
                this.$axios.post('api/address/add',data).then(res => {
                    if (res.status != 200) return
                    let query = this.$route.query
                    if (query.redirect) {
                        let redirect = query.redirect
                        delete query.redirect
                        query.addressId = res.data.id
                        this.$router.push({name: redirect, query: query})
                    } else {
                        this.$router.go(-1);
                    }
            
                }).catch( error=>{
                　　console.log(error);
                });
            }
        },
        onDelete(){

        },
        initData() {
            this.$axios.post('api/address/detail',{id: this.addressId}).then(res => {
                if (res.status != 200) return
                this.addressInfo = res.data
            }).catch( error=>{
            　　console.log(error);
            });
           
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

