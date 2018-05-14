<template>
  <div>     
      <y-header></y-header> 
      <router-view class="main"></router-view>
      <y-footer></y-footer>    
  </div>
</template>

<script>
    import Header from '/common/header'
    import Footer from '/common/footer'
    export default {
        components:{
            'y-header':Header,
            'y-footer':Footer
        }
    }
</script>

<style scoped>

</style>
