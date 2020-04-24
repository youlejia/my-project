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
            <van-form @submit="onSubmit" class="mt20">
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
                    <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #2E81F3, #4CB1FF)">
                        立即登录
                    </van-button>
                </div>
                <div class="tc mt20">
                    <router-link to='/Changepassword' >忘记密码</router-link>
                    <span class="ml20 mr20">|</span>
                    <router-link to='/register'>注册账号</router-link>
                </div>
            </van-form>
        </div>
        <div>
            <router-link to='' class="lxkf">联系客服</router-link>
            
        </div>
    </div>
  
</template>

<script>
export default {
    
    data() {
        return {
        username: '',
        password: '',
        };
    },
    methods: {
        onSubmit(values) {
        console.log('submit', values);
        },
    },
}
</script> 
<style>
@import "../assets/css/login.css";
</style>
