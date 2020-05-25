<template>
    <div class="login">
         <div class="left"  @click="goback()">
            <van-icon name="arrow-left" size='20px' color="#fff" />
        </div>
         <div class="login-bg">
            <div>
               <img src="../assets/image/login.png" alt="">
                <p class="f18 c-fff mt25">欢迎来到油乐嘉</p> 
            </div>
        </div>
        <div class="login-box">
            <h2>实名认证</h2>
            <van-cell-group>
                <van-field
                    v-model="name"
                    label="真实姓名"
                    placeholder="请输入真实姓名"
                />
                <van-field
                    v-model="cardNo"
                    label="证件号"
                    placeholder="请输入身份证号"
                />
                <!-- <van-field
                    v-model="cardValidity"
                    label="证件有效期"
                    placeholder="请输入有效期时间"
                /> -->
            </van-cell-group>
            <div class="sm_but">
                
                <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" @click="sbAuth">
                    提交认证
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
  
    data(){
        return{
            name:'',
            cardNo:'',
            id:this.$route.query.id
        }
    },
    vuelidation: {
        data: {
            name: {
                required: true,
                msg() {
                return '请输入姓名'
                }
            },
            cardNo: {
                required: true,
                // betweenLength: 18,
                msg() {
                return '请输入正确证件号格式'
                }
            },
            
        }
    },
    methods:{
        sbAuth() {
            const onSubmit = this.onSubmit();
            this.isRegistering = true;
            this.$axios.post('api/real',onSubmit).then(res=>{
                // if (res.status != 200) return
                if(res.data.code==200){
                    this.$toast.success('认证成功');
                    setTimeout(() => {
                        this.$router.push('/')
                    }, 2000);
                }else{
                    this.$toast('认证失败,请填写真实信息');
                }

            })
            .catch( error=>{
        　　});
        },
        onSubmit(){
            const id = this.id
            const name = this.name
            const id_card = this.cardNo
            return {
                id,
                name,
                id_card
            }
        },
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/login.css";
.left{
    position: absolute;
    top: 15px;
    left: 12px;
    z-index: 2;
}
</style>