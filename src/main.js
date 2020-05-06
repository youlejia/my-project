// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'


//Vuelidate
import VueResource from 'vue-resource'
Vue.use(VueResource)

//mock
//require('./mock/mock.js')

//axios
import axios from 'axios'
Vue.prototype.$axios = axios;




Vue.config.productionTip = false

import { Button,Form,Field,Radio,RadioGroup,Tabbar,TabbarItem,Swipe,SwipeItem,Grid,GridItem,Image,NavBar,Cell,Row,Col,Icon,Card,AddressList,Popup,Tab,Tabs,CellGroup,Toast,Uploader,List,Panel,Picker } from 'vant'
Vue.use(Button)
Vue.use(Form)
Vue.use(Field)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Grid).use(GridItem);
Vue.use(Image);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Card);
Vue.use(AddressList);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(CellGroup);
Vue.use(Toast);
Vue.use(Uploader);
Vue.use(List);
Vue.use(Panel);
Vue.use(Picker);

// Vue.use(AddressEdit);
//css
import './assets/css/style.css'






// 请求拦截器
axios.interceptors.request.use( 
  config => {
    // Toast.loading({
    //   mask: true,
    //   message: '加载中...'
    // });
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    } 
    return config; 
  }, 
  error => {  
   return Promise.error(error); 
})
// 响应拦截
axios.interceptors.response.use(response => {
  
  return response
}, error => {
  const res = error.response
  if (res.status === -404) Toast(res.msg)
  if (res.status === 423) router.push('/close')
  if (res.status === 429) {
    let resetTime = res.headers['x-ratelimit-reset']
    Toast('尝试次数太多，请 ' + dateFormat(resetTime, 'HH:mm:ss') + ' 后操作')
  }
  if (res.status === 430) {
    Toast('账号已冻结')
    setTimeout(() => {
      router.push('/login')
    }, 1000);
  }
  if (res.status === 401) router.push('/login')
  if (res.status === 422 && res.data) {
    let error
    if (res.data.error) {
      error = res.data.error
    } else {
      let errors = res.data.errors
      for (var key in errors) {
        error = errors[key][0]
        break
      }
    }
    if (error) Toast(error)
  }
  return res
  // return Promise.resolve(error.response)
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
