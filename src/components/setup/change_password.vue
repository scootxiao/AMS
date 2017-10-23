<template>
<form id="changePasswordForm" class="form-horizontal">
	<div class="form-group">
		<label class="col-md-3 control-label">
			所属组织：
		</label>
		<div class="col-md-8">
			<input class="form-control" type="text" disabled="disabled" name="organizeName"/>
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">
			登录账号：
		</label>
		<div class="col-md-8">
			<input class="form-control" type="text" disabled="disabled" name="userAccount"/>
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">
			<span class="cssColorRed">* </span>用户名称： 
		</label>
		<div class="col-md-8">
			<input class="form-control" type="text" disabled="disabled" name="userName" >
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">
			<span class="cssColorRed">* </span>原始密码： 
		</label>
		<div class="col-md-8">
			<input class="form-control" type="password" name="oldPass" placeholder="原始密码"/>
		</div>
	</div>
	
	
	<div class="form-group">
		<label class="col-md-3 control-label">
			<span class="cssColorRed">* </span> 新 密 码：
		</label>
		<div class="col-md-8">
			<input class="form-control" type="password" name="newPass" id="changePasswordNewpass" placeholder="新密码"/>
		</div>
	</div>
	
	<div class="form-group">
		<label class="col-md-3 control-label">
			<span class="cssColorRed">* </span>确认密码： 
		</label>
		<div class="col-md-8">
			<input class="form-control" type="password" name="rePass" placeholder="确认密码"/>
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




