import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', name: 'home', meta:{tabbar: true,requireAuth: true,}, component: function (resolve) {
      require(['../components/home.vue'], resolve)
    }},
    {path: '/login', name: 'login', component: function (resolve) {
      require(['../components/login.vue'], resolve)
    }},
    {path: '/register', name: 'register', component: function (resolve) {
      require(['../components/register.vue'], resolve)
    }},
    {path: '/certification', name: 'certification', component: function (resolve) {
      require(['../components/certification.vue'], resolve)
    }},
    {path: '/Changepassword', name: 'Changepassword', component: function (resolve) {
      require(['../components/Changepassword.vue'], resolve)
    }},
    {path: '/Upgrade', name: 'Upgrade', meta:{title:'升级代理',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Upgrade.vue'], resolve)
    }},
    {path: '/GoodsOrder', name: 'GoodsOrder', meta:{title:'商品订单',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/GoodsOrder.vue'], resolve)
    }},
    {path: '/Changeinfo', name: 'Changeinfo', meta:{title:'修改信息',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Changeinfo.vue'], resolve)
    }},
    {path: '/Myteam', name: 'Myteam', meta:{tabbar: true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Myteam.vue'], resolve)
    }},
    {path: '/AddTo/:id', name: 'AddTo', meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/AddTo.vue'], resolve)
    }},
    {path: '/user/order/list/:active', name: 'CardOrder', props: true, meta:{title:'商品订单',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/CardOrder.vue'], resolve)
    }},
    {path: '/MaintainCard', name: 'MaintainCard', meta:{title:'我的保养卡',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/MaintainCard.vue'], resolve)
    }},
    {path: '/MyDirectPush', name: 'MyDirectPush', meta:{tabbar: true,requireAuth: true,}, component: function (resolve) {
      require(['../components/MyDirectPush.vue'], resolve)
    }},
    {path: '/Atm', name: 'Atm', meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/Atm.vue'], resolve)
    }},
    {path: '/CreditCard/edit/:id', name: 'CreditCard', meta:{title:'绑定银行卡',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/CreditCard.vue'], resolve)
    }},
    {path: '/DetailsOfBalance', name: 'DetailsOfBalance', meta:{title:'账户明细',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/DetailsOfBalance.vue'], resolve)
    }},
    {path: '/Mybalance', name: 'Mybalance', meta:{title:'我的余额',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Mybalance.vue'], resolve)
    }},
    {path: '/MyBankCard', name: 'MyBankCard', meta:{title:'我的银行卡',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/MyBankCard.vue'], resolve)
    }},
    {path: '/ReceivingAddress', name: 'ReceivingAddress', meta:{title:'收货地址',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/ReceivingAddress.vue'], resolve)
    }},
    {path: '/user/address/edit/:addressId', name: 'addressEdit', meta:{title:'地址详情',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/UserAddressEdit.vue'], resolve)
    }},
    {path: '/user/bankAccount/edit/:id', name: 'userBankAccountEdit', meta:{title:'地址详情',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/userBankAccountEdit.vue'], resolve)
    }},
    {path: '/Recharge', name: 'Recharge', meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/Recharge.vue'], resolve)
    }},
    {path: '/User', name: 'User',  meta:{tabbar: true,requireAuth: true,}, component: function (resolve) {
      require(['../components/User.vue'], resolve)
    }},
    {path: '/Store', name: 'Store',  meta:{tabbar: true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Store.vue'], resolve)
    }},
    {path: '/MemberAgreement', name: 'MemberAgreement', meta:{title:'会员协议',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/MemberAgreement.vue'], resolve)
    }},
    {path: '/noticeList/:id', name: 'noticeList', meta:{title:'公告详情',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/noticeList.vue'], resolve)
    }},
    {path: '/Notice', name: 'Notice', meta:{title:'公告',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Notice.vue'], resolve)
    }},
    {path: '/download', name: 'download',meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/download.vue'], resolve)
    }},
    {path: '/Cooperation', name: 'Cooperation', meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/Cooperation.vue'], resolve)
    }},
    {path: '/Customer', name: 'Customer', meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/Customer.vue'], resolve)
    }},
    {path: '/pattern', name: 'pattern', meta:{requireAuth: true,}, component: function (resolve) {
      require(['../components/pattern.vue'], resolve)
    }},
    {path: '/share', name: 'share', meta:{title:'分享赚钱',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/share.vue'], resolve)
    }},
    {path: '/Company', name: 'Company', meta:{title:'公司介绍',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Company.vue'], resolve)
    }},
    {path: '/Product', name: 'Product', meta:{title:'产品介绍',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/Product.vue'], resolve)
    }},
    {path: '/CompanyTeam', name: 'CompanyTeam', meta:{title:'团队介绍',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/CompanyTeam.vue'], resolve)
    }},
    {path: '/discount', name: 'discount', meta:{title:'八折优惠',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/discount.vue'], resolve)
    }},
    {path: '/CarWash', name: 'CarWash', meta:{title:'优惠洗车',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/CarWash.vue'], resolve)
    }},
    {path: '/RoadRescue', name: 'RoadRescue', meta:{title:'道路救援',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/RoadRescue.vue'], resolve)
    }},
    {path: '/StoreEntry', name: 'StoreEntry', meta:{title:'门店入驻',header:true,requireAuth: true,}, component: function (resolve) {
      require(['../components/StoreEntry.vue'], resolve)
    }},
   
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
