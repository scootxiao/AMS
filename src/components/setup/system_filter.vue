<template>
	<div class="systerm_filter">
		<div class="filter_left" id="system_filter_left_div">
			<div class="tree_hd">
				<span>总控</span>
				<button type="button" class="btn btn-link" onclick="toAddSystemFilter();">
					<span class="glyphicon glyphicon-plus-sign"></span>
				</button>
			</div>
			
			<div class="search">
				<div class="searchBox">
					<form id="system_filter_search_form">
						<input id="hiddenText" type="text" style="display:none" onkeypress="searchKeywordKeyboard(event)"/>
						<div class="input-group">
							<span class="input-group-addon" onclick="getSystemFilterData();"><span class="glyphicon glyphicon-search"></span></span>
							<input type="text" class="form-control input-sm" id="system_filter_search" maxlength="12" onkeypress="searchKeywordKeyboard(event)"/>
						</div>
					</form>
				</div>
			</div>
			<div class="ztree-box">
				<ul class="ztree" id="system_filter_tree"></ul>
			</div>
		</div>
		
		<div class="filter_right" id="system_filter_right_div">
			<div class="form-hd">
				<span id="system_filter_edit_title">总控编辑</span>
			</div>
			<form id="system_filter_edit_form" class="form-horizontal" >
				<input type="hidden" name="id"/>
				<input type="hidden" name="fid"/>

				<div class="form-group">
					<label class="col-md-4 control-label"><span class="cssColorRed">* </span>名　　称：</label>
					<div class="col-md-8">
						<input type="text" class="form-control" name="name" />
					</div>
				</div>
				
				<div class="form-group js_no_zk">
					<label class="col-md-4 control-label"><span class="cssColorRed">* </span>类　　型：</label>
					<div class="col-md-8">
						<select class="form-control" name="type">
							<option value="2">过滤项</option>
							<option value="1">过滤组</option>
						</select>
					</div>
				</div>
				
				<div class="form-group js_no_zk js_no_glx">
					<label class="col-md-4 control-label"><span class="cssColorRed">* </span> 过 总 控 ：</label>
					<div class="col-md-8">
						<label class="radio-inline"><input type="radio" name="control_flag" value="0" checked="checked"/>是</label>
						<label class="radio-inline"><input type="radio" name="control_flag" value="1"/>否</label>
					</div>
				</div>
				
				<div class="form-group js_no_glx">
					<label class="col-md-4 control-label"><span class="cssColorRed js_no_zk">* </span>关键词组：</label>
					<div class="col-md-8">
						<textarea class="form-control" name="keywords" id="keywords"></textarea>
					</div>
				</div>
				
				<div class="form-group">
					<div class="col-md-offset-4 col-md-8">
						<!-- <button type="button" class="btn btn-default" onclick="resetSysFilter();">重置</button> -->
						<button type="button" class="btn btn-primary" onclick="saveSysFilter();">保存</button>
					</div>
				</div>
				
			</form>

		</div>
	</div>

</template>

<script>
  export default {
    name:'nav',
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




