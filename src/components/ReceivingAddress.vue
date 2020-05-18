<template>
	<div class="receivingAddress">
		<van-radio-group v-model="default_address" @change="setDefaultAddress">
		<div class="address mt20" v-for="item in addressList" :key="item.id">
			<!-- <div class="time_count">
				<span></span> 2020/04/10 20:16
			</div> -->
			<div class="address_count" @click="redirectUrl(item.id)">
				<div class="count_img"><img src="../assets/image/shdz.png" alt="" /></div>
				<div class="address_dz">
					<div class="dz">{{item.province}}{{item.city}}{{item.county}}{{item.addressDetail}}</div>
					<div class="user_name"><span>{{item.name}}</span>{{item.tel}}</div>
				</div>
			</div>
			<van-cell-group>
				<van-cell>
					<van-radio 
					:name="item.id"
					slot="title">
					<span :class="item.is_default && 'red'">{{item.is_default ? ' 默认地址' : ' 设为默认'}}</span>
					</van-radio>
					
					<div>
						<router-link
							:to="{name: 'addressEdit', params: {addressId: item.id}}"
							style="margin-right: 10px;">
							<van-icon name="edit" />
							编辑
						</router-link>
						<span @click="deleteAddress(item.id)">
							<van-icon name="delete" />
							删除
						</span>
					</div>
				</van-cell>
			</van-cell-group>
		</div>
		</van-radio-group>
		<van-button class="bottom_btn" @click="setNewAddress" type="primary"  bottomAction color="#2E81F3">
			添加地址
		</van-button>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				addressList: [],
				default_address: 0,
				firstSet: true,
				addressList: [],
			}
		},
		created(){
			this.initData();
		},
		methods: {
		
			initData() {
				this.$axios.post('api/address').then(res => {
					if (res.status != 200) return
					this.setAddressList(res.data)
				}).catch( error=>{
                　　console.log(error);
                });
			},
			setAddressList(data) {
				this.firstSet = true
				this.addressList = data.data
				this.default_address = data.attributes.default
				this.$nextTick(() => {
					this.firstSet = false
				});
			},
			setDefaultAddress(id){
				if (this.firstSet) return
			
				this.$axios.post('api/address/setDefault',{id: id}).then(res => {
					if (res.status != 200) return
      				this.setAddressList(res.data)
				}).catch( error=>{
				　　console.log(error);
				});
			},
			redirectUrl(id) {
				let query = JSON.parse(JSON.stringify(this.$route.query));
				if (query.redirect) {
					query.addressId = id
					let redirectName = query.redirect
					delete query.redirect
					this.$router.push({name: redirectName, query: query})
				}
			},
			deleteAddress(id) {
				let that = this
				that.$dialog
					.confirm({ message: "确定删除此收货地址吗?", cancelButtonText: "再想想" })
					.then(async function() {
						that.$axios.post('api/address/remove ',{id: id}).then(res => {
							that.setAddressList(res.data)
							
						}).catch( error=>{
						　　console.log(error);
						});
					})
					
				
			},
			setNewAddress() {
				this.$router.push({ name: "addressEdit", params: { addressId: -1 } });
			},
			
	
		},
		
	}
</script>

<style lang="less" scoped="scoped">
	@font-face {
		font-family: 'ps';
		src: url('../assets/font/PingFangSC.ttf');
	}
	
	.receivingAddress {
		font-family: 'ps';
		.address {
			.time_count {
				width: 80%;
				margin: 0 auto;
				font-size: 11px;
				color: #999999;
				line-height: 35px;
				span {
					display: inline-block;
					width: 8px;
					height: 8px;
					background-color: #2793F3;
					border-radius: 50%;
				}
			}
			.address_count {
				width: 90%;
				margin: 0 auto;
				background: linear-gradient(left, #2791F3, #39D7FC);
				border-radius: 8px;
				color: #FFFFFF;
				position: relative;
				.count_img {
					display: inline-block;
					margin: 24px 12px 24px 21px;
					img {
						width: 32px;
						height: 30px;
					}
				}
				.address_dz {
					display: inline-block;
					position: absolute;
					top: 15px;
					.dz {
						font-size: 14px;
						font-weight: 600;
						line-height: 30px;
					}
					.user_name {
						font-size: 10px;
						span {
							margin-right: 10px;
						}
					}
				}
				/*.exit {
					position: absolute;
					right: 30px;
					top: 35px;
					font-size: 12px;
				}*/
			}
		}
		.exit_address{
			width: 80%;
			margin: 0 auto;
			margin-top: 15px;
			border-radius: 8px;
			box-shadow: 0 3px 6px rgba(71,136,255,0.5);
			padding: 10px 0;
			.address_title{
				width: 86%;
				margin: 10px auto;
				padding-left: 8px;
				border-left: 4px solid #2E81F3;
				font-size: 13px;
				color: #333333;
			}
			.address_c{
				width: 98%;
				margin: 0 auto;
				.van-field{
					font-size: 12px;
				}
			}
			.but{
				width: 86%;
				line-height: 42px;
				margin: 0 auto;
				margin-top: 15px;
				margin-bottom: 10px;
				border-radius: 21px;
				background: linear-gradient(left, #4CB1FF, #2E81F3);
				text-align: center;
				color: #FFFFFF;
				font-size: 13px;
				font-weight: 600;
			}
		}
		.addressadd {
			margin-top: 10px;
			.time_count {
				width: 80%;
				margin: 0 auto;
				font-size: 11px;
				color: #999999;
				line-height: 35px;
				span {
					display: inline-block;
					width: 8px;
					height: 8px;
					background-color: #2793F3;
					border-radius: 50%;
				}
			}
			.address_add {
				width: 90%;
				margin: 0 auto;
				background: linear-gradient(left, #2791F3, #39D7FC);
				border-radius: 8px;
				color: #FFFFFF;
				position: relative;
				.count_img {
					display: inline-block;
					margin: 24px 12px 24px 21px;
					img {
						width: 32px;
						height: 30px;
					}
				}
				.address_xz {
					position: absolute;
					top: 32px;
					left: 70px;
					font-size: 14px;
					font-weight: 600;
				}
			}
		}
		.popup{
			width: 80%;
			margin: 0 auto;
			border-radius: 8px;
			padding: 10px 0;
			.address_title{
				width: 86%;
				margin: 10px auto;
				padding-left: 8px;
				border-left: 4px solid #2E81F3;
				font-size: 13px;
				color: #333333;
			}
			.address_c{
				width: 98%;
				margin: 0 auto;
				.van-field{
					font-size: 12px;
				}
			}
			.but{
				width: 86%;
				line-height: 42px;
				margin: 0 auto;
				margin-top: 15px;
				margin-bottom: 10px;
				border-radius: 21px;
				background: linear-gradient(left, #4CB1FF, #2E81F3);
				text-align: center;
				color: #FFFFFF;
				font-size: 13px;
				font-weight: 600;
			}
		}
		.bottom_btn {
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%
		}
	}
</style>