import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login' //登录
import register from '@/components/register' //注册
import certification from '@/components/certification' //实名认证
import Changepassword from '@/components/Changepassword' //修改密码
import home from '@/components/home' //首页
import Upgrade from '@/components/Upgrade' //升级
import User from '@/components/User' //我的
import Maintain from '@/components/Maintain' //保养卷详情页
import GoodsOrder from '@/components/GoodsOrder' //商品订单
import Changeinfo from '@/components/Changeinfo' //修改信息
import FuelCard from '@/components/FuelCard' //加油卡详情页
import AddTo from '@/components/AddTo' //添加剂详情页
import Myteam from '@/components/Myteam' //团队
import CardOrder from '@/components/CardOrder' //油卡订单
import MaintainCard from '@/components/MaintainCard' //我的保养卡
import MyDirectPush from '@/components/MyDirectPush' //团队直推
import Atm from '@/components/Atm' 
import CreditCard from '@/components/CreditCard' //绑定银行卡
import DetailsOfBalance from '@/components/DetailsOfBalance' //账户明细
import Mybalance from '@/components/Mybalance' //我的余额
import MyBankCard from '@/components/MyBankCard' //我的银行卡
import ReceivingAddress from '@/components/ReceivingAddress' //收货地址
import UserAddressEdit from '@/components/UserAddressEdit' //新增收货地址
import userBankAccountEdit from '@/components/userBankAccountEdit' //修改收货地址
import Recharge from '@/components/Recharge' 
import Store from '@/components/Store' //门店
import OilCardOrder from '@/components/OilCardOrder' //油卡订单
import MemberAgreement from '@/components/MemberAgreement' //会员协议
import Notice from '@/components/Notice' //公告
import noticeList from '@/components/noticeList' //公告
import download from '@/components/Download' //app下载
import Cooperation from '@/components/Cooperation' //
import Customer from '@/components/Customer' //
import sdfds from '@/components/sdfds'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      meta:{tabbar: true,requireAuth: true,},
      component: home
    },
    {
      path: '/sdfds',
    
      component: sdfds
    },
    {
      path: '/home',
      name:'home',
      meta:{tabbar: true,requireAuth: true,},
      component: home,
      
    },
    {
      path: '/login', 
      name:'login',
      component: login
    },
    {
      path: '/register',
      name:'register',
      component: register
    },
    {
      path: '/certification',
      name:'certification',
      component: certification
    },
    {
      path: '/Changepassword',
      name:'Changepassword',
      component: Changepassword
    },
    {
      path: '/Upgrade',
      name:'Upgrade',
      meta:{title:'升级代理',header:true,requireAuth: true,},
      component: Upgrade
    },
    {
      path: '/Maintain',
      name:'Maintain',
      meta:{requireAuth: true,},
      component: Maintain
    },
    {
      path: '/GoodsOrder',
      name:'GoodsOrder',
      meta:{title:'商品订单',header:true,requireAuth: true,},
      component: GoodsOrder
    },
    {
      path: '/Changeinfo',
      name:'Changeinfo',
      meta:{title:'修改信息',header:true,requireAuth: true,},
      component: Changeinfo
    },
    {
      path: '/FuelCard',
      name:'FuelCard',
      meta:{requireAuth: true,},
      component: FuelCard
    },
    {
      name:'AddTo',
      path: '/AddTo/:id',
      meta:{requireAuth: true,},
      component: AddTo
    },
    {
      path: '/Myteam',
      name:'Myteam',
      component: Myteam,
      meta:{tabbar: true,requireAuth: true,},
    },
    {
      path: '/user/order/list/:active',
      name:'CardOrder',
      props: true, 
      meta:{title:'商品订单',header:true,requireAuth: true,},
      component: CardOrder,
    },
    {
      path: '/MaintainCard',
      name:'MaintainCard',
      meta:{title:'我的保养卡',header:true,requireAuth: true,},
      component: MaintainCard,
    },
    {
      path: '/MyDirectPush',
      name:'MyDirectPush',
      component: MyDirectPush,
      meta:{tabbar: true,requireAuth: true,},
    },
    {
      path: '/Atm',
      name:'Atm',
      meta:{requireAuth: true,},
      component: Atm,
    },
    {
      path: '/CreditCard/edit/:id',
      name:'CreditCard',
      meta:{title:'绑定银行卡',header:true,requireAuth: true,},
      component: CreditCard,
    },
    {
      path: '/DetailsOfBalance',
      name:'DetailsOfBalance',
      meta:{title:'账户明细',header:true,requireAuth: true,},
      component: DetailsOfBalance,
    },

    {
      path: '/Mybalance',
      name:'Mybalance',
      meta:{title:'我的余额',header:true,requireAuth: true,},
      component: Mybalance,
    },
    {
      path: '/MyBankCard',
      name:'MyBankCard',
      meta:{title:'我的银行卡',header:true,requireAuth: true,},
      component: MyBankCard,
    },
    {
      path: '/ReceivingAddress',
      name:'ReceivingAddress',
      meta:{title:'收货地址',header:true,requireAuth: true,},
      component: ReceivingAddress,
    },
    {
      path: '/user/address/edit/:addressId', 
      name: 'addressEdit',
      component:UserAddressEdit,
      meta:{title:'地址详情',header:true,requireAuth: true,},
    },
    {
      path: '/user/bankAccount/edit/:id', 
      name: 'userBankAccountEdit',
      component:userBankAccountEdit,
      meta:{title:'地址详情',header:true,requireAuth: true,},
    },
    {
      path: '/Recharge',
      name:'Recharge',
      component: Recharge,
      meta:{requireAuth: true,},
    },
    {
      path: '/User',
      name:'User',
      meta:{tabbar: true,requireAuth: true,},
      component: User
    },
    {
      path: '/Store',
      name:'Store',
      component: Store,
      meta:{tabbar: true,requireAuth: true,},
    },
    {
      path: '/OilCardOrder',
      name:'OilCardOrder',
      component: OilCardOrder,
      meta:{title:'油卡订单',header:true,requireAuth: true,},
    },
    {
      path: '/MemberAgreement',
      name:'MemberAgreement',
      component: MemberAgreement,
      meta:{title:'会员协议',header:true,requireAuth: true,},
    },
    {
      path: '/noticeList/:id',
      name:'noticeList',
      component: noticeList,
      meta:{title:'公告详情',header:true,requireAuth: true,},
    },
    {
      path: '/Notice',
      name:'Notice',
      component: Notice,
      meta:{title:'公告',header:true,requireAuth: true,},
    },
    {
      path: '/download',
      name:'download',
      component: download,
    },
    {
      path: '/Cooperation',
      name:'Cooperation',
      component: Cooperation,
    },
    {
      path: '/Customer',
      name:'Customer',
      component: Customer,
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
     let token = localStorage.getItem('Authorization'); 
     if (token === null || token === '') { //判断当前的token是否存在
        router.push({name: 'login', query: {redirect: to.name}});
     } else {
       next();
     }
  }
  else {
      next();
  }
});
 

export default router;
