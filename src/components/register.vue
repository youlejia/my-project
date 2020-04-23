<template>
    <div class="login">
        <div class="login-bg">
            <div>
               <img src="../assets/image/login.png" alt="">
                <p class="f18 c-fff mt25">欢迎来到油乐嘉</p> 
            </div>
        </div>
        <div class="login-box">
            <h2>注册</h2>
            <van-form @submit="onSubmit" class="mt20">
                <van-field
                    v-model="username"
                    name="手机号"
                    placeholder="请输入手机号"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="验证码"
                    placeholder="请输入验证码"
                   
                >
                    <template #button>
                        <span>|</span>
                        <van-button size="small" type="default" style="border: none;">发送验证码</van-button>
                    </template>
                
                </van-field>
                <van-field
                    v-model="number"
                    type="password"
                    name="邀请码"
                    placeholder="邀请码"
                   
                />
                <div style="margin-top: 45px;">
                    <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #2E81F3, #4CB1FF)">
                        进行实名认证
                    </van-button>
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
        number:''
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
