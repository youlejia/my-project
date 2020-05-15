<template>
  <div class="team-gs">
    <div v-html="teams"></div>
    
  </div>
</template>

<script>


export default {
  
  data () {
    return {
        teams:''
    }
  },
  created() {
    this.initData();
  },
  methods:{
    initData(){
        this.$axios.post('api/index').then(res => {
            if (res.status != 200) return
            this.teams = res.data.receive_rule
        }).catch( error=>{
        　　console.log(error);
        });
     
    },
  },
}
</script>

<style>

</style>