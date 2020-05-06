<template>
  <div class="bank mall-cell">
    
	  <van-radio-group v-model="default_bank" @change="setDefaultBank">
		  <van-cell-group v-for="item in bankList" :key="item.id" class="bankGroup" :border='false'>
				<van-cell :border='false'>
					<div class="time_count">
						<span></span>
						{{item.created_at}}
					</div>
					<van-radio
						slot="right-icon"
						icon-size="14px"
						:name="item.id" >
						<span :class="item.is_default && 'red'">{{item.is_default ? ' 默认账户' : ' 设为默认'}}</span>
					</van-radio>
					
				</van-cell>
			 	<div class="card">
					<img src="../assets/image/card.png" />
					<div class="card_yw">EuroAd</div>
					<div class="card_qh" @click="deleteBank(item.id)">解绑银行卡</div>
					<div class="card_cardNo">{{item.card_no}}</div>
					<div class="card_name">{{item.real_name}}</div>
					<div class="card_cardName">{{item.bank}}</div>
				</div>
				
			
			</van-cell-group>
		</van-radio-group>
		
		<div class="card_add">
           <!-- <van-icon name="plus" /> -->
           <span class="add_name" @click="setNewBank">添加银行卡</span>
        </div>
	</div>
</template>

<script>


export default {

  data() {
    return {
      default_bank: 0,
      firstSet: true,
      bankList: [],
    };
  },

  created(){
    this.initData();
  },

  methods: {
    initData() {
		this.$axios.post('api/bank').then(res=>{
			if (res.status != 200) return
			this.setBankList(res.data)
		})
		.catch( error=>{
	　　　　console.log(error);
	　　});
	},
    setBankList(data) {
      this.firstSet = true
      this.bankList = data.data
      this.default_bank = data.attributes.default
      this.$nextTick(() => {
        this.firstSet = false
      });
    },
    setDefaultBank(id){
      	if (this.firstSet) return
    	this.$axios.post('api/card/setDefault',{id: id}).then(res=>{
			if (res.status != 200) return
			this.setBankList(res.data)
		})
		.catch( error=>{
	　　　　console.log(error);
	　　});
    },
    deleteBank(id) {
      let that = this
      that.$dialog
        .confirm({ message: "确定删除此账户吗?", cancelButtonText: "再想想" })
        .then(async function() {
			that.$axios.post('api/card/remove',{id: id}).then(res=>{
				if (res.status != 200) return
        		that.setBankList(res.data)
			})
			.catch( error=>{
		　　　　console.log(error);
		　　});
       
        });
    },
    setNewBank() {
      this.$router.push({ name: "CreditCard", params: { id: -1 } });
    },
    redirectUrl(id) {
      let query = JSON.parse(JSON.stringify(this.$route.query));
      if (query.redirect) {
        query.cardId = id
        let redirectName = query.redirect
        delete query.redirect
        this.$router.push({name: redirectName, query: query})
      }
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.mall-cell{
	.bankGroup {
	margin-bottom: 10px;
	}
	.card_add{
		width: 90%;
		margin: 0 auto;
		line-height: 44px;
		margin-top: 30px;
		text-align: center;
		color: #FFFFFF;
		font-size: 15px;
		border-radius: 22px;
		background: linear-gradient(left, #4CB1FF, #2E81F3);
		box-shadow: 0 3px 6px rgba(24, 123, 43, 0.1);
		.add_name{
			margin-left: 5px;
		}
	}
	.time_count{
		font-size:11px;
		color: #999999;
		line-height: 20px;
		span{
			display: inline-block;
			width: 8px;
			height: 8px;
			background-color: #F487A6;
			border-radius: 50%;
		}
	}
	.card {
		position: relative;
		width: 94%;
		margin: 0 auto;
		margin-top: 8px;
		color: #FFFFFF;
		img {
			width: 100%;
			height: 168px;
		}
		.card_yw {
			position: absolute;
			top: 22px;
			left: 30px;
			font-size: 16px;
		}
		.card_qh {
			position: absolute;
			top: 22px;
			right: 30px;
			font-size: 11px;
		}
		.card_cardNo {
			position: absolute;
			top: 62px;
			left: 30px;
			font-size: 20px;
		}
		.card_name {
			position: absolute;
			top: 102px;
			left: 30px;
			font-size: 10px;
		}
		.card_cardName {
			position: absolute;
			top: 102px;
			left: 110px;
			font-size: 10px;
		}
	}
	.van-radio__label span{
		font-size: 12px;
	}
	

}

</style>