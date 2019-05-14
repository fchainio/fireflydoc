<template>
  <div></div>
</template>

<script>
export default {
  beforeMount(){
    const lang = (window.navigator.appName=='Netscape'?window.navigator.language:window.navigator.userLanguage).toLowerCase();
    if('zh' === lang || 'zh-cn' === lang){
     // this.$router.push(`/`)
    }else{
      this.$router.push(`/en/`)
    }
  }
}
</script>

<style>

</style>
