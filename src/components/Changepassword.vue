<template>
    <div class="login">
        <div class="login-bg">
            <div>
               <img src="../assets/image/login.png" alt="">
                <p class="f18 c-fff mt25">欢迎来到油乐嘉</p> 
            </div>
        </div>
        <div class="login-box">
            <h2>修改密码</h2>
            
                <van-field
                    v-model="phone"
                    name="手机号"
                    placeholder="请输入手机号"
                />
                <van-field
                    v-model="number"
                    type="number"
                    name="验证码"
                    placeholder="请输入验证码"
                   
                >
                    <template #button>
                        <span>|</span>
                         <van-button size="small" type="default" style="border: none;" @click="send">{{content}}</van-button>
                    </template>
                
                </van-field>
                <van-field
                    v-model="password"
                    type="password"
                    name="输入新密码"
                    placeholder="输入新密码"
                   
                />
                <div style="margin-top: 45px;">
                    <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" @click="onSubmit">
                        确认并修改
                    </van-button>
                </div>
               
          
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
            phone: '',
            password: '',
            number:'',
            content: '发送验证码',
            totalTime: 60,
            canClick: true,
        };
    },
    methods: {
        send(){
            if(!(/^1[34578]\d{9}$/.test(this.phone))){
                this.$toast('请输入正确的手机号格式');
                return false;
            }
            if (!this.canClick) return
            this.canClick = false
            this.content = '剩余'+ this.totalTime + '秒'
            let clock = window.setInterval(() => {
                this.totalTime--
                this.content = '剩余'+ this.totalTime + '秒'
                if (this.totalTime < 0) {
                    window.clearInterval(clock)
                    this.content = '重新发送验证码'
                    this.totalTime = 60
                    this.canClick = true
                }
            },1000);
            var params = { 
                mobile:this.phone,
            };
            this.$axios.post('api/sms',params).then( res=>{
            
            }).catch( error=>{
            　　console.log(error);
            });
        },
        onSubmit() {
            var params = { 
                mobile:this.phone,
                sms:this.number,
                password:this.password,
            };
            if(!(/^1[34578]\d{9}$/.test(this.phone))){
                this.$toast('请输入正确的手机号格式');
            }else if(this.number == ''){
                this.$toast('请输入手机验证码！');
            }else if(this.password == ''){
                 this.$toast('请输入正确的邀请码');
            }else{
                this.$axios.post('api/user/forgetPassword',params).then( res=>{
                    if(res.status == 200){
                        this.$router.push('/login')
                        this.$toast('修改成功')
                    }else{
                        this.$toast(res.data.message)
                    }
                }).catch( error=>{
                　　console.log(error);
                });
            }
       
        },
    },
}
</script> 
<style>
@import "../assets/css/login.css";
</style>
