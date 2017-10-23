<template>
	<div class="content-box">
		<div class="setup cssOverflow">
			<div class="setup-left EqAltitude">
				<ul class="setup-Ul">
					<li class="setup-list"><router-link to="/setup/personalsettings">个人设置</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">修改密码</router-link></li>
					<li class="setup-list"><router-link to="/setup/informationcollection">信息收藏</router-link></li>
					<li class="setup-list"><router-link to="/setup/warningset">预警设置</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">系统过滤</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">监测单元设置</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">我的探针</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">首页设置</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">账号关注设置</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">账号管理</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">系统日志</router-link></li>
					<li class="setup-list"><router-link to="/setup/changepassword">APP版本更新</router-link></li>
				</ul>
			</div>
			<div class="setup-right EqAltitude">
				<div class="crumbs">系统设置 > 个人设置 </div>
				<div class="right-module">
					<router-view/>
				</div>
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

<style>
	.setup{
		margin-top:20px;
		padding: 0 0 60px 205px;
		min-height:680px;
		background-color:#fff;
	}

	.setup-left{
		margin: 0 0 0 -205px;
		width: 203px;
		background-color: #35638b;
		float: left;
	}

	.setup-Ul{
		width: 100%;
	}
	.setup-Ul .setup-list{
		width: 100%;
		height: 40px;
		line-height: 38px;
		text-align: center;
		border-top:solid 1px #5084b1;
		border-bottom:solid 1px #224a6e;
	}

	.setup-Ul .setup-list a{
		font-size: 16px;
		color: #fff;
	}

	.setup-Ul .setup-list a:hover{
		color:#00e0fe;
		text-shadow: 4px -2px 4px #000;
	}

	.setup-right{
		padding: 0 0 0px 0;
		width: 100%;
		float: right;
		background-color: #ffffff;
	}

	.crumbs{
		width: 100%;
		height: 42px;
		line-height: 42px;
		font-size: 16px;
		color: #141414;
		text-indent: 30px;
		border-bottom: solid 1px #bfbfbf;
		background-color: #ffffff;
	}

	.right-module{
		padding: 30px;
		width: 100%;
	}

	.cssColorRed{
		color:#f00;
	}

</style>