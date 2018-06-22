<template>
  <div id="app">
    <b-header />
    <router-view/>
    <b-footer />
  </div>
</template>

<script>
import BHeader from '@/components/common/Header'
import BFooter from '@/components/common/Footer'
export default {
  name: 'App',
  components:{
    BHeader,BFooter
  }
}
</script>

<style>

</style>
