<template>
  <div class="content-box">
    <router-view/>
  </div>
</template>

<script>
  import FiltrateView from '../components/common/Filtrate'
  import PaginationView from '../components/common/Pagination'
  import RtModuleView from '../components/common/RtModule'

  import ListMode from '../components/mode/ListMode'
  import TableMode from '../components/mode/TableMode'

  export default {
    name: 'analyze',
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
  .router-link-active{
    background: #00172d;
  }

  .tabBoxWarper {
    margin-top:20px;
    margin-bottom:5px;
    height:33px;
    border-bottom: solid 1px #005ac8;
  }

  .tabBox .tab{
    margin-left: 0px;   
  }

  .tabBox .tab a{
    padding: 6px 30px;
      background-color: #a7b7c4;
      border-radius: 0;
      color: #fff;
      font-size: 14px;
  }

  .tabBox .tab a:hover{
    background-color: #a7b7c4;
  }

  .tabBox .tab.active a{
    border-bottom: solid 1px #005ac8;
    background-color: #005ac8;
    border-radius:0;
  }

  .tabBox>li.active>a, 
  .tabBox>li.active>a:focus, 
  .tabBox>li.active>a:hover{
    background-color: #005ac8 !important;
  }
</style>
