<template>
    <!-- <div class="cardorder all">
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
        
    </div> -->
    <div class="cardorder all">
        <van-tabs
			sticky
			v-model="active"
			
			@click="handleTabClick"
		>
			<van-tab 
				v-for="tab in tabsItem"
			 	:title="tab.name" 
				:key="tab.type">
			</van-tab>
		</van-tabs>

		<van-list
            v-model="loading"
			:immediate-check="false"
            :offset="100"
            :finished="finished"
            @load="loadMore"
            v-if="items.length"
		>
            
            <div class="card-list mt20">
                <van-panel 
                v-for="(el, i) in items"
                class="order_list--panel"
                :key="i"
                :title="'订单号: ' + el.order_sn"
                   
                >
                    <van-card
                    v-for="(goods, goodsI) in el.orderItems"
                    :key="goodsI"
                    :title="goods.name"
                    desc=""
                    :num="goods.num"
                    :price="goods.price"
                    :thumb="goods.pic_url"
                
                    />
                    <p style="color:#666">快递单号：<span>65461561615337</span></p>
                    <component 
                        slot="footer" 
                        :is="'status' + el.status"
                        :reminder="el.is_can_reminder"
                        :isback="el.back_price>0 ? true : false"
                        @handle="actionHandle($event, i)"
				    />
            
		        </van-panel>

            </div>   
                	
		</van-list>
        
        <div v-else class='tc mt20'>抱歉,没有找到符合条件的订单</div>
    </div>

</template>

<script>
// import IsEmpty from "./items/is-empty";
import status1 from "./user/order/handle-status-1";
import status2 from "./user/order/handle-status-2";
import status3 from "./user/order/handle-status-3";
import status4 from "./user/order/handle-status-4";
import status6 from "./user/order/handle-status-6";
import loadMore from "../mixin/list-load-more";
import scrollFixed from "../mixin/scroll-fixed";
const STATUS_TEXT = {
  1: "待付款",
  2: "待发货",
  3: "待收货",
  4: "已签收",
  6: "交易关闭",
};

export default {
    
    mixins: [loadMore, scrollFixed],
    props: {
    active: {
        type: [String, Number],
        default: 0
        }
    },

    components: {
        status1,
        status2,
        status3,
        status4,
        status6,
    },
 
    data() {

        return {
           
            active:0,
            items: {},
            sta:"",
            loading: false,
            finished: false,
            tabsItem: [
                {
                name: "待发货",
                status: 2
                },
                {
                name: "待收货",
                status: 3
                },
                {
                name: "已完成",
                status: 4
                }
            ],
          
        
        }
      
    },
    watch: {
        $route: "resetInit"
    },
  
    created() {
        this.resetInit();
    
    },
    methods: {
        initData() {
            const i = this.active;
            console.log(i)
            const status = this.tabsItem[i].status;
            console.log(status)
            let params = {
                page: this.pages.currPage,
                status
            }
            this.$axios.post('api/order',params).then(res => {
                if (res.status != 200) return
                console.log(res.data.data.length)
                const items = res.data.data;
                const page = res.data.meta;
                this.items.push(...items);
               
                return page;
               
            }).catch( error=>{
            　　console.log(error);
            });
        },
        async receiptOrder(i) {
           
            var params={
                id:this.items[i].id
            }
            await this.$dialog.confirm({
                message: "请确认收到货物, 确认收货后无法撤销!"
            });
            this.$axios.post('api/order/confirm',params).then(res => {
                if (res.status != 200) return
                this.items[i].status = 4;
                this.$toast("已确认收货");
            }).catch( error=>{
            　　console.log(error);
            });
            
           
        },
        handleTabClick(index) {
            const status = this.tabsItem[index].status;
            this.$router.replace({name: "CardOrder",params: { active: status }});
         
        },
        actionHandle(handle, i) {
            this[handle] && this[handle](i);
        },
        
        
        
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
        overflow: hidden;
        .van-card{
            background: #fff;
            padding: 8px 0px;
        }
        .van-cell__value{
            font-size: 12px;
        }
        [class*=van-hairline]::after{
            border:none;
        }
        .van-cell{
            padding: 0;
        }
        .van-cell:not(:last-child)::after{
            border:none;
        }
        .van-panel__footer{
            padding: 8px 0;
        }

    }
}


</style>
