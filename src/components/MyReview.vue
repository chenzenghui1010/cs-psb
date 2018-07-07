<template>
  <div class="myreview">
    <titles/>
    
    <div class="section">
      <p class="time">4月28日 晚上9点：25</p>
      <div>
        <p class="sfr">受访人：<span>谢小明</span> <span  @click="details" >详情</span></p>
        <ul>
          <li>来访人：<span>王五</span></li>
          <li>来访时间：<span>2018/4/23 09:00</span></li>
          <li>随行人：<span>3人</span></li>
        </ul>
        <p >审核已通过</p>
      </div>
    </div>
    <div class="section">
      <p class="time">4月28日 晚上9点：25</p>
      <div>
        <p class="sfr">受访人：<span>谢小明</span> <span  @click="details" >详情</span></p>
        <ul>
          <li>来访人：<span>王五</span></li>
          <li>来访时间：<span>2018/4/23 09:00</span></li>
          <li>随行人：<span>3人</span></li>
        </ul>
        <p >审核已通过</p>
      </div>
    </div>
    <div class="section">
      <p class="time">4月28日 晚上9点：25</p>
      <div>
        <p class="sfr">受访人：<span>谢小明</span> <span  @click="details" >详情</span></p>
        <ul>
          <li>来访人：<span>王五</span></li>
          <li>来访时间：<span>2018/4/23 09:00</span></li>
          <li>随行人：<span>3人</span></li>
        </ul>
        <p >审核已通过</p>
      </div>
    </div>
    <div class="section">
      <p class="time">4月28日 晚上9点：25</p>
      <div>
        <p class="sfr">受访人：<span>谢小明</span> <span  @click="details" >详情</span></p>
        <ul>
          <li>来访人：<span>王五</span></li>
          <li>来访时间：<span>2018/4/23 09:00</span></li>
          <li>随行人：<span>3人</span></li>
        </ul>
        <p >审核已通过</p>
      </div>
    </div>
 
  
    <footer>
      <img src="../assets/底图.png"/>
    </footer>
  </div>
</template>

<script>
  import titles from './titles'
  
  export default {
    components: {titles},
    name: 'myreview',
    data() {
      return {}
    },
    
    
    methods:{
      details(){
     this.$router.push({path:'MyReviewDetails'})
      }
    },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  
  .myreview {
    position: absolute;
    font-family: ' HYi1gj';
    width: 100%;
    top: 0;bottom: 0;right: 0;left: 0;
    overflow-y: scroll;
    background-image: linear-gradient(-180deg, #14C8FF 12%, #0078B4 100%);
    color: #fff;
    font-size: 1.8rem;
    
  }
  
  .myreview .section {
  
  }
  
  .myreview .section .time {
    margin-top: 1.5rem;
    text-align: center;
    padding-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  .myreview .section div {
    height: 20rem;
    background: rgba(255, 255, 255, 0.20);
  }
  
  .myreview .section div p:first-child {
    font-size: 1.8rem;
    padding: 0 1.5rem;
    height: 3.8rem;
    border-bottom: 0.2rem solid #fff;
    line-height: 3.8rem;
  }
  
  .myreview .section div ul li {
    font-size: 1.8rem;
    padding: 0 1.5rem;
    height: 3.8rem;
    line-height: 3.8rem;
  }
  
  .section p:last-child {
    color: #BEFF64;
    text-align: center;
    font-size: 1.8rem;
    border-top: 0.1rem solid #FFF;
    line-height: 4.2rem;
  }
  
  .sfr span {
    display: inline-block;
    margin-left: 2rem;
  }
  
  .sfr span:last-child {
    float: right;
  }
  
  ul li span {
    float: right;
  }
  
  img {
    position: absolute;
    height:8rem;
    width: 100%;
  }
</style>
