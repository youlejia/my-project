<template>
   <div class="cardorder all">
        <van-tabs
			sticky
			v-model="activeName"
			
			@click="handleTabClick"
		>
			<van-tab 
				v-for="tab in tabsItem"
			 	:title="tab.name" 
                :name="tab.status"
				:key="tab.type">
			</van-tab>
		</van-tabs>

		
            
            <div class="card-list mt20" v-if="this.items.length">
                <van-panel 
                v-for="(el, i) in items"
                class="order_list--panel"
                :key="i"
                title="有任何问题请联系客服"
                :status="getStatusText(el.status)"  
                >
                    <van-card
                    v-for="(goods, goodsI) in el.orderItems"
                    :key="goodsI"
                    :title="goods.name"
                    desc=""
                    :num="goods.num"
                    :thumb="goods.pic_url"
                
                    >
                    <p slot="price" class="c-ff5000 f16">￥{{el.total}}</p>

                    </van-card>
                    <p style="color:#666">订单号：<span>{{el.order_sn}}</span></p>
                    <component 
                        slot="footer" 
                        :is="'status' + el.status"
                        :reminder="el.is_can_reminder"
                        :isback="el.back_price>0 ? true : false"
                        :phone="el.phone"
                        :updated_at="el.updated_at"
                        :ship_code="el.ship_code"
                        :oil_phone="el.oil_phone"
                        :oilcard_name="el.oilcard_name"
                        :oil_number="el.oil_number"
                        @handle="actionHandle($event, i)"
				    />
            
		        </van-panel>

            </div>   
                	
		
        
        <div v-else  class='tc mt20'>抱歉,没有找到符合条件的订单</div>
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
  2: "待发货",
  3: "待收货",
  4: "已签收",
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
            activeName:'',
            items: [],
            sta:"",
            page:1,
            loading: false,
            finished: false,
            tabsItem: [
                {
                name: "待发货",
                status: '2',
                },
                {
                name: "待收货",
                status: '3',
                },
                {
                name: "已完成",
                status: '4',
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
            this.activeName = i
            const status = i;
            let params = {
               
                status
            }
            this.$axios.post('api/order',params).then(res => {
                if (res.status != 200) return
                this.items = res.data.data;
                // const page = res.data.meta;
                // this.items = this.items.concat(res.data.data)
                // this.items.push(...items);
                // return page;
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
            this.$router.replace({name: "CardOrder",params: { active: index }});
        },
        getStatusText(status) {
            return STATUS_TEXT[status] || "";
        },
        actionHandle(handle, i) {
            this[handle] && this[handle](i);
        },
        
        
        
    },
  

}
</script>

<style lang="less" scoped="scoped">
.cardorder{
    .order_list--panel{
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
