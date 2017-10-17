<template>
  <div class="container-fluid container-content">
  	<NavView></NavView>
	<router-view/>
	<FootView></FootView>
	<OrganizationView></OrganizationView>
	<ToolbarView></ToolbarView>
  </div>
</template>

<script>
	import HeaderView from './components/common/Head.vue'
	import NavView from './components/common/Nav.vue'
	import FootView from './components/common/Foot.vue'
	import OrganizationView from './components/common/Organization.vue'
	import ToolbarView from './components/common/Toolbar.vue'

	export default {
	  name: 'app',
	  components:{
		HeaderView,
		NavView,
		FootView,
		OrganizationView,
		ToolbarView
	  },
	}
</script>

<style>
	/* 整体布局 */
	.content-box{padding:0 80px;}
	.content-box .leftSection{width:71.5%;padding-right:10px;float:left;}
	.content-box .rightSection{width:28.5%;float:right;}

	/* 重点关注左右分块 */
	.content-box_focus{padding-left:260px;}
	.content-box_focus .rightSection{margin-left:-260px;width:250px;float:left;}
	.content-box_focus .leftSection{width:100%;float:right;}

	/*右边section部分*/
	.right-section_module{
		margin-bottom:10px;
	}

	.right-section_module:last-child{
		margin-bottom:0;
	}

	.right-section_module .module_title{
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 18px;
		color: #fff;
		background-color:#426280;
		text-align: center;
	}

	/* 统计分析下三个图表样式 */
	.right-section_module .chart-box{
		width: 100%;
		background-color: #fff;
		border-bottom:solid 1px #f0f0f0;
	}

	.right-section_module .chart-box .chartTitle{
		text-indent: 10px;
		width: 100%;
		height: 60px;
		line-height: 60px;
		font-size: 16px;
		color:#333333;
		word-wrap: break-word;
		word-break: break-all;
		white-space:nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}

	.right-section_module .chart-box .chartView{
		padding: 10px 10px 20px 10px;
		width: 100%;
		min-height: 50px;
	}
	/* 统计分析下三个图表样式 */

	/* 媒体类型分类样式 */
	.classfyUl {
		width: 100%;
		padding: 0 18px;
	}

	.classfyUl .classfyList {
		margin: 0 1% 8px 1%;
		width: 23%;
		height: 40px;
		border: solid 1px #a0a0a0;
		border-radius: 3px;
		color: #141414;
		float: left;
		background-color: #d5f8ff;
		cursor: pointer;
	}

	.classfyUl .classfyList.active{
		background-color: #005ac8 !important;
		color: #fff !important;
		border: none;
	}

	.classfyUl .classfyList >div {
		width: 100%;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		text-align: center;
		white-space:nowrap;
		overflow: hidden;
		text-overflow:ellipsis;
	}

	.classfyUl .classfyList > .classfyListName{
		margin: 4px 0 4px 0;
	}
	/* 媒体类型分类样式 */
</style>
