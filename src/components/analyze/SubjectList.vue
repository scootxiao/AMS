<template>
  <div class="list clearfix">
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
  import FiltrateView from '../common/Filtrate'
  import PaginationView from '../common/Pagination'
  import RtModuleView from '../common/RtModule'

  import ListMode from '../mode/ListMode'
  import TableMode from '../mode/TableMode'

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
 
/* 专题分析样式 */
.subject-warper{
  margin-bottom:15px;
  padding:0 15px;
  width:100%;
  position:relative;
}

.subject-hd{
  padding:0 32px;
  height:32px;
  line-height:32px;
  font-size:14px;
  color:#fff;
  background-color:#426280;
  display:inline-block;
  position:relative;
}

.subject-hd::before{
  content:'';
  position:absolute;
  top:0;
  right:-32px;
  width:32px;
  height:32px;
  border-left: solid 16px #426280;
    border-bottom: solid 16px #426280;
    border-right: solid 16px transparent;
    border-top: solid 16px transparent;
}

.subject-box{
  padding:15px;
  width:100%;
  min-height:100px;
  border:solid 1px #426280;
  background-color:#fff;
}

.subject-box .subject-item{
  padding-left:80px;
}

.subject-box .subject-item .classfy{
  margin-left:-80px;
  width:80px;
  height:36px;
  line-height:36px;
  font-size:14px;
  color:#426280;
  text-align:right;
  float:left;
}

.subject-box .subject-item .content{
  width:100%;
  /* min-height:36px;
  max-height:108px; */
  height:108px;
  
  line-height:36px;
  font-size:0;
  float:left;
  
  /* 拖拽事件 */
/*  position:relative; */
}

/* 领导监测 */
.subject-box .subject-item.leadMonitor .content{
  height: 72px;
}


.subjectEvent .subject{
  width: 19%;
}

.leadMonitor .subject{
  width:12%;
  border:none;
}

.subject{
  margin-right:1%;
  padding-left:15px;
  padding-right:15px;
  height:26px;
  line-height:24px;
  border:solid 1px #ccc; 
  border-radius:3px;
  display:inline-block;
  vertical-align: middle;
  cursor:pointer;
}

.subject.placeHolder{
  background-color:white !important; 
  border:dashed 1px gray !important;
}

/* 添加专题样式 */
.subject.add{
  padding:0;
  font-size:14px;
  color:#666;
  text-align:center;
  border:dashed 1px #ccc;
}

.subject.add .btn{
  padding-left:3px;
  padding-right:3px;
  color:#666;
}

.subject .subject-name{
  width:100%;
  font-size:14px;
  color:#666;
  float:left;
  text-align:left;
  background-color:transparent;
}

.subject .operate-btn-group{
  margin-right:-48px; 
  padding: 1px;
  float:right;
  display:none;
  background-color:transparent;
}

.subject .operate-btn-group .btn{
  padding: 1px;
  border: none;
  color:#666;
}

.subject .operate-btn-group .btn .glyphicon{
    top: 3px;
}

/* 子专题hover状态样式 */
.subject:hover {
  padding-right:48px;
}

.subject:hover .operate-btn-group{
  display:block;
}
/* 子专题hover状态样式 */

/* 子专题active状态样式 */
.subjectEvent .subject.active{
  background-color:#667481 !important;
}

.leadMonitor .subject.active{
  border-radius:0;
  border-bottom:solid 2px #2856b6;
}

.subjectEvent .subject.active .subject-name{
  color:#fff;
}

.subjectEvent .subject.active .operate-btn-group .btn{
  color:#fff;
}

/* 子专题active状态样式 */

/* 专题分析样式 */

.cut-off-line{
  margin:10px 0;
  width:100%;
  height:1px;
  background-color:#ebebeb;
}


/* 郭俊秋添加 */
.add-sort{
  position: absolute;
  right: 15px;
  top: 0px; 
  padding-left:5px;
  padding-right:5px;
  height: 32px;
  background: rgba(0,0,0,0.4);
}

.trigon{
  display:inline-block;
  width:0px;
  height:0px;
  border-right: solid 16px rgba(0,0,0,0.4);
    border-bottom: solid 16px rgba(0,0,0,0.4);
    border-left: solid 16px transparent;
    border-top: solid 16px transparent;
    position:absolute;
    left:-32px;
    top:0px;
}

.add-sort span.add_subject,
.add-sort span.save_sort,
.add-sort span.dt_save_sort,
.add-sort span.hidden-click,
.add-sort span.show-click{
  display:inline-block;
  padding-left:5px;
  padding-right:5px;
  max-width:120px;
  height:32px;
  line-height:32px;
  cursor:pointer;
  text-align:center;
  color:#fff;
}
</style>
