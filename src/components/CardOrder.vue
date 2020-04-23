<template>
    <div class="cardorder all">
        <van-tabs v-model="active" :border='false' line-height='0' title-active-color='#2E81F3'>
            <van-tab title="待发货">
                <div class="card-list" v-for="item in sendList" :key="item.value">
                    <p>有任何问题请联系客服<span class="fr c-999">46431534341157</span></p>
                    <van-card
                    :num="item.num"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.thumb"
                    />
                    <div class="card-btn"><van-button round block plain type="info" size="small" >联系客服</van-button></div>
                    <div class="clear"></div>
                </div>
                
            </van-tab>
            <van-tab title="待收货">
                <div class="card-list" v-for="item in takeList" :key="item.value">
                    <p>有任何问题请联系客服<span class="fr c-999">46431534341157</span></p>
                    <van-card
                    :num="item.num"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.thumb"
                    />
                    <p style="color:#666">快递单号：<span>65461561615337</span></p>
                    <div class="card-btn"><van-button round block type="info" size="small" color="linear-gradient(to right, #2E81F3, #4CB1FF)">确认收货</van-button></div>
                    <div class="card-btn"><van-button round block plain type="info" size="small" >联系客服</van-button></div>
                    <div class="clear"></div>
                </div>
            </van-tab>
            <van-tab title="已完成">
                <div class="card-list" v-for="item in doneList" :key="item.value">
                    <p>有任何问题请联系客服<span class="fr c-ff5000">已完成订单</span></p>
                    <van-card
                    :num="item.num"
                    :price="item.price"
                    :desc="item.desc"
                    :title="item.title"
                    :thumb="item.thumb"
                    />
                    <div class="title-s" style="margin-bottom:0;">
                        <span class="fl f17 fb"><i class="line"></i>商品详情</span>
                    </div>
                    <van-cell-group>
                        <van-cell title="订单" :value="item.order" />
                        <van-cell title="下单手机号" :value="item.orderPhone" />
                        <van-cell title="下单时间" :value="item.orderTime" />
                        <van-cell title="快递单号" :value="item.oddNumber" />
                    </van-cell-group>
                    <van-cell-group v-if="item.oilCard !== 0">
                        <van-cell title="油卡姓名" :value="item.cardName" />
                        <van-cell title="手机号" :value="item.cardPhone" />
                        <van-cell title="油卡卡号" :value="item.cardNumber" />
                    </van-cell-group>
                    <div class="card-btn"><van-button round block type="info" size="small" color="linear-gradient(to right, #2E81F3, #4CB1FF)">收起详情</van-button></div>
                    <div class="clear"></div>
                </div>
            </van-tab>
        </van-tabs>
        
    </div>
</template>

<script>

export default {
 
  data() {
    return {
        active:0,
        doneList:[
            {
                oilCard:0,
                num:'2' ,
                price:'149.00',
                desc:'一份',
                title:'油乐嘉植物燃油添加剂',
                thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',
                order:'1932 1513 1214 1233',
                orderPhone:'16515153689',
                orderTime:'2020-04-14 10:26',
                oddNumber:'65461561615337'
                
            },
            {
                oilCard:1,
                num:'2' ,
                price:'149.00',
                desc:'一份',
                title:'油乐嘉植物燃油添加剂',
                thumb:'https://img.yzcdn.cn/vant/ipad.jpeg',
                order:'1932 1513 1214 1233',
                orderPhone:'16515153689',
                orderTime:'2020-04-14 10:26',
                oddNumber:'65461561615337',
                oilCard:1,
                cardName:'刘瑞琪',
                cardPhone:'16515153689',
                cardNumber:'1654 6416 9884 7987',
            }
        ],
        takeList:[
            {
                num:'2' ,
                price:'149.00',
                desc:'一份',
                title:'油乐嘉植物燃油添加剂',
                thumb:'https://img.yzcdn.cn/vant/ipad.jpeg', 
                order:'46431534341157' 
            }
        ],
        sendList:[
            {
                num:'2' ,
                price:'149.00',
                desc:'一份',
                title:'油乐嘉植物燃油添加剂',
                thumb:'https://img.yzcdn.cn/vant/ipad.jpeg', 
                order:'46431534341157',
                oddNumber:'65461561615337',
            }
        ]
        
    }
      
  },
  methods: {
    
    
    
  },
  

}
</script>

<style lang="less" scoped="scoped">
.cardorder{
    .card-list{
        width:100%;
        // height:428px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        border-radius:8px;
        padding:15px;
        box-sizing: border-box;
        margin-bottom: 15px;
        .van-card{
            background: #fff;
        }
        .card-btn{
            width: 90px;
            float: right;
            margin-top:15px;
            margin-left: 15px;
        }
        .van-cell__value{
            font-size: 12px;
        }

    }
}


</style>
