<template>
    <div class="mydirect team all pt20">
        <h2>团队</h2>
        <div class="team-user">
            <div class="fl"><img :src="Userdata.avatar" alt="" class="user-m"></div>
            <div class="fl mt10">
                <p class="user-n c-ff5000 f14">
                    <img src="../assets/image/vip.svg" alt="">
                    <i class="vip_num">{{Userdata.level_id}}</i>
                    <span>{{Userdata.name}}</span>
                </p>
                <p class="ml10 c-fff">{{Userdata.mobile}}</p>
            </div>
        </div>
        <div class="team-number">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>团队人数</span>
                <span class="f18 ml5 c-2e81f3">{{teamUser.undernum}}</span>
            </div>
            <van-grid :column-num="3" :border='false'>
                <van-grid-item>
                    <p slot="default" class="hy">{{teamUser.undernum}}</p>
                    <p>伞下会员</p>
                </van-grid-item>
                <van-grid-item text="文字">
                    <p slot="default" class="hy">{{teamUser.directvip}}</p>
                    <p>直推会员</p>
                </van-grid-item>
                <van-grid-item>
                    <p slot="default" class="hy">{{teamUser.earnings}}</p>
                    <p>累计收益(元)</p>
                </van-grid-item>
               
            </van-grid>
        </div>
        <div class="clear"></div>
        <div class="mt10">
            <div class="title-s">
                <span class="fl f17 fb"><i class="line"></i>直推会员</span>
            </div>
            <ul class="zthy">
                <li v-for="(item, index) in directPushList" :index="index" :key="item.id">
                    <div class="team-user yqr">
                        <div class="yqr-t"><img :src="item.avatar" alt="" class="yqr-m"></div>
                        <div class="user-n mt10">
                            <span class="c-ff5000 f12">
                                <img src="../assets/image/vip.svg" alt="">
                                <i class="vip_num">{{item.level_id}}</i>
                                <span style="display: block;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.name}}</span>
                                
                            </span>
                            <div class="f12 mt5">
                                <img src="../assets/image/phone2.png" alt="" class="phone">
                                <span style="display: block;overflow-wrap: break-word;">{{item.mobile}}</span>
                            </div>
                        </div>
                    </div>
                </li>
                
            </ul>
            <div class="clear"></div>
            
        </div>
        

    </div>

</template>

<script>

export default {
 
    data() {
        return {
            teamUser:{},
            directPushList:[],
            Userdata:{},
        }
        
    },
    created(){
        this.initdata()
    },
    methods: {
        initdata(){
            this.$axios.post('api/user/team').then(res => {
                if (res.status != 200) return
                this.teamUser = res.data.data;
                this.directPushList=res.data.data.user
                this.Userdata=res.data.data.data
                
            }).catch( error=>{
            　　
            });
        }

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
        .user-m{
            width: 68px;
            border-radius: 100px;
        }
        .user-n{
            font-size: 14px;
            float: left;
            position: relative;
            margin: 5px 0 5px 9px;
        }
        .user-n img{
            width: 20px;
            float: left;
            // margin-top: 2px;
            margin-right: 5px;
        }
        .vip_num{
            position: absolute;
            top: 5px;
            left: 14px;
            color: #ff5000;
            font-size: 12px;
            -webkit-text-stroke: .5px #f7e9da;
        }
        
    }
    .team-user.yqr{
        padding: 0;
        margin:0 10px;
        background: none;
        .user-n{
            float: right;
            width: 64%;
            margin: 10px 0 0 0;
        }
        .yqr-m{
            width:100%;
            border-radius: 100px;
        }
        .yqr-t{
            width: 32%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        .phone{
            width: 19px;
        }

    }
    .zthy li{
        width: 48%;
        background:#e0ecfe;
        border-radius:8px;
        padding: 5px 0;
        float: left;
        margin-right:4%;
        margin-bottom: 4%;
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
    }
   
}


</style>
