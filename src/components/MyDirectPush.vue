<template>
    <div class="mydirect team all pt20">
        <h2>团队</h2>
        <div class="team-user">
            <div class="fl"><img src="../assets/image/user_portrait.png" alt=""></div>
            <div class="fl mt10">
                <p class="user-n c-ff5000 f14">
                    <img src="../assets/image/user_vip.png" alt="">
                    刘瑞琪
                </p>
                <p class="ml10 c-fff">1876888888</p>
            </div>
        </div>
        <div class="team-number">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>团队人数</span>
                <span class="f18 ml5 c-2e81f3">77</span>
            </div>
            <van-grid :column-num="3" :border='false'>
                <van-grid-item>
                    <p slot="default" class="hy">58</p>
                    <p>伞下会员</p>
                </van-grid-item>
                <van-grid-item text="文字">
                    <p slot="default" class="hy">19</p>
                    <p>直推会员</p>
                </van-grid-item>
                <van-grid-item>
                    <p slot="default" class="hy">27600</p>
                    <p>累计收益(元)</p>
                </van-grid-item>
               
            </van-grid>
        </div>
        <div class="mt10">
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>直推会员</span>
            </div>
            <ul class="zthy">
                <li>
                    <div class="team-user yqr">
                        <div class="fl mt10"><img src="../assets/image/user02.png" alt=""></div>
                        <div class="user-n mt10">
                            <span class="c-ff5000 f12">
                                <img src="../assets/image/vip4.png" alt="">
                                刘瑞琪
                            </span><br>
                            <span class="f12">
                                <img src="../assets/image/phone2.png" alt="">
                                1876888888
                            </span>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="team-user yqr">
                        <div class="fl mt10"><img src="../assets/image/user02.png" alt=""></div>
                        <div class="user-n mt10">
                            <span class="c-ff5000 f12">
                                <img src="../assets/image/vip4.png" alt="">
                                刘瑞琪
                            </span><br>
                            <span class="f12">
                                <img src="../assets/image/phone2.png" alt="">
                                1876888888
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
            
            
        </div>
        

    </div>

</template>

<script>

export default {
 
  data() {
    return {
    }
      
  },
  methods: {
  },
  

}
</script>

<style lang="less" scoped="scoped">
.mydirect.team{
    .team-user{
        position: relative;
        background: #2E81F3;
        padding: 10px;
        overflow: hidden;
        border-radius:12px;
        margin-top: 15px;
        .user-n{
            font-size: 14px;
            float: left;
            margin: 5px 0 5px 9px;
        }
        .user-n img{
            width: 18px;
            float: left;
            margin-top: 2px;
            margin-right: 5px;
        }
        
    }
    .team-user.yqr{
        padding: 0;
        margin:0 10px;
        background: none;
    }
    .zthy li{
        width: 48%;
        background:#e0ecfe;
        border-radius:8px;
        padding: 5px 0;
        float: left;
        margin-right:4%;
    }
    .zthy li:nth-child(2n){
        margin-right: 0;
    }
    .team-number{
        width:100%;
        // height:114px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        opacity:1;
        border-radius:12px;
        padding: 15px;
        margin-top:20px;
        box-sizing: border-box;
        .hy{
            font-size: 22px;
            color: #2E81F3;
        }
        .rule{

        }
    }
   
}


</style>
