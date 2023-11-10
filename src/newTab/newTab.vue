<script setup lang="ts">

import { reqVertifyCode } from "@/api/user"

reqVertifyCode({
  phone: '18160980499',
  region_code: 86
})
.then(res => {
  console.log(res)
})

</script>
<template>
  <div class="main">
  </div>
</template>
<style lang="less" scoped>
  .main {
    height: 100vh;
    background-image: url(../newTab/images/bg.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
  }
</style>