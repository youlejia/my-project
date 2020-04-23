<template>
	<div class="maintainCard all">
        <div class="not-used mt10 mb20">
            <span class="f12 c-999"><i class="round"></i>2020/04/10 20:16</span>
            <div class="user-1 mt10">
                <span><i></i>VIP专享折扣保养券 - 209级</span>
                <button class="btn">使用</button>
            </div>
        </div>
        <div class="not-used blue mt10 mb20">
            <span class="f12 c-999"><i class="round"></i>2020/04/10 20:16</span>
            <div class="user-1 mt10">
                <span><i></i>VIP专享折扣保养券 - 209级</span>
                <button class="btn">使用</button>
            </div>
            <div class="kjxq">
                <div class="title-s" style="margin-bottom:0;">
                    <span class="fl fb"><i class="line"></i>卡券详情</span>
                </div>
                <van-cell-group>
                    <van-cell title="购买时间" value="2020/04/10 20:16" />
                    <van-cell title="卡券号" value="1657 3357 6864" />
                </van-cell-group>
            </div>
        </div>
        <div class="not-used green mt10 mb20">
            <span class="f12 c-999"><i class="round"></i>2020/04/10 20:16</span>
            <div class="user-1 mt10">
                <span><i></i>VIP专享折扣保养券 - 209级</span>
                <button class="btn" style="border:1px solid #FF5000;color:#FF5000;">已使用</button>
            </div>
        </div>
		
	</div>
</template>

<script>
	export default {
		name:"atm",
		data(){
			return{
				
			}
		},
		methods: {
			
		},
	}
</script>

<style lang="less" scoped="scoped">
.maintainCard{
    .not-used .round{
        width:7px;
        height:7px;
        display: block;
        background:rgba(254,133,41,1);
        border-radius:50%;
        opacity:1;
        float: left;
        margin: 6px 6px 0 10px;
    }
    .user-1{
        position: relative;
        width:100%;
        height:80px;
        line-height: 80px;
        color: #fff;
        background: linear-gradient(left, #FE8228, #FFCD43);
        opacity:1;
        border-radius:8px;
        i{
            width:34px;
            height:34px;
            border:4px solid rgba(255,255,255,1);
            border-radius:50%;
            display: block;
            float: left;
            margin: 18px 10px 0 15px;
        }
        .btn{
            width:54px;
            height:24px;
            border:1px solid rgba(255,255,255,1);
            border-radius:12px;
            line-height: 0;
            background: none;
            color: #fff;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(-25%,-50%);

        }
    }
    .not-used.blue .round{
        background:#2793F3;
    }
    .not-used.blue .user-1{
        background: linear-gradient(left, #2791F3, #39D7FC);
    }
    .kjxq{
        width:86%;
        // height:151px;
        margin-left:7%;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        border-radius:8px;
        margin-top: 15px;
        padding: 15px;
        box-sizing: border-box;
        .van-cell__value{
            font-size: 12px;
        }
    }
    .not-used.green .round{
        background:#35D6C7;
    }
    .not-used.green .user-1{
       background: linear-gradient(left, #35D6C7, #3FECB7);
    }

}
</style>