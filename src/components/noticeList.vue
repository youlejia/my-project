<template>
    <div class="noticeList" style="padding:10px;">
       <p class="mt10 tc f18 mb10">{{list.title}}</p>
       <p v-html="clauseHtml"></p>
    </div>
</template>

<script>

export default {
 
    data() {
        return {
            id:this.$route.params.id,
            list:[],
            clauseHtml: '',
        }
        
    },
    created(){
        this.NoticeList()
    },
    methods: {
        NoticeList(){
            
            this.$axios.post('api/notice/detail',{id:this.id}).then(res => {
                if (res.status != 200) return
                this.list = res.data;
                this.clauseHtml = res.data.content
            }).catch( error=>{
            　　
            });
        }
    
    
    
    },
  

}
</script>

<style lang="less" scoped="scoped">

</style>
