<template>
    <div class="notice">
        <van-cell-group>
            <van-cell v-for="(item,index) in noticeList" @click="goNotice(index)" :key="item.value" :title="item.title" is-link>
                <p slot="label">{{item.created_at}}</p>
            </van-cell>
        </van-cell-group>
    </div>
</template>

<script>

export default {
 
    data() {
        return {
            noticeList:[],
            id:0 
        }
        
    },
    created(){
        this.NoticeList()
    },
    methods: {
        NoticeList(){
            this.$axios.post('api/notice/list').then(res => {
                if (res.status != 200) return
                this.noticeList=res.data.data
                
            }).catch( error=>{
            　　
            });
        },
        goNotice(index){
            this.id = this.noticeList[index].id;
            this.$router.push({name: 'noticeList',params:{id:this.id}})
        }
    
    
    
    },
  

}
</script>

<style lang="less" scoped="scoped">

</style>
