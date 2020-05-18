<template>
    <div class="upgrade all">
      <div class="mt10"><img src="../assets/image/sj_banner.png" alt=""></div>
      <div class="mt10">
        <div class="title-s">
          <span class="fl f17 fb"><i class="line"></i>代理等级</span>
        </div>

        <div class='gradeList'>
          <ul>
            <li 
            v-for='(item,index) in list' 
            v-if="index > 2"
            :key="index" 
            :class="{active:istrue==index}" 
            @click="toolEventSlot(index)"
            >
              <div class="pt25 f14">
                <p class="c-ff5000 f12 mb5 vsp" v-if="istrue==index">
                  <img class="imgs" src="../assets/image/vip.svg" alt="">
                </p>
                <p class="c-ff5000 f12 mb5" v-else>LEVEL{{item.id}}</p>
                <p>{{item.name}}</p>
              </div>
              <div class="dlm">￥<span class="f18">{{item.price}}</span></div>
            </li>
          </ul>
        </div>
        <div class="clear"></div>
        <div class="mt25">
          <div class="gradeText" v-for='(itemCon,index) in tabContents' :key="index" v-show="itemCon.key == istrue">
            <div class="tb">
              <div class="zxqx">尊享权限 1</div>
              <p>{{itemCon.reward}}<span class="c-ff5000">{{itemCon.money}}</span>元</p>
            </div>
            <div class="tb">
              <div class="zxqx">尊享权限 2</div>
              <p>{{itemCon.assistant}}<span class="c-ff5000">{{itemCon.money2}}</span>,{{itemCon.assisText}}<span class="c-ff5000">{{itemCon.money3}}</span>,以此类推！</p>
            </div>
            <div class="tb">
              <div class="zxqx">尊享权限 3</div>
              <p>{{itemCon.pushVip}}<span class="c-ff5000">{{itemCon.money4}}</span>元</p>
            </div>
          </div>
        </div>
        
       
      </div>
      <div>
        <div class="title-s">
          <span class="fl f17 fb"><i class="line"></i>支付方式</span>
        </div>
        <div class="pay_way_group">
 
          <van-radio-group v-model="payWay">
            <div v-for="(item, i) in gateways" :key="i" class="radioMore">
              <van-radio v-if="item.name == '支付宝'" :name="item.key"><img src="" alt="">{{item.name}} </van-radio>
              <van-radio v-else-if="item.key == 'balance'" :name="item.key"> {{item.name}} <span class="pay_way_balance">￥{{ item.balance }}</span> </van-radio>
              <van-radio v-else :name="item.key"><img src="" alt="">{{item.name}} </van-radio>
            </div>
          </van-radio-group>
        </div>
        
        <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25" @click="subPay">立即开通</van-button>
        <p class="tc mt10">只有VIP用户拥有升级代理权限</p>
      </div>
      <van-dialog v-model="showPop" title="" show-cancel-button @confirm="confirmFn">
        <van-field
            v-model="phone"
            name="手机号"
            placeholder="请输入手机号"
        />
        <van-field
            v-model="number"
            name="验证码"
            placeholder="请输入验证码"
            
        >
            <template #button>
                <span>|</span>
                <van-button size="small" type="default" style="border: none;" @click="send">{{content}}</van-button>
                
            </template>
        
        </van-field>
		</van-dialog>
    </div>
</template>

<script>

export default {
  
  data() {
    return {
      istrue:3,
      showEagleMap: true,
      radioHorizontal: '1',
      balance: "",
      gateways:[],
      list:{},
      payWay:'',
      id:'4',
      userLevel:'',
      price:'3000.00',
      showPop:false,
      phone:'',
      number:'',
      content: '发送验证码',
      totalTime: 60,
      canClick: true,
      tabContents:[
        {
          key:3,
          reward:'伞下出VIP会员奖励',
          money:'30',
          assistant:'直推会员10个助理代理及以上代理级别即可享受工资叠加',
          money2:'3000',
          assisText:'20个升级为助理及以上代理即可享受工资叠加',
          money3:'6000',
          pushVip:'直推VIP用户奖励',
          money4:'400'
        },
        {
          key:4,
          reward:'伞下出VIP会员奖励',
          money:'50',
          assistant:'直推会员10个升级为乡镇及以上代理即可享受工资',
          money2:'5000',
          assisText:'20个升级为乡镇及以上代理即可享受工资',
          money3:'10000',
          pushVip:'直推VIP用户奖励',
          money4:'400'
        },
        {
          key:5,
          reward:'伞下出VIP会员奖励',
          money:'100',
          assistant:'直推会员10个升级为县区代理即可享受工资叠加',
          money2:'10000',
          assisText:',20个升级为县区代理即可享受工资叠加',
          money3:'20000',
          pushVip:'直推VIP用户奖励',
          money4:'400'
        }
      ]
      
    };
  },
  watch: {
    'gateways': function() {
      if (this.gateways.length > 0) this.payWay = this.gateways[0].key
    }
  },
  mounted(){
    this.upgrade()
  },

  methods: {
    upgrade(){
      this.$axios.post('api/up').then(res => {
          if (res.status != 200) return
          this.gateways=res.data.gateways;
          this.list = res.data.upLevel
          this.userLevel = res.data.userLevel
          this.price = res.data.balance
          this.phone = res.data.mobile
      }).catch( error=>{
      　　console.log(error);
      });
    },
    subPay(){
      if(this.payWay == 'balance'){
        this.showPop = true;
      }else{
        var params={
          type:this.payWay,
          id:this.id,
          sms:this.number,
        }
        this.$axios.post('api/up/add',params).then(res => {
            if (res.status != 200) return
          
            if (res.data.qrcode) {
              
              this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
            }else if (res.data.html) {
                const div = document.createElement('div') // 创建div
                div.innerHTML = res.data.html // 将返回的form 放入div
                document.body.appendChild(div)
                if (res.data.submitkey) {
                document.forms[res.data.submitkey].submit()
                }
            } else {
                this.$toast.success('支付完成');
            }
            
            
        }).catch( error=>{
        　　console.log(error);
        });

      }
      
    },
    confirmFn(){
			if(this.phone && this.number){
				var params={
          type:this.payWay,
          id:this.id,
          sms:this.number,
        }
        this.$axios.post('api/up/add',params).then(res => {
            if (res.status != 200) return
          
            if (res.data.qrcode) {
      
              this.$router.push('/recharge-qrcode?qrcode=' + res.data.qrcode)
            }else if (res.data.html) {
                const div = document.createElement('div') // 创建div
                div.innerHTML = res.data.html // 将返回的form 放入div
                document.body.appendChild(div)
                if (res.data.submitkey) {
                document.forms[res.data.submitkey].submit()
                }
            } else {
                this.$toast.success('支付完成');
            }
            
            
        }).catch( error=>{
        　　console.log(error);
        });
			}else{
				this.$toast('请输入手机号和验证码')
				
			}
		},
		
		send(){
      if(!(/^1[345789]\d{9}$/.test(this.phone))){
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
    toolEventSlot(index){
      this.istrue=index;
      this.showEagleMap = !this.showEagleMap;
      this.id = this.list[index].id;
      this.price = this.list[index].price;
      
    },
    
  }

}
</script>

<style>
.gradeList li{
  position: relative;
  width: 31%;
  margin-right: 3%;
  height:135px;
  background:#e0ecfe;
  color: #2E81F3;
  float: left;
  border-radius:8px;
  text-align: center;
}
.gradeList li:nth-child(3){
  margin-right: 0;
}
.gradeList li .dlm{
  position: absolute;
  bottom:16px;
  width: 100%;
  height:25px;
  background:linear-gradient(180deg,#68b9fe 0%,#5298f5 100%);
  color: #fff;
  line-height: 25px;
}
.gradeList li .vsp{
  display: inline-block;
  width: 38px;
  height: 38px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: rgb(255, 255, 255,0.7);
}
.gradeList li .vsp .imgs{
  width: 25px;
  height: 25px;
  margin: 0 auto;
  margin-top: 8px;
}
.gradeList li.active{
  background:linear-gradient(180deg,rgba(46,129,243,1) 0%,rgba(76,177,255,1) 100%);
  color: #fff;
}
.gradeList li.active .dlm{
  background:#daedfe;
  color: #FF5000;
}
.gradeText .tb{
  width:100%;
  padding: 25px 15px;
  box-sizing: border-box;
  text-align: center;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 6px rgba(46,129,243,0.32);
  border-radius:8px;
  position: relative;
  margin-bottom: 15px;
}
.zxqx{
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 7px;
  color: #fff;
  background:linear-gradient(87deg,rgba(206,17,234,1) 0%,rgba(105,30,195,1) 100%);
  border-radius:0px 8px 0px 8px;
}
.radioMore .van-radio{
    width: 50%;
    float: left;
    margin-bottom: 15px;
        
    }
 
</style>
