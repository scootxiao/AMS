<template>
<div class="homePageSet">
	<div class="rightOperateBox" id="section_query_condition">
		<div class="hd">
			<select class="cssSelect" name="search_org" id="serch_org"></select>
			<input type="button" class="cssButton" value="新建" onclick="toEditSectionSet();"/>
			<input name="pageSize" type="hidden" value="100"/>
			<input name="pageNo" type="hidden" value="1"/>
		</div>
		<div class="secRight">
	 		<div class="sectionContent  rightBottom clearfloat" style="position: relative;" id="userTrace_loading">
				<div class="tableBox">
					<table class="table table-striped table-bordered table-hover fixed table_center">
						<thead>
							<tr>
								<th width="5%">序号</th>
								<th width="12%">版块名称</th>
								<th width="10%">客户组织</th>
								<th width="8%">类型</th>
								<th width="15%">关注媒体</th>
								<th width="15%">展现方式</th>
								<th width="15%">添加时间</th>
								<th width="15%">操作</th>
							</tr>
						</thead>
						<tbody id="sectionSet_content">
						</tbody>
					</table>
					<input name="list1SortOrder" type="hidden" />
				</div>
			</div>

			<div class="diggBox">
				<div class="digg clearfix" id="pagerView"></div>
			</div>
		</div>

		<div class="secRight">
			<form id="sectionSetForm" >
				<input type="hidden" id="section_id" name="id" value=""/>
				<div class="formLine clearfloat"> 
					<div class="LineLeft"> 
						版块名称： 
					</div>
					<div class="LineRight">
						<input class="name LineRightInput" name="name" id="name" type="text" />	
					</div>
				</div>
					
		 		<div class="formLine clearfloat">
					<div class="LineLeft">
						所属组织：
					</div>
					
					<div class="LineRight">
						<select class="cssSelect LineRightSelect" name="orgid" id="orgid">
							
						</select>
						<input type="hidden" name="org_name" value=""/>
					</div>
					
				</div>
				
				<div class="formLine clearfloat">
					<div class="LineLeft">
						版块类型：
					</div>
					
					<div class="LineRight">
						<select class="cssSelect LineRightSelect" name="type" id="type" onchange="switchSectionType()">
							<option value="0">监测</option>
							<option value="1">专题</option>
						</select>
					</div>
					
				</div>
				
				<div class="formLine clearfloat monitor">
					<div class="LineLeft">
						展示方式：
					</div>
					<div class="LineRight">
						<select class="cssSelect LineRightSelect" name="show_type" id="show_type" onchange="switchShowType()">
							<option value="0">首页</option>
							<option value="1">大屏幕</option>
						</select>
					</div>
				</div>
				
				<div class="led formLine clearfloat">
					<div class="LineLeft">
						大屏版块：
					</div>
					<div class="LineRight">
						<select class="cssSelect LineRightSelect" name="show_section" id="show_section">
							<option value="1">传统媒体</option>
							<option value="2">网站</option>
							<option value="3">微博</option>
						</select>
					</div>
				</div>
				
				
				<div class="formLine clearfloat subject">
					<div class="LineLeft">
						专题类型：
					</div>
					<div class="LineRight">
						<select class="cssSelect LineRightSelect" name="subject_type" id="subject_type">
							<option value="1">领导专题</option>
							<option value="2">专题事件</option>
						</select>
					</div>
				</div>
				
				<div class="formLine clearfloat monitor">
					<div class="LineLeft">
						监测单元：
					</div>
					<div class="LineRight">
						<select class="cssSelect LineRightSelect" name="subject_id" id="subject_id">
						</select>
						<input type="hidden" name="subject_name" value=""/>
					</div>
				</div>
				
				<div class="formLine clearfloat monitor">
					<div class="LineLeft">
						有无信息源：
					</div>
					
					<div class="LineRight">
						<label class="LineRightLabel">
							<input type="radio" name="has_site" value="1" checked="checked"/>有
						</label>
						<label class="LineRightLabel">
							<input type="radio" name="has_site" value="0"/>无
						</label>
					</div>
				</div>
				
				<div class="formLine clearfloat monitor" id="set_site_div">
					<div class="LineLeft">
						关注媒体设置：
					</div>
					
					<div class="LineRight">
						<div class="LineRight">
							<button type="button" onclick="showAddSite()" class="cssButton add">添加</button>
							<div class="messageTreeBox clearfloat">
								<fieldset class="selectedBox">
									<legend style="margin-left: 4px;" title="最多可选择20个信息源">已选信息源</legend>
									<ul class="clearfloat" id="souceUl">
														
									</ul>
								</fieldset>
										
							</div>
						</div>
					</div>
				</div>
				<div class="formLine buttonBox">
					<input type="button" class="cssButton" value="取消" onclick="cancelEdit();"/>
					<input type="button" class="cssButton" value="保存" onclick="editSectionSet()"/>
				</div>
				<input name="sessionId" type="hidden" value=""/>
			</form>
		</div>
	</div>
</div>
</template>

<script>
  export default {
    name: 'homePageSet',
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