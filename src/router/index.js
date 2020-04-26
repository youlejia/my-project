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
import Recharge from '@/components/Recharge' 
import Store from '@/components/Store' //门店
import OilCardOrder from '@/components/OilCardOrder' //油卡订单
import MemberAgreement from '@/components/MemberAgreement' //会员协议
import Notice from '@/components/Notice' //公告
import download from '@/components/Download'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta:{tabbar: true},
      component: home
    },
    {
      path: '/home',
      meta:{tabbar: true},
      component: home,
      
    },
    {
      path: '/login', 
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/certification', 
      component: certification
    },
    {
      path: '/Changepassword',
      component: Changepassword
    },
    {
      path: '/Upgrade',
      meta:{title:'升级代理',header:true},
      component: Upgrade
    },
    {
      path: '/Maintain',
      component: Maintain
    },
    {
      path: '/GoodsOrder',
      meta:{title:'商品订单',header:true},
      component: GoodsOrder
    },
    {
      path: '/Changeinfo',
      meta:{title:'修改信息',header:true},
      component: Changeinfo
    },
    {
      path: '/FuelCard',
      component: FuelCard
    },
    {
      path: '/AddTo',
      component: AddTo
    },
    {
      path: '/Myteam',
      component: Myteam,
      meta:{tabbar: true},
    },
    {
      path: '/CardOrder',
      meta:{title:'油卡订单',header:true},
      component: CardOrder,
    },
    {
      path: '/MaintainCard',
      meta:{title:'我的保养卡',header:true},
      component: MaintainCard,
    },
    {
      path: '/MyDirectPush',
      component: MyDirectPush,
      meta:{tabbar: true},
    },
    {
      path: '/Atm',
      component: Atm,
    },
    {
      path: '/CreditCard',
      meta:{title:'绑定银行卡',header:true},
      component: CreditCard,
    },
    {
      path: '/DetailsOfBalance',
      meta:{title:'账户明细',header:true},
      component: DetailsOfBalance,
    },

    {
      path: '/Mybalance',
      meta:{title:'我的余额',header:true},
      component: Mybalance,
    },
    {
      path: '/MyBankCard',
      meta:{title:'我的银行卡',header:true},
      component: MyBankCard,
    },
    {
      path: '/ReceivingAddress',
      meta:{title:'收货地址',header:true},
      component: ReceivingAddress,
    },
    {
      path: '/Recharge',
      component: Recharge,
    },
    {
      path: '/User',
      meta:{tabbar: true},
      component: User
    },
    {
      path: '/Store',
      component: Store,
      meta:{tabbar: true},
    },
    {
      path: '/OilCardOrder',
      component: OilCardOrder,
      meta:{title:'油卡订单',header:true},
    },
    {
      path: '/MemberAgreement',
      component: MemberAgreement,
      meta:{title:'会员协议',header:true},
    },
    {
      path: '/Notice',
      component: Notice,
      meta:{title:'公告',header:true},
    },
    {
      path: '/download',
      component: download,
    },
  ]
})
