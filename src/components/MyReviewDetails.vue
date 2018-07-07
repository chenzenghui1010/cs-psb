<template>
  <div class="mydetails">
    <titles/>
    <div>
      <p>受访人信息</p>
      <ul>
        <li><span>姓名：</span>4534</li>
        <li><span>手机号码：</span>472343</li>
        <li><span>部门：</span>4534</li>
      </ul>
    </div>
    <div>
      <p><span>来访人信息</span></p>
      <ul>
        <li><span>来访时间：</span>44</li>
        <li><span >离开时间：</span></li>
        <li class="hr"><span>来访人</span></li>
        <li><span>姓名：</span></li>
        <li><span>手机号：</span></li>
        <li><span>证件号：</span></li>
        <li><span></span>dfgdf</li>
        <li><span>车牌号</span></li>
      </ul>
    </div>
    <div class="follower">
      <ul>
        <li class="hr"><span >随行人1</span></li>
        <li><span>姓名：</span></li>
        <li><span>证件号：</span></li>
        <li><span></span>fgfg</li>
      </ul>
    </div>
    <div class="review">
      <p>审核结果</p>
      <span>审核中</span>
    </div>
    <button @click="returnMy">返回我的审核</button>
    <footer>
      <img src="../assets/底图.png"/>
    </footer>
  </div>
</template>


<script>
  import titles from './titles'
  
  export default {
    components: {titles},
    name: 'mydetails',
    data() {
      return {}
    },
    methods: {
      returnMy :function(){
        history.go(-1)
      }
    }
  }
</script>
<style scoped>
  .mydetails {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: scroll;
    background-image: linear-gradient(-180deg, #14C8FF 12%, #0078B4 100%);
    color: #fff;
    
  }
  
  .mydetails div p {
    height: 4.5rem;
    padding: 0 1rem;
    border-bottom: 0.2rem solid #fff;
    font-size: 1.8rem;
    line-height: 5.5rem;
  }

  .mydetails div ul{
    padding-left:  1rem;
    margin-top: 1rem;
  }
  .mydetails div ul li{
    font-size: 1.8rem;
    height: 3.3rem;
    line-height: 3.3rem;
  }
  .mydetails div ul li span{
    display: inline-block;
    width: 8rem;
  
  }
  
  .hr{
    border-bottom: 0.1rem solid #fff;
  }
  .review span{
    display: inline-block;
    padding: 1rem 0 0 1rem;
    color: #00D5FF ;
    font-size: 1.8rem;
    
  }
  button{
    margin:5rem 5% ;
    width: 90%;
    height: 4.5rem;
    border: none;
    background: #fff;
    color: #0386C1;
    font-size: 1.8rem;
    border-radius: 0.3rem;
  }
  img {
    position: absolute;
    height: 8rem;
    width: 100%;
  }


</style>
