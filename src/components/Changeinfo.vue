<template>
    <div class="information">
        <van-cell-group>
            <van-cell title="头像" :border='false'>
                <div slot="default" class='info-img'><img src="../assets/image/user.png" alt=""></div>
            </van-cell>
            <van-cell title="电话号" value="132 1513 1214" />
            <van-cell title="密码" value="修改密码" />
            <van-cell title="QQ" value="1585485651" />
            <van-cell title="微信" value="6546156" />
        </van-cell-group>
        <div class="all"><van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25">保存</van-button></div>
    </div>
  
</template>

<script>

export default {
    
    data() {
        return {
        }
    },
    methods: {
       
    },
}
</script> 
<style lang="less" scoped="scoped">
.information{
    .info-img img{
        width: 60px;
        float: right;
    }
    .van-cell{
        padding: 16px;
    }
}
</style>
