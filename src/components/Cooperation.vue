<template>
    <div class="cooperation">
        <div class="left"  @click="goback()">
            <van-icon name="arrow-left" size='18px' color="#fff" />
        </div>
        <div v-html="cooperation">
            <!-- <img src="../assets/image/swhz.jpg" alt=""> -->
        </div>
        
    </div>
</template>

<script>
import QRCode  from "qrcodejs2"
export default {
    data(){
        return{
            cooperation:''
        }
    },
     created() {
        this.initData();
    },

    methods: {
        initData() {
            this.$axios.post('api/user').then(res=>{
                if (res.status != 200) return
                this.cooperation = res.data.user.manage_treaty;
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
            
        },
        goback(){
            this.$router.go(-1);
        }
    },
  

}
</script>

<style lang="less" scoped="scoped">
    .cooperation{
        .left{
            position: absolute;
            top: 12px;
            left: 15px;
        }
        
    }
</style>