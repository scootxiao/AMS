<template>
	<div class="app_version">
		<div class="rightBottom-top">
			<div id="appVersionForm" class="form-inline" >
				<input type="hidden" name="pageNo" value="1"/>
				<input type="hidden" name="pageSize" value="10"/>
				
				<!-- 上传时间：<input id="startTime" name="startTime"  type="text" class="cssInput Wdate inputTime" placeholder="上传开始时间" onclick="startTimeFocus();"/>
				上传结束时间：<input id="endTime" name="endTime"  type="text" class="cssInput Wdate inputTime" placeholder="上传结束时间" onclick="endTimeFocus();"/> -->
				<div class="form-group">
					<label>版本名称：</label>
					<input type="text" class="form-control cssInput" placeholder="版本号" name="versionName"/>
				</div>
				
				<input type="button" class="btn btn-default cssButton search" value="搜索" />
				<input type="button" class="btn btn-default cssButton upload" value="发布更新" title="发布更新" />
			</div>
		</div>
		<div class="rightBottom-bottom appversionLoad" >
			<div class="tableBox">
				<table class="table table-striped table-bordered table-hover fixed table_center appversion_table">
					<thead>
						<tr>
							<th width="5%" >序号</th>
							<th width="20%" >APK名称</th>
							<th width="20%" >包名称</th>
							<th width="10%" >类型</th>
							<th width="10%">版本名称</th>
							<th width="10%">版本号</th>
							<th width="15%">发布时间</th>
							<th width="10%">操作</th>
						</tr>
					</thead>
					
					<tbody>
					
					</tbody>
				</table>
			</div>
			
			<div class="leftSectionBottom"  style="background-color:#f00;" >
				<!-- 分页 -->
				<div class="diggBox">
					<div class="digg" id="appVersionPagerView">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name:'app_version',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
	.form-horizontal{
		margin-top:20px;
	}
	.form-horizontal .control-label {
	    font-size: 16px;
	    font-weight: normal;
	}

	.form-group-btn{
		margin-top:80px;
	}

	.form-group {
	    margin-bottom: 20px;
	}
</style>




