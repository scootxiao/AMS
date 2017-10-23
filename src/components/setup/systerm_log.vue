<template>
<div class="systerm_log">
	<div class="rightOperateBox">
		<form class="form-inline">
			<select id="selectType" class="form-control cssSelect">
				<option value="loginname">登录账户</option>
				<option value="username">用户名称</option>
				<!-- <option>操作详情</option> -->
			</select>
			
			<input class="form-control cssInput" type="text" id="queryCriteria" />

			<div class="form-group">
				<label>开始时间：</label>
				<input class="form-control WD cssInput" id="system_log_time_start" name="system_log_time_start" />
			</div>
			
			<div class="form-group">
				<label>结束时间：</label>
				<input class="form-control WD cssInput" id="system_log_time_end" name="system_log_time_end" />
			</div>

			<input class="btn btn-default cssButton" type="button" value="查询" onclick="listZoperatelog()" />
			<input class="btn btn-default cssButton" type="button" value="导出" onclick="exportLog()" />
		</form>
	</div>
	
	<div class="tableBox">
		<div id="listLoad"></div><!-- 加载中-->
		<table class="table table-striped table-bordered table-hover fixed table_center" border="0" cellspacing="0">
			<thead>
				<tr>
					<th width="7%">序号</th>
					<th width="15%">组织名称</th>
					<th width="15%">登录账号</th>
					<th width="33%">操作详情</th>
					<th width="20%">操作时间</th>
					<th width="10%">系统报错</th>
				</tr>
			</thead>
			<tbody id="zoperatelogId"></tbody>
		</table>
	</div>

	<div class="diggBox">
		<input type="hidden" name="pagePerv"/>
		<input type="hidden" name="pageNext"/>
		<div class="digg clear" id="logPagerView"></div>
	</div>
</div>
</template>

<script>
  export default {
    name: 'systerm_log',
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