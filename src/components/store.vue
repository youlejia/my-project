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
                <van-cell center :title="item.name">
                    <div slot="icon" class="mr10"><img :src="item.image_display" alt="" class="img"></div>
                    <div slot="label">
                        <p>{{item.addr}}</p>
                        <div>
                            <span class="fl">门店评分</span>
                            <div>
                                <!-- <i v-for="(num,index) in 5" :key="index" class="start"> 
                                    <img :src='data>=index?ling:bu' alt="">
                                </i> -->
                                <span class="c-2e81f3 mr5">{{item.star_show}}.0</span>
                                <span>接单量<span class="c-2e81f3">{{item.order_quantity}}</span></span>
                            </div>
                        </div>
                            
                            
                        
                    </div>
                    <p slot="right-icon">{{item.juli}}km</p>
                </van-cell>
                <van-cell center title="VIP专享折扣保养">
                    <!-- <p slot="label">已有<span>{{item.person}}</span>人到店使用</p> -->
                            <a :href="'tel:' + item.phone" class="phone-btn">电话预约</a>
                    <!-- <van-button type="primary" size="small" slot="right-icon" color="linear-gradient(to right, #2E81F3, #4CB1FF)">电话预约</van-button> -->
                </van-cell>
            </div>
            
        </div>
        <div id="allmap"></div>
    </div>
</template>

<script>
// import img from '../assets/image/xingX.png'
// import imgB from '../assets/image/xingB.png'
export default {
   
    data() {
        return {
            LocationCity:'正在定位',
            longitude:'',
            latitude:'',
            storeList:[],
            data:'3',
            // bu:imgB,
            // ling:img
           
        }
        
    },
   mounted() {
        this.city() 
    },
   
    methods: {
        city(){ //定义获取城市方法

        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        var _this = this;
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        var geolocation = new BMap.Geolocation();
        if (isAndroid) {
           // 开启SDK辅助定位
            geolocation.enableSDKLocation();
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    _this.LocationCity = r.address.city;
                    _this.latitude = r.point.lat;
                    _this.longitude = r.point.lng;
                    // alert(_this.longitude)
                    // alert( _this.latitude)
                    var params={
                        lat:_this.latitude,
                        lng:_this.longitude,
                    }
                    _this.$axios.post('api/stores',params).then(res => {
                        if (res.status != 200) return
                        _this.storeList = res.data.data
                    }).catch( error=>{
                    　　console.log(error);
                    });
                }
                else {
                    alert('failed'+this.getStatus());
                }        
            });
            

        }
        if (isIOS) {
            geolocation.getCurrentPosition(function(r){
                if(this.getStatus() == BMAP_STATUS_SUCCESS){
                    var mk = new BMap.Marker(r.point);
                    map.addOverlay(mk);
                    map.panTo(r.point);
                    _this.LocationCity = r.address.city;
                    _this.latitude = r.point.lat;
                    _this.longitude = r.point.lng;
                    var params={
                        lat:_this.latitude,
                        lng:_this.longitude,
                    }
                    _this.$axios.post('api/stores',params).then(res => {
                        if (res.status != 200) return
                        _this.storeList = res.data.data
                    }).catch( error=>{
                    　　console.log(error);
                    });
                }
                else {
                    alert('failed'+this.getStatus());
                }        
            });

        }
            
            // const geolocation = new BMap.Geolocation();
            
            // geolocation.getCurrentPosition(function getinfo(position){
            //     let city = position.address.city;             //获取城市信息
            //     let province = position.address.province;    //获取省份信息
            //     let lat = position.point.lat;             //获取城市信息
            //     let lng = position.point.lng;     //获取省份信息
            //     _this.LocationCity = city;
            //     _this.latitude = lat;
            //     _this.longitude = lng;
            //     alert(lat)
            //     alert(lng)
            //     var params={
            //         lat:_this.latitude,
            //         lng:_this.longitude,
            //     }
            //     _this.$axios.post('api/stores',params).then(res => {
            //         if (res.status != 200) return
            //         _this.storeList = res.data.data
            //     }).catch( error=>{
            //     　　console.log(error);
            //     });
            // }, function(e) {
            //     _this.LocationCity = "定位失败"
            // }, {provider: 'baidu'});   
           

            
        },
         
        
        
    }
  

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
        // height: 139px;
        padding-bottom: 10px;
        padding-top: 5px;
        background:rgba(255,255,255,1);
        box-shadow:0px 3px 6px rgba(46,129,243,0.32);
        opacity:1;
        border-radius:8px;
        margin-bottom: 20px;
        .img{
            width: 58px;
            height: 58px;
        }
        .start{
            width: 10px;
            float: left;
            margin-top: 5px;
        }
        .phone-btn{
            float: right;
            width: 64px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fff;
            background: linear-gradient(to right, rgb(46, 129, 243), rgb(76, 177, 255));
        }
    }
}


</style>
