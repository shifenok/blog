<template>
  <div class="middle">
    <h2 className="message">{{ message.hitokoto }}</h2>
    <span>{{ `《${message.from}》` }}</span>  
    <!-- <a href="/blog/javascript/">Home</a> -->
  </div>      
</template>
<script lang="ts" setup>
  import axios from 'axios'
  import { reactive } from 'vue';
  const message = reactive({
    hitokoto: '',
    from: '',
    from_who: ''
  })
  axios.get('https://v1.hitokoto.cn')
  .then(function ({ data }) {
    message.hitokoto = data.hitokoto
    message.from = data.from
    message.from_who = data.from_who
  })
  .catch(function (error) {
    console.log(error);
  })
  const handleGo = () => {
    
  }
</script>
<style lang="less" scoped>
.middle {
  display: flex;
  align-items:center;
  justify-content: center;
  // color: var(--vp-c-brand);
  margin: 20px auto 0;
  cursor: pointer;
  &:hover {
    color: var(--vp-c-brand-dark);
  }
}
</style>
