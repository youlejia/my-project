<template>
  <div class="home pt20 all">
        <h2>HEY! 油乐嘉</h2>
        <div class="mt10 top">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item  v-for="(image, index) in images" :key="index">
                    <img :src="image" alt="">
                </van-swipe-item>
               
            </van-swipe>
        </div>
        <van-grid :gutter="4" :border="false">
            <van-grid-item v-for="item in list" :key="item.value" :to="item.url" :icon="item.icon" :text="item.text"/>
        </van-grid>
        <div class="home-box">
            <span class="fl"><i></i>以科技创新提升能源效益，助力全</span>
            <span @click="$router.push('/Notice')" class="fr mr20"><b class="pr10">|</b>更多</span>
        </div>
        <div class="home-recommend mt25">
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>为你推荐</span>
                <span class="fr" style="color:#999">精品会员专享推荐</span>
            </div>
            <div>
                <div class='recommend-l' @click="addTo(item.id)" v-for="item in items" :key="item.value">
                    <p class="f14 mb5">{{item.name}}</p>
                    <!-- <p>免费升级VIP会员</p> -->
                </div>
               
            </div>
        </div>
        <div class="clear"></div>
        <div class='mt25'>
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>了解我们</span>
            </div>
            <div class='usList'>
                <router-link to="/Company"><img src="../assets/image/us01.jpg" alt=""></router-link>
                <router-link to="/Product"><img src="../assets/image/us02.jpg" alt=""></router-link>
                <router-link to="/CompanyTeam"><img src="../assets/image/us03.jpg" alt=""></router-link>
            </div>
        </div>
    <!-- <van-popup v-model="showAuth" :close-on-click-overlay="false" class="vp">
      <div class="asas">
        
        <div class="tishi_t">您还未实名认证</div>
        <div class="title_ts">为确保交易及资金安全，请先实名认证</div>
        <div class="but" @click="toAuth(id)">前往认证</div>
      </div> 
    </van-popup> -->

  </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            list:[
                {
                    url:'/Upgrade',
                    text:'升级代理' ,
                    icon:require('../assets/image/icon_01.png')
                },
                {
                    url:'/AddTo/4',
                    text:'折扣保养' ,
                    icon:require('../assets/image/icon_02.png')
                },
                {
                    url:'/pattern',
                    text:'模式解说' ,
                    icon:require('../assets/image/icon_03.png')
                },
                {
                    url:'/share',
                    text:'立刻分享' ,
                    icon:require('../assets/image/icon_04.png')
                },
                {
                    url:'',
                    text:'敬请期待' ,
                    icon:require('../assets/image/icon_05.png')
                },
                {
                    url:'',
                    text:'敬请期待' ,
                    icon:require('../assets/image/icon_06.png')
                },
                {
                    url:'',
                    text:'敬请期待' ,
                    icon:require('../assets/image/icon_07.png')
                },
                {
                    url:'',
                    text:'敬请期待' ,
                    icon:require('../assets/image/icon_08.png')
                }
            ],
            images: [], 
            items:[],
            id:0,
            // showAuth:false,
        }
        
    },
    mounted(){
        this.initData();
    },
    methods: {
        initData(){
            this.$axios.post('api/index').then((res) => {
                if (res.status == 200){
                    // if(res.data.user_real_name == 2){
                    //     this.showAuth = true;
                    // }
                    this.images = res.data.banners;
                    this.items = res.data.items;
                    this.id = res.data.id;
                }
            }).catch( error=>{
            　　console.log(error);
            });
        },
        // toAuth(id){
        //     this.$router.push({ name: 'certification',params:{id:id}})
        // },
        addTo(id){
            this.$router.push({name: 'AddTo',params:{id:id}})
        }
    
  }
}
</script>
<style>
    .home .van-grid-item__content{
        padding:5px 8px;
    }
</style>
<style lang="less" scoped="scoped">
.home{
    .top{
        .van-swipe{
            img{
                height: 140px;
                border-radius: 8px;
            }
        }
    }
    .home-box{
        width:100%;
        height:45px;
        background:#e0ecfd;
        border-radius:30px;
        line-height: 45px;
        i{
            width:7px;
            height:7px;
            background:rgba(46,129,243,1);
            border-radius:50%;
            display:block;
            float: left;
            margin: 19px 9px 0 14px;
        }
        span.fl{
            width: 70%;
            display: block;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
    .recommend-l{
        width:49%;
        float: left;
        background:linear-gradient(133deg,rgba(76,177,255,1) 0%,rgba(76,177,255,0.3) 100%);
        height: 158px;
        text-align:center;
        padding-top: 20px;
        box-sizing: border-box;
        color: #fff;
        border-radius: 6px;
    }
    .recommend-l:nth-child(2){
        width:48%;
        float: right;
        color: #fff;
        height: 75px;
        background:linear-gradient(133deg,rgba(8,246,165,1) 0%,rgba(8,246,201,0.3) 100%);
        box-sizing: border-box;
        border-radius: 6px
    }
    .recommend-l:nth-child(3){
        width:48%;
        float: right;
        color: #fff;
        height: 75px;
        margin-top: 8px;
        background:linear-gradient(133deg,rgba(245,192,85,1) 0%,rgba(245,192,85,0.3) 100%);
    }
   
    .usList a{
        margin-bottom: 10px;
        display: block;
    }
    .van-grid{
        margin: 10px 0;
    }
    .vp{
        border-radius: 15px;
        background-color: #fff;
        padding-top: 20px;
        text-align: center;
        padding-bottom: 1px;
        .renImg{
            padding: 20px 0;
            .im{
            width: 100px;
            }
        }
        .tishi_t{
            font-size: 14px;
            font-weight: 600;
            color: #333333;
            line-height: 20px;
        }
        .title_ts{
            font-size: 12px;
            color: #666666;
            line-height: 20px;
            width: 260px;
        }
        .but{
            width: 60%;
            margin: 20px auto;
            line-height: 36px;
            color: #fff;
            background-color:#2e82f3;
            border-radius: 6px;
        }
    }
}
</style>