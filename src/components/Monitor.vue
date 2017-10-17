<template>
  <div class="content-box clearfix">
    <div class="leftSection">
      <FiltrateView></FiltrateView>
      <div class="leftSectionMiddle">
        <div class="table-list-content">
          <ListMode></ListMode>
          <TableMode></TableMode>
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

  import ListMode from './mode/ListMode'
  import TableMode from './mode/TableMode'

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
      RtModuleView,
      ListMode,
      TableMode
    },
  }
</script>

<style scoped>
 
</style>
