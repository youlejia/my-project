<template>
  <div class="bank-info mall-cell">
    <div style="background-color: rgb(255, 255, 255);">
      <van-cell-group>
        <van-field
          v-model="bankInfo.real_name"
          label="姓名"
          placeholder="请输入姓名"
        />
        <van-cell title="银行" class="bank-info__select" :value="bankInfo.bank ? bankInfo.bank : '请选择银行'" clickable @click="show = true" />
        <van-field
          v-model="bankInfo.card_no"
          label="卡号"
          placeholder="请输入卡号"
        />
         <!-- <van-field
            v-model="mobile"
            label="手机号"
            type="number"
            placeholder="请输入手机号"
        />
        <van-field
          center
          v-model="sms"
          label="验证码"
          placeholder="短信验证码"
          @click-icon="sms = ''"
        >
          <div slot="button" @click="getCode" class="getCode red">
            <countdown v-if="counting" :time="60000" @countdownend="countdownend">
              <template slot-scope="props"><van-button size="small" type="danger" disabled>{{ +props.seconds || 60 }}秒后获取</van-button></template>
            </countdown>
            <van-button v-else size="small" type="info">获取验证码</van-button>
          </div>
        <van-button slot="button" size="small" type="danger">获取验证码</van-button>
        </van-field> -->
      </van-cell-group>

      <div class="btn_que">
        <van-button size="large" @click="save">提交</van-button>
      </div>
    </div>

    <van-popup v-model="show" position="bottom" show-toolbar>
      <van-picker
        show-toolbar
        title="选择银行"
        :columns="banklists"
        @cancel="show = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>


export default {
  name: "bank-edit",

  props: {
    id: [Number, String],
  },



  data () {
    return {
      show: false,
      isSave: false,
      bankInfo: {},
      banklists: [],
      sms:"",
      mobile:"",
      counting: false,
    }
  },
  created(){
    this.initData()
  },

  computed: {
    isEdit() {
      return this.id > 0
    },
  },

  methods: {
    save: async function() {
    //   if (this.isEdit) {
    //     const res = await this.$reqPost(this.$api.card_edit, this.bankInfo);
    //     if (res.status != 200) return
    //     this.$toast.success('修改成功');
    //     setTimeout(() => {
    //       this.$router.goBack()
    //     }, 2000);
    //   } else {
        this.bankInfo.mobile = this.mobile
        this.bankInfo.sms = this.sms
        this.$axios.post('api/card/add', this.bankInfo).then((res) => {
            if (res.status != 200) return
            let query = this.$route.query
            if (query.redirect) {
            let redirect = query.redirect
            delete query.redirect
            query.cardId = res.data.id
            this.$router.push({name: redirect, query: query})
            } else {
            this.$router.go(-1)
            }
        }).catch( error=>{
        　　console.log(error);
        });
      
        
    //   }
    },
    
    initData: async function() {
        this.$axios.post('api/card/detail').then((res) => {
            if (res.status != 200) return
            this.banklists = res.data.banklists
            this.mobile = res.data.phone
            if (res.data.items) this.bankInfo = res.data.items
        }).catch( error=>{
        　　console.log(error);
        });
    },
    onConfirm(value, index) {
      this.bankInfo.bank = value
      this.show = false
    },
    // getCode(){
   
    //     this.$axios.post('api/sms',{mobile}).then((res) => {
    //         if (res.status != 200) return
    //         this.counting = true;
    //     　
    //     });
    // },
    countdownend(){
      this.counting = false;
    },
  },
}
</script>

<style lang="less" scoped="scoped">

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
    
</style>

