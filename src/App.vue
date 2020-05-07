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
    <div class="footer-bar" v-if="$route.meta.tabbar">
      <ul>
        <li v-for="(item, index) in tabbar" @click="selectNav(item.title)" :key="index">
        <p class="icon"><img :src="isSelect === item.title ? item.url_one : item.url" alt="item.title"></p>
        <p :class="isSelect === item.title ? 'active' : ''">{{item.title}}</p>
        </li>
      </ul>

    </div>
      
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isSelect: '首页',
      tabbar: [
        {
          title: "首页",
          url: require("./assets/image/nav_icon01.png"),
          url_one: require("./assets/image/nav_icon01_on.png"),
        },
        {
          title: "门店",
          url: require("./assets/image/nav_icon02.png"),
          url_one: require("./assets/image/nav_icon02_on.png"),
        },
        {
          title: "团队",
          url: require("./assets/image/nav_icon03.png"),
          url_one: require("./assets/image/nav_icon03_on.png"),
        },
        {
          title: "我的",
          url: require("./assets/image/nav_icon04.png"),
          url_one: require("./assets/image/nav_icon04_on.png"),
        }
      ]
    };
  },
  computed:{
	  title() {
      return this.$route.meta.title ? this.$route.meta.title : ''
    }
  },
  mounted () {
  this.isSelect = sessionStorage.getItem('isSelect')
 },
  methods: {
    selectNav (title) {
      this.isSelect = title
      // this.isSelect = this.$route.name
      switch (title) {
      case '首页': this.$router.push('/home')
        break
      case '门店': this.$router.push('/Store')
        break
      case '团队': this.$router.push('/Myteam')
        break
      case '我的': this.$router.push('/User')
        break
      }
      sessionStorage.setItem('isSelect', this.isSelect)
    },
    onClickLeft(){
      history.back();
    }
  }

}
</script>

<style>
#app{
  background: #fff;
  /* height: 100vh; */
}
.all{
  width: 90%;
  margin: 0 auto;
  padding-bottom: 60px;
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
</style>
