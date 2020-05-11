<template>
<div>

<div>{{LocationCity}}</div> 
<input v-model="mapText" />
<input v-model="latitude" />
<input v-model="longitude" />
</div>
    
</template>

<script>
import {map} from '../assets/map/map.js'
export default {
     data(){
             return{
                      
                  
                    zoom: 15,
                    mapText:'',
                    longitude:'',
                    latitude:'',
                    LocationCity:"正在定位"
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
                }, function(e) {
                    _this.LocationCity = "定位失败"
                }, {provider: 'baidu'});       
            }
        }
}
</script>
