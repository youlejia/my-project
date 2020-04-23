<template>
    <div class="login">
        <div class="login-bg">
            <div>
               <img src="../assets/image/login.png" alt="">
                <p class="f18 c-fff mt25">欢迎来到油乐嘉</p> 
            </div>
        </div>
        <div class="login-box">
            <h2>实名认证</h2>
            <van-form @submit="onSubmit" class="mt20">
                <van-field
                    v-model="username"
                    name="用户名"
                    placeholder="姓名"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="身份证号码"
                    placeholder="身份证号码"
                   
                />
              
                <van-radio-group v-model="radio" class="mt15">
                    <van-radio name="1" icon-size="14px">
                    注册即代表您已阅读并同意<a class="c-2e81f3">《油乐嘉用户协议》</a>
                    </van-radio>
                </van-radio-group>
               
                
                <div style="margin-top: 45px;">
                    <van-button round block type="info" native-type="submit" color="linear-gradient(to right, #2E81F3, #4CB1FF)">
                        确认并注册
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
            radio: '1'
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
