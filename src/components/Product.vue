<template>
  <div class="product">
    <div v-html="product"></div>
    
  </div>
</template>

<script>


export default {
  
  data () {
    return {
        product:''
    }
  },
  created() {
    this.initData();
  },
  methods:{
    initData(){
        this.$axios.post('api/index').then(res => {
            if (res.status != 200) return
            this.product = res.data.make_money_model
        }).catch( error=>{
        　　console.log(error);
        });
     
    },
  },
}
</script>

<style>

</style>