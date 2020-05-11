<template>
    <div class="store all pt20">
        <h2 class="md">门店</h2>
        <div class="fr">
            <van-icon name="location" color="#2E81F3" size="20"/>
            <span class="city">{{LocationCity}}</span>
        </div>
        <input v-model="latitude" hidden/>
        <input v-model="longitude" hidden/>
        <div class="store-main">
            <div class="store-list" v-for="item in storeList" :key="item.value">
                <van-cell center :title="item.title">
                    <div slot="icon" class="mr10"><img :src="item.picture" alt=""></div>
                    <div slot="label">
                        <p>{{item.desc}}</p>
                        <p>
                            <span>门店评分<i>{{item.score}}</i></span>
                            <span>接单量<span class="c-2e81f3">{{item.orders}}</span></span>
                        </p>
                    </div>
                    <p slot="right-icon">1.8km</p>
                </van-cell>
                <van-cell center title="VIP专享折扣保养">
                    <p slot="label">已有<span>{{item.person}}</span>人到店使用</p>
                    <van-button type="primary" size="small" slot="right-icon" color="linear-gradient(to right, #2E81F3, #4CB1FF)">电话预约</van-button>
                </van-cell>
            </div>
            
        </div>
        
    </div>
</template>

<script>

export default {
 
    data() {
        return {
            LocationCity:'正在定位',
            longitude:'',
            latitude:'',
            storeList:[
                {
                    title:'油乐嘉·曼哈顿店',
                    picture:require('../assets/image/store.png'),
                    desc:'郑州市金水区燕庄曼哈顿18号楼',
                    score:'xxxx',
                    orders:1556,
                    person:20,

                },
                {
                    title:'油乐嘉·曼哈顿店',
                    picture:require('../assets/image/store.png'),
                    desc:'郑州市金水区燕庄曼哈顿18号楼',
                    score:'xxxx',
                    orders:1556,
                    person:20,

                }
            ]
        }
        
    },
    mounted() {
        this.city() 
    },
    methods: {
        city(){    //定义获取城市方法
            const geolocation = new BMap.Geolocation();
            var _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                console.log(position)
                let city = position.address.city;             //获取城市信息
                let province = position.address.province;    //获取省份信息
                let lat = position.point.lat;             //获取城市信息
                let lng = position.point.lng;     //获取省份信息
                _this.LocationCity = city;
                _this.latitude = lat;
                _this.longitude = lng;
                var params={
                    lat:_this.latitude,
                    lng:_this.longitude,
                }
                _this.$axios.post('api/stores',params).then(res => {
                    if (res.status != 200) return
                    console.log(res);
                }).catch( error=>{
                　　console.log(error);
                });
            }, function(e) {
                _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});   
           

            
        }

        
        
    },
  

}
</script>

<style lang="less" scoped="scoped">
.store{
    .md{
        display: inline-block
    }
    .city{
        margin-top: -22px;
    display: block;
    margin-left: 21px;

    }
    .store-main{
        margin-top: 30px;
    }
    .store-list{
        width:100%;
        height:172px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        opacity:1;
        border-radius:8px;
        margin-bottom: 20px;
    }
}


</style>
