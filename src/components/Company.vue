<template>
  <div class="company">
    <div v-html="company"></div>
    
  </div>
</template>

<script>


export default {
  
  data () {
    return {
        company:''
    }
  },
  created() {
    this.initData();
  },
  methods:{
    initData(){
        this.$axios.post('api/introduce').then(res => {
            if (res.status != 200) return
            this.company = res.data.data.receive_redpack
        }).catch( error=>{
        　　console.log(error);
        });
     
    },
  },
}
</script>

<style>

</style>