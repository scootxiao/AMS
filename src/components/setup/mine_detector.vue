<template>
<div class="mine_detector">
		
	<div class="rightOperateBox">
		<div class="BoxLeft">
		<form id="findMineDetectorForm">
			<span>探针类型：</span>
			<select class="cssSelect" name="type">
				<option value="0">所有</option>
				<option value="1">文章</option>
				<option value="2">专题文章</option>
				<option value="3">推荐文章</option>
			</select>
			<span>状态：</span>
			<select class="cssSelect" name="status">
				<option value="1">所有</option>
				<option value="0">监测中</option>
				<option value="-1">已删除</option>
			</select>
			<input class="cssButton" onclick="queryDetectorList();" type="button" value="查询"  />
			<input class="cssButton" onclick="openHandDetectior();" type="button" value="手动添加"  />
			<input type="hidden" name="pageNo" value="1"/>
			<input type="hidden" name="pageSize" value="20"/>
		</form>
		</div>
		
		<div class="BoxCenter">
			
		</div>
		
		<div class="BoxRight">
			
		</div>
	</div>
	
	<div class="tableBox">
		<table class="table table-striped table-bordered table-hover fixed table_center" border="0" cellspacing="0" >
			<thead>
				<tr>
					<th width="5%"><input type="checkbox" /></th>
					<th width="10%">序号</th>
					<!-- <th width="10%">探针类型</th> -->
					<th width="45%">标题/名称</th>
					<th width="15%">来源</th>
					<th width="15%">状态</th>
					<th width="10%">操作</th>
				</tr>
			</thead>
			<tbody id="mineDetecotrBody">
				
			</tbody>
		</table>
	</div>
	
	<div class="diggBox">
		<input type="hidden" name="pagePerv"/>
		<input type="hidden" name="pageNext"/>
		<div class="digg" id="detectorPagerView">
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name: 'sysSetup',
    data () {
      return {

      }
    },
    methods: {

    },
    components:{

    },
  }
</script>

<style scoped>

</style>