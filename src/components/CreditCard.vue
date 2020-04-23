<template>
  <div class="creditcard">
      <div class="zhuti">
      <!-- <van-cell-group> -->
        <van-field
            v-model="name"
            label="持卡人姓名"
            placeholder="请输入持卡人姓名"
        />
        <van-field
            v-model="idnumber"
            label="身份证号码"
            type="number"
            placeholder="请输入身份证号"
        />
        <van-field
            v-model="bankcard"
            label="银行卡号"
            type="number"
            placeholder="请输入银行卡号"
        />
        <van-field
            v-model="mobile"
            label="手机号"
            type="number"
            placeholder="请输入手机号"
        />
        <van-field
            center
            label="验证码"
            v-model="sms"
            placeholder="短信验证码"
        >
            <div slot="button" @click="getCode" class="getCode red">
            <van-button slot="button" size="small" round type="primary" color="#333333" plain>{{content}}</van-button>
            </div>
        </van-field>
      <!-- </van-cell-group> -->
      </div>
      <div class="btn_que">
          <van-button size="large" @click="determine">确认绑定</van-button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            mobile:'',
            idnumber:'',
            bankcard:'',
            name:'',
            sms:'',
            content: '获取验证码',
            counting: false,
            totalTime: 60,
            canClick: true,
            isPopShow: false,
        }
    },
    methods:{
        verification(){
            if(this.name==""){this.$toast('持卡人姓名不能为空');return false;}
            if(this.idnumber==""){
                this.$toast('身份证号不能为空');
                return false;
            }else{
                if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.idnumber))){
                    this.$toast('身份证号格式错误');
                    return false;
                }
            }
            if(this.bankcard==""){this.$toast('卡号不能为空');return false;}
            if(this.mobile==""){
                this.$toast('手机号不能为空');
                return false;
            }else{
                if(!(/^1[34578]\d{9}$/.test(this.mobile))){
                    this.$toast('请输入正确的手机号格式');
                    return false;
                }
            }
            if(this.sms==""){this.$toast('验证码不能为空');return false;}
        },
        getCode(){// 获取验证码
            if(this.mobile==""){this.$toast('手机号不能为空');return false;}
            else{
                if(!(/^1[34578]\d{9}$/.test(this.mobile))){
                    this.$toast('请输入正确的手机号格式');
                    return false;
                }
            }
            if (!this.canClick) return
            this.canClick = false
            this.content = this.totalTime + 'S后获取'
            let clock = window.setInterval(() => {
                this.totalTime--
                this.content = this.totalTime + 'S后获取'
                if (this.totalTime < 0) {
                    window.clearInterval(clock)
                    this.content = '重新发送'
                    this.totalTime = 10
                    this.canClick = true
                }
            },1000)
            const mobile = this.mobile
            console.log(mobile)
            //此处接口
            this.counting = true;
        },
        async determine(){// 确定
            if(this.verification()==false){
                return false;
            }
            console.log("确定")
        }
    }
}
</script>

<style lang="less" scoped="scoped">
@font-face {
    font-family: 'ps';
    src: url('../assets/font/PingFangSC.ttf');
}
.creditcard{
    font-family: 'ps';
    .van-nav-bar__title{
        font-weight: 600;
        color: #333333;
    }
    .van-nav-bar{
        margin-bottom: 10px;
    }
    .zhuti{
        padding: 12px 12px 15px;
        background-color: #ffffff;
        .van-field{
            margin-top: 5px;
            .but{
                border-radius: 20px;
                background-color: #ffffff;
                border:1px solid #333333;
                color: #333333;
                font-size: 11px;
                line-height: 24px;
            }
        }
    }
    .btn_que{
      width: 84%;
			margin: 0 auto;
			margin-top: 40px;
			.van-button {
				background-color: #4788FF;
				color: #fff;
				font-size: 13px;
				border-radius: 22px;
				height: 44px;
				line-height: 44px;
				background: linear-gradient(left,#4CB1FF,#2E81F3);
			}
    }
}
</style>