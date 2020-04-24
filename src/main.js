// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//mock
require('./mock/mock.js')

//axios
import Axios from 'axios'
Vue.prototype.Axios = Axios




Vue.config.productionTip = false

import { Button,Form,Field,Radio,RadioGroup,Tabbar,TabbarItem,Swipe,SwipeItem,Grid,GridItem,Image,NavBar,Cell,Row,Col,Icon,Card,AddressList,Popup,Tab,Tabs,CellGroup} from 'vant'
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
//css
import './assets/css/style.css'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
