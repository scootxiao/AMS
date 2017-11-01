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
  import FiltrateView from '../components/common/Filtrate'
  import PaginationView from '../components/common/Pagination'
  import RtModuleView from '../components/common/RtModule'

  import ListMode from '../components/mode/ListMode'
  import TableMode from '../components/mode/TableMode'

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
