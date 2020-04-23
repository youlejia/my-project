<template>
    <div class="upgrade all">
      <div class="mt10"><img src="../assets/image/sj_banner.png" alt=""></div>
      <div class="mt10">
        <div class="title-s">
          <span class="fl f17 fb"><i class="line"></i>代理等级</span>
        </div>

        <div class='gradeList'>
          <ul>
            <li v-for='(item,index) in list' :key="index" :class="{active:istrue==index}" @click="toolEventSlot(index)">
              <div class="pt25 f14">
                <p class="c-ff5000 f12 mb5" v-if="showEagleMap">{{item.grade}}</p>
                {{item.grade_name}}
              </div>
              <div class="dlm">￥<span class="f18">{{item.grade_money}}</span></div>
            </li>
          </ul>
        </div>
         <div class="clear"></div>
        <div class="gradeText mt25">
          <div class="tb">
            <div class="zxqx">尊享权限 1</div>
            <p>伞下出VIP会员奖励<span class="c-ff5000">30</span>元</p>
          </div>
          <div class="tb">
            <div class="zxqx">尊享权限 1</div>
            <p>直推会员10个助理代理及以上代理级别即可享受工资叠加<span class="c-ff5000">3000</span>,20个升级为助理及以上代理即可享受工资叠加<span class="c-ff5000">6000</span>,以此类推！</p>
          </div>
          <div class="tb">
            <div class="zxqx">尊享权限 1</div>
            <p>直推VIP用户奖励<span class="c-ff5000">400</span>元</p>
          </div>
          
        </div>
       
      </div>
      <div>
        <div class="title-s">
          <span class="fl f17 fb"><i class="line"></i>支付方式</span>
        </div>
        <van-radio-group v-model="radioHorizontal" direction="horizontal">
          <van-radio name="1"><img src="../assets/image/zfb.png" alt=""></van-radio>
          <van-radio name="2"><img src="../assets/image/vxzf.png" alt=""></van-radio><br>
          <van-radio name="3" class="mt15 f14">账户余额（¥<span>26730.00</span>）</van-radio>
        </van-radio-group>
        <van-button round block type="info" color="linear-gradient(to right, #2E81F3, #4CB1FF)" class="mt25">立即开通</van-button>
        <p class="tc mt10">只有VIP用户拥有升级代理权限</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      istrue: 0,
      showEagleMap: true,
      radioHorizontal: '1',
      list:[
        {
          grade:'LEVEL 3',
          grade_name:'代理·助理',
          grade_money:'3000'
        },
        {
          grade:'LEVEL 4',
          grade_name:'代理·乡镇',
          grade_money:'5000'
        },
        {
          grade:'LEVEL 5',
          grade_name:'代理·县区',
          grade_money:'10000'
        }
      ],
      
    };
  },
  methods: {
    toolEventSlot(index){
      this.istrue=index;
      this.showEagleMap = !this.showEagleMap;
    }
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
</style>
