<template>
<form class="form-horizontal">
	<div class="form-group">
		<label class="col-md-3 control-label">所属组织：</label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="organizeName" disabled="disabled" />
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">登 录 名：</label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="userAccount" disabled="disabled" />
		</div>
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label"><span class="cssColorRed">* </span>用户名称：</label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="userName" placeholder="用户名称"/>
		</div>
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">电子邮箱：</label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="email" placeholder="电子邮箱"/>
		</div>
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">手机号码： </label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="phoneNumber" placeholder="手机号码"/>
		</div>
	</div>

	<div class="form-group">
		<label class="col-md-3 control-label">微信账号：</label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="weChart" placeholder="微信账号"/>
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">Q Q号码：</label>
		<div class="col-md-8">
			<input class="form-control" type="text" name="txqq" placeholder="QQ号码"/>
		</div>
	</div>
</form>
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




