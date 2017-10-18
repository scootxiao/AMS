<template>
  <div id="navWarp">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">AMS<span>舆情大数据分析系统</span></a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navItems">
            <li class="navItem"><router-link to="/mainPage">首页</router-link></li>
            <li class="navItem"><router-link to="/monitor">舆情监测</router-link></li>
            <li class="navItem"><router-link to="/hongsearch">搜索</router-link></li>
            <li class="navItem"><router-link to="/recommend">人工推荐</router-link></li>
            <li class="navItem"><router-link to="/analyze">专题分析</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="setUp">
      <img class="userPic" src="../../assets/img/default_user.gif"/>
      <div class="welcome">
        欢迎你：</br>
        张三
      </div>
      <div class="btn-group setUp-dropdown open">
        <button type="button" class="btn btn-link dropdown-toggle open" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span class="caret"></span>
          <span class="sr-only">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a href="#">角色：用户</a></li>
          <li><a href="#">所属组织：上海网信办</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#"><router-link to="/setup">设置</router-link></a></li>
          <li><a href="#">退出</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  .router-link-active{
    background: #00172d;
  }

  #navWarp{
    margin-bottom:20px;
    padding:0 50px;
    padding-right:150px;
    background-color: #002f5b;
    -webkit-box-shadow: -10px 0 10px transparent, 
          10px 0 10px transparent, 
          0 -10px 10px transparent, 
          0px 5px 10px #7d8fb1;
    -moz-box-shadow: -10px 0 10px transparent, 
          10px 0 10px transparent, 
          0 -10px 10px transparent, 
          0px 5px 10px #7d8fb1;
    box-shadow: -10px 0 10px transparent, 
          10px 0 10px transparent, 
          0 -10px 10px transparent, 
          0px 5px 10px #7d8fb1;
    position:relative;
  }

  #navWarp .navbar{
    margin-bottom:0;
    border: none; 
    border-radius: 0px;
    background-color: transparent;
  }

  #navWarp .container{
    height: inherit;
    position: relative;
  }

  #navWarp .collapse {
    padding-left:0;
    padding-right:0;
  }

  /* 左边样式 */
  #navWarp .container .navbar-collapse{
    padding-left:0;
    padding-right:0;
  }

  #navWarp .navbar-default .navItems>li>a{
    padding-left:25px;
    padding-right:25px;
    font-size: 16px;
    color: #fff;
  } 

  #navWarp .navbar-default .navItems>.active>a, 
  #navWarp .navbar-default .navItems>.active>a:focus, 
  #navWarp .navbar-default .navItems>.active>a:hover{
    background-color:#00172d;
  }

  .navbar-brand{
    font-size: 24px;
    font-weight: 600;
    color: #fff;
  }

  .navbar-brand span{
    padding-left:10px;
    font-size: 14px;
    font-weight: normal;
  }
  /* 左边样式 */


  /* 右边样式 */

  /* 搜索框样式 */
  .navbar-right .input-group .searchInput{
    border-radius: 18px 0 0 18px;
  }

  .navbar-right .input-group .input-group-btn .btn{
    border-left: none;
    border-radius: 0 18px 18px 0;
  }
   
  #navWarp .navbar-default .navRight>li>a{
    font-size: 14px;
    color: #fff;
  } 

  .setUp{
    position:absolute;
    right:50px;
    top:0;
    padding-left:48px;
    min-width:100px;
    height:50px;
    background-color:#0a2742;
  }
  .setUp .userPic{
    margin-top:9px;
    margin-left:-42px;
    width:32px;
    height:32px;
    border-radius:8px;
    float:left;
  }

  .setUp .welcome{
    padding:7px 5px;
    line-height:18px;
    max-height:50px;
    font-size:12px;
    color:#fff;
    float:left;
  }

  .setUp .dropdown-menu{
    top:50px;
    right: 0;
    left: auto;
  }

</style>
