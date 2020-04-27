<template>
    <div class="login">
        <div class="login-bg">
            <div>
               <img src="../assets/image/login.png" alt="">
                <p class="f18 c-fff mt25">欢迎来到油乐嘉</p> 
            </div>
        </div>
        <div class="login-box">
            <h2>密码登录</h2>
           
                <van-field
                    v-model="username"
                    name="用户名"
                    placeholder="请输入手机号"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    placeholder="请输入账号密码"
                   
                />
                <div style="margin-top: 45px;">
                    <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)"  @click="onSubmit">
                        立即登录
                    </van-button>
                </div>
                <div class="tc mt20">
                    <router-link to='/Changepassword' >忘记密码</router-link>
                    <span class="ml20 mr20">|</span>
                    <router-link to='/register'>注册账号</router-link>
                </div>
            
        </div>
        <div>
            <router-link to='' class="lxkf">联系客服</router-link>
        </div>
    </div>
  
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    
    data() {
        return {
        username: '',
        password: '',
        };
    },
    methods:{
        ...mapMutations(['changeLogin']),
        onSubmit() {
            if(this.username === '' || this.password === ''){
                this.$toast('账号或密码不能为空') 
            }else{
                this.$axios.post('api/oauth/token',{
                    // data:{
                        'grant_type': 'password',
                        'client_id': '2',
                        'client_secret': 'u2vxPEC7scHT79djwP7gsN7oY4ZoJC8WDHvwzO2D',
                        'username':this.username,   // 登录名
                        'password':this.password,  // 登录密码
                        'scope': ''
                    //}
                }).then((res) => {
                    console.log(res)
                    if(res.status == 200){
                        this.userToken = 'Bearer ' + res.data.access_token;
                        this.changeLogin({ Authorization: this.userToken });
                        this.$toast(res.data.msg)
                         console.log(res)
                        // this.$router.push('/')
                    } else {
                        this.$toast(res.data.message)
                    }
                }).catch( error=>{
                　　
                });
            }
            

        },
    },
}
</script> 
<style>
@import "../assets/css/login.css";
</style>
