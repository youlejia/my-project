<template>
	<div class="maintainCard all">
        <div class="not-used mt10 mb20" v-for="(item,index) in listCard" :key="item.value">
            <span class="f12 c-999"><i class="round"></i>{{item.updated_at}}</span>
            <div class="user-1 mt10">
                <span><i><img src="../assets/image/byj.png" alt=""></i>{{item.title}}</span>
                <div class="btns">
                    <p class="btn" v-if="item.status==7">使用</p>
                    <p class="btn" v-else>已使用</p>
                    
                     <p class="btn" @click="details(index)">详情</p>
                </div>
            </div>
            <div class="kjxq" v-show="activeIndex===index">
                <div class="title-s" style="margin-bottom:0;">
                    <span class="fl fb"><i class="line"></i>卡券详情</span>
                </div>
                <van-cell-group>
                    <van-cell title="购买时间" :value="item.created_at" />
                    <van-cell title="卡券号" :value="item.card_coupons" />
                </van-cell-group>
            </div>
        </div>
		
	</div>
</template>

<script>
	export default {
		name:"atm",
		data(){
			return{
                id:this.$route.query.id,
                listCard:{},
                activeIndex: -1 
			}
        },
        mounted(){
            this.inData()
        },
		methods: {
            inData(){
                var params={
					id:this.id
				}
				this.$axios.post('api/user/main',params).then(res=>{
                    this.listCard= res.data.data.data;
					
				})
				.catch( error=>{
			　　　　console.log(error);
            　　});
            },
            details(index){
                  this.activeIndex = index;
            }

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
            display: block;
            float: left;
            margin:23px 10px 0 15px;
        }
        .btns{
            float: right;
            margin-top: 12px;
            text-align: center;
            margin-right: 8px;
            .btn{
                width:54px;
                height:24px;
                border:1px solid rgba(255,255,255,1);
                border-radius:12px;
                line-height:24px;
                margin-bottom: 8px;
            }
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