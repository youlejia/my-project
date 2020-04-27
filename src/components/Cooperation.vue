<template>
    <div class="cooperation">
        <div class="left"  @click="goback()">
            <van-icon name="arrow-left" size='18px' color="#fff" />
        </div>
        <div>
            <img src="../assets/image/swhz.jpg" alt="">
        </div>
        
    </div>
</template>

<script>
import QRCode  from "qrcodejs2"
export default {
    methods:{
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