<template>
  <div class="content-box clearfix">
    <div class="leftSection">
      <FiltrateView></FiltrateView>
      <div class="leftSectionMiddle">
        <div class="table-list-content">
          <router-view/>
        </div>
      </div>
      <PaginationView></PaginationView>
    </div>
    <RtModuleView></RtModuleView>
  </div>
</template>

<script>
  import FiltrateView from './common/Filtrate'
  import PaginationView from './common/Pagination'
  import RtModuleView from './common/RtModule'

  export default {
    name: 'monitor',
    data () {
      return {

      }
    },
    methods: {

    },
    components:{
      FiltrateView,
      PaginationView,
      RtModuleView
    },
  }
</script>

<style scoped>
 
</style>
