<template>
  <div id="app">
    <div class="header-bar" v-if="$route.meta.header">
      <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="main">
      <router-view/>
    </div>
    <div class="footer-bar" v-if="$route.meta.tabbar" >
      <van-tabbar v-model="active" active-color="#333333" inactive-color="#999" route>
        <van-tabbar-item to="/">
          <span>主页</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active : icon.inactive" />
        </van-tabbar-item>
        <van-tabbar-item to='/Store'>
          <span>门店</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active2 : icon.inactive2" />
        </van-tabbar-item>
        <van-tabbar-item to='/Myteam'>
          <span>团队</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active3 : icon.inactive3" />
        </van-tabbar-item>
        <van-tabbar-item to='/User'>
          <span>我的</span>
          <img slot="icon" slot-scope="props" :src="props.active ? icon.active4 : icon.inactive4" />
        </van-tabbar-item>
      </van-tabbar>

    </div>
      
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 0,
      icon: {
        active: require("./assets/image/nav_icon01_on.svg"),
        inactive: require("./assets/image/nav_icon01.svg"),
        active2: require("./assets/image/nav_icon02_on.svg"),
        inactive2: require("./assets/image/nav_icon02.svg"),
        active3: require("./assets/image/nav_icon03_on.svg"),
        inactive3: require("./assets/image/nav_icon03.svg"),
        active4: require("./assets/image/nav_icon04_on.svg"),
        inactive4: require("./assets/image/nav_icon04.svg"),
      }
    };
  },
  computed:{
	  title() {
      return this.$route.meta.title ? this.$route.meta.title : ''
    }
  },
  
  methods: {
   
    onClickLeft(){
      history.back();
    }
  }

}
</script>

<style>
body{
  height: 100%;
  min-height: 100%;
  background: #fff;
}
#app{
  background: #fff;
  /* height: 100vh; */
}
.all{
  width: 90%;
  margin: 0 auto;
  padding-bottom:60px;
}
.main{
  position: relative;
}
.footer-bar ul{
  left: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  background-color: #fff;
  width: 100%;
  height: 50px;
}
.footer-bar ul li{
  -webkit-flex:1; 
  flex:1;
  padding-top: 5px;
  text-align: center;
}
.footer-bar ul li .active{
  color:blue
}
.footer-bar ul li .icon{
  width: 24px;
  margin: 0 auto;
}
.footer-bar .van-tabbar-item__icon img{
  height: 20px;
}
</style>
