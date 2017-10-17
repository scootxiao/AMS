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
            <li class="navItem"><router-link to="/hsindex">搜索</router-link></li>
            <li class="navItem"><router-link to="/recommend">人工推荐</router-link></li>
            <li class="navItem"><router-link to="/analyze">专题分析</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
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
</style>
