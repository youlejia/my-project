<template>
    <div class="team all pt20">
        <h2>团队</h2>
        <div class="team-user">
            <div class="fl"><img :src="Userdata.avatar" alt=""></div>
            <div class="fl mt10">
                <p class="user-n c-ff5000 f14">
                    <img src="../assets/image/user_vip.png" alt="">
                    {{Userdata.name}}
                </p>
                <p class="ml10 c-fff">{{Userdata.mobile}}</p>
            </div>
        </div>
        <div class="team-number">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>团队人数</span>
                <span class="f18 ml5 c-2e81f3">{{teamList.undernum}}</span>
            </div>
            <van-grid :column-num="3" :border='false'>
                <van-grid-item>
                    <p slot="default" class="hy">{{teamList.undernum}}</p>
                    <p>伞下会员</p>
                </van-grid-item>
                <van-grid-item to="/MyDirectPush">
                    <p slot="default" class="hy">{{teamList.directvip}}</p>
                    <p>直推会员</p>
                </van-grid-item>
                <van-grid-item>
                    <p slot="default" class="hy">{{teamList.earnings}}</p>
                    <p>累计收益(元)</p>
                </van-grid-item>
               
            </van-grid>
        </div>
        <div class="team-number">
            <div class="title-s" style="margin-bottom:0;">
                <span class="fl f17 fb"><i class="line"></i>我的工资</span>
                <span class="fr c-2e81f3">玩法规则<van-icon name="question" class='ml5'/></span>
            </div>
            <van-grid :column-num="2" :border='false'>
                <van-grid-item>
                    <p slot="default" class="hy">{{teamList.current_salary}}</p>
                    <p>目前工资(元)</p>
                </van-grid-item>
                <van-grid-item text="文字">
                    <p slot="default" class="hy">{{teamList.next_salary}}</p>
                    <p>下一档工资(元)</p>
                </van-grid-item>
            </van-grid>
            <p style="text-align: center;color: #666;">每月15日发放上月工资，请注意查收！</p>
        </div>
        <div class="team-number">
            <p class="fb f14">我的邀请人</p>
            <div class="team-user yqr">
                <div class="fl"><img :src="inviter.avatar" alt=""></div>
                <div class="user-n mt10">
                    <p class="c-ff5000 f14">
                        <img src="../assets/image/user_vip.png" alt="">
                        {{inviter.name}}
                    </p>
                    <p>
                        <img src="../assets/image/phone.png" alt="">
                        {{inviter.mobile}}
                    </p>
                </div>
            </div>
            
        </div>

    </div>

</template>

<script>

export default { 
    data() {
        return {
            inviter:{},
            teamList:{},
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
                this.teamList = res.data.data;
                this.Userdata=res.data.data.data
                this.inviter=res.data.data.inviter
            }).catch( error=>{
            　　
            });
        }

    },
}
</script>

<style lang="less" scoped="scoped">
.team{
    .team-user{
        position: relative;
        background: #2E81F3;
        padding: 10px;
        overflow: hidden;
        border-radius:12px;
        margin-top: 15px;
        .user-n{
            font-size: 14px;
            margin-left: 9px;
            margin-bottom: 10px;
            float: left;
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
        margin: 10px 0;
        background: none;
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
