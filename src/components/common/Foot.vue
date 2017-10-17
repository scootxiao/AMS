<template>
  <div id="footer" class="footer" style="display:block;">
    <strong>
      电话：0755-86102030 &nbsp;&nbsp;传真：0755-83127733
      <a href="javascript:void(0);" >当前版本：V2.4.1</a>
    </strong> 
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
  #footer{
    padding:3px 80px;
    min-height: 24px;
    line-height:24px;
    background-color: #5e6060;
    text-align: center;
    color: #fff;
    position:absolute;
    bottom: 0;
    right:0;
    left:0;
  } 

  #footer strong{
      font-weight: normal;
  }

  #footer a{
    margin-left:20px;
    color: #fff;
  }
</style>
