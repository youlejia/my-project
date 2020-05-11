<template>
  <div class="team">
    
    <van-row class="vanrow">
      <van-col span="24">
        <div class="push">
          
          <img :src="exten_img">
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      currentRate: 0,
      directly: 0,
      directly_one: 0,
      directly_two: 0,
      isexist: false,
      recom: {},
      total: 0,
      exten_link: '',
      exten_code: '',
      exten_img: '',
    }
  },
  created() {
    this.initData();
  },
  methods:{
    initData(){
        this.$axios.post('api/user/team').then(res => {
            if (res.status != 200) return
            let team = res.data.data
            this.directly = team.directly
            this.directly_one = team.directly_one
            this.directly_two = team.directly_two
            this.isexist = team.isexist
            this.recom = team.recom
            this.total = team.total
            this.exten_link = team.exten_link
            this.exten_code = team.exten_code
            this.exten_img = team.exten_img
            if (this.isexist && this.recom.avater == null) {
                this.recom.avater = '/image/avatar_default.jpg'
            } 
        }).catch( error=>{
        　　console.log(error);
        });
     
    },
    doCopy(value) {
      let that = this;
      this.$copyText(value).then(function (e) {
        that.$toast.success('复制成功');
      }, function (e) {
        that.$toast.fail('复制失败');
      })
    },
  },
}
</script>

<style>

</style>