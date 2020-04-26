<template>
  <div class="home pt20 all">
        <h2>HEY! 油乐嘉</h2>
        <div class="mt10">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="../assets/image/banner01.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="../assets/image/banner01.png" alt=""></van-swipe-item>
                <van-swipe-item><img src="../assets/image/banner01.png" alt=""></van-swipe-item>
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
                <div class='recommend-l' @click="addTo()">
                    <p class="f14 mb5">购买燃烧添加剂</p>
                    <p>免费升级VIP会员</p>
                </div>
                <div class='recommend-r'>
                    <div class='box' @click="addTo()">
                        <p class="f14 mb5">汽车兴奋剂</p>
                        <p>植物燃油添加剂</p>
                    </div>
                    <div class='box jyk' @click="fuelCard()">
                        <p class="f14 mb5">加油卡7折</p>
                        <p>VIP会员专享福利</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="clear"></div>
        <div class='mt25'>
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>了解我们</span>
            </div>
            <div class='usList'>
                <a href="" class="mb10"><img src="../assets/image/us01.jpg" alt=""></a>
                <a href="" class="mb10"><img src="../assets/image/us02.jpg" alt=""></a>
                <a href=""><img src="../assets/image/us03.jpg" alt=""></a>
            </div>
        </div>


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
                    url:'',
                    text:'折扣保养' ,
                    icon:require('../assets/image/icon_02.png')
                },
                {
                    url:'',
                    text:'模式解说' ,
                    icon:require('../assets/image/icon_03.png')
                },
                {
                    url:'',
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
            ]
                
        }
        
    },
  methods: {

    addTo(){
        this.$router.push('/AddTo');
    },
    fuelCard(){
        this.$router.push('/FuelCard');
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
        padding: 30px 0 0 20px;
        box-sizing: border-box;
        color: #fff;
        border-radius: 6px;
    }
    .recommend-r{
        width:48%;
        float: right;
        color: #fff;
        .box{
            height: 75px;
            background:linear-gradient(133deg,rgba(8,246,165,1) 0%,rgba(8,246,201,0.3) 100%);
            padding: 16px 0 0 20px;
            box-sizing: border-box;
            border-radius: 6px
        }
        .box.jyk{
            margin-top: 8px;
            background:linear-gradient(133deg,rgba(245,192,85,1) 0%,rgba(245,192,85,0.3) 100%);
        }
    }
    .usList a{
        margin-bottom: 10px;
        display: block;
    }
    .van-grid{
        margin: 10px 0;
    }
}
</style>