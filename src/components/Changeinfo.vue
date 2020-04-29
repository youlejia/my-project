<template>
    <div class="information">
        <van-cell-group>
            <van-cell center title="头像" :border='false'>
                <div slot="default" class='info-img'>
                    <van-uploader :after-read="onRead">
                        <img :src="userList.avatar" ref="usersImg">
                    </van-uploader>
                </div>
            </van-cell>
            <van-field label="用户名" v-model="username" input-align="right" @change="Changename"/>
            <van-field label="手机号" :value="userList.mobile" input-align="right" readonly />
        
            <van-cell title="密码" is-link to="/Changepassword" />
        </van-cell-group>
        <!-- <div class="all"><van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25">保存</van-button></div> -->
    </div>
  
</template>

<script>

export default {
    
    data() {
        return {
            
            userList:[],
            username:'',
            password:''
        }
    },
    mounted(){
        this.$axios.post('api/user').then(res=>{
            this.userList = res.data.user;
            this.username = res.data.user.name
            // this.avatar = res.data.user.avatar
        })
        .catch( error=>{
    　　　　console.log(error);
    　　});
        
    },
    methods: {
        onRead(file){
                var params = {
                    file:file.content,
                    name: file.file.name,
                }
                // params.append('upload', file.file)
                console.log(file)
                // , {
                //     headers: {
                //         "Content-Type": "multipart/form-data"
                //     }
                // }
                this.$axios.post('api/user/avatar', params).then(res=>{
                    console.log(params)
                    console.log(res)
                    // this.avatar = "/api"+ res.data.data.fileName;
                })
        },
        Changename(){
            var params = {
                    name:this.username
                };
                this.$axios.post('api/user/resetName',params).then(res => {
                    console.log(res)
                })
                .catch(error => {
                　　console.log(error);
                });
        },
       

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
