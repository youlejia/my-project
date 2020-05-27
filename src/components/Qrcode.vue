<template>
  <div>
   
    <div style="text-align:center;margin-top:15px;">
      <qriously :value="qrcode" :size="200" />
      <span>不支持识别二维码支付，请用其他手机扫描本二维码，完成支付</span>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      qrcode: '',
    }
  },
  mounted () {
    this.qrcode = this.$route.query.qrcode
  },
}
</script>