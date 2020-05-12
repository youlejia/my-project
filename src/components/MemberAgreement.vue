<template>
    <div class="all">
        <div>{{member}}</div>
          
        
        
    </div>
</template>

<script>

export default {
 
    data() {
        return {
            member:''
        }
        
    },
    created() {
        this.initData();
    },

    methods: {
        initData(){
            this.$axios.post('api/user').then(res=>{
                if (res.status != 200) return
                this.member = res.data.user.shop_treaty;
            })
            .catch( error=>{
        　　　　console.log(error);
        　　});
        }
        
        
    },
    

}
</script>

<style lang="less" scoped="scoped">
p{
    margin: 15px 0;
}

</style>
