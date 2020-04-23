<template>
    <div class="notice">
        <van-cell-group>
            <van-cell v-for="item in noticeList" :key="item.value" :title="item.title">
                <p slot="label">{{item.label}}</p>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>

export default {
 
  data() {
    return {
        noticeList:[
            {
                title:'关于04/15软件更新公告！',
                label:'2020.03.15  20:18',
            },
            {
                title:'关于02/22软件更新公告！',
                label:'2020.03.15  20:18',
            },
            {
                title:'“提现”相关问题解决方案',
                label:'2020.03.15  20:18',
            }
        ]
    }
      
  },
  methods: {
    
    
    
  },
  

}
</script>

<style lang="less" scoped="scoped">

</style>
