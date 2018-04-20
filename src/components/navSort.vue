<template>
  <div>
    <ul class="nav" @click="choose">
      <li class="pop clred active-arrow-down" data-index=0>人气</li>
      <li class="sales" data-index=1>销量</li>
      <li class="price" data-index=2>价格</li>
      <li class="new" data-index=3>上新</li>
      <li class="filter" data-index=4 @click="filter">筛选</li>
    </ul>
    <mt-popup v-model="popupVisible" position="right">
      <div class="filter-box">
        <div>
          <h3>货源地</h3>
          <ul>
            <li>全部</li>
            <li>杭州</li>
            <li>濮院</li>
          </ul>    
        </div>
        <div>
          <h3>服务</h3>
          <ul>
            <li>实力厂家</li>
            <li>八天退货</li>
            <li>工厂认证</li>
            <li>原图保证</li>
          </ul>    
        </div>
        <div class="price-range">
          <h3>价格范围（元）</h3>
          <div>
            <span>最低价</span>
                <i>—</i>
            <span>最高价</span>
          </div>
        </div>
        <div>
          <h3>服务</h3>
          <ul>
            <li>春秋装</li>
            <li>夏装</li>
            <li>冬装</li>
          </ul>    
        </div>
        <div>
          <h3 class="category" @click="toggleSlide">类目</h3>
          <ul class="supply">
            <li>毛呢外套</li>
            <li>牛仔外套</li>
            <li>风衣</li>
            <li>短外套</li>
            <li>皮衣</li>
            <li>防晒衣</li>
          </ul>    
        </div>
        <div class="sub">
          <button class="reset">重置</button>
          <button class="sure">确定</button>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  name:'navSort',
  data () {
    return {
      popupVisible:false,
    }
  },
  methods:{
    choose:function(e){
      if(e.target.nodeName.toLowerCase()==='li') {
        let n = e.target.dataset.index;
        let ul = e.target.parentNode;
        let lis = ul.children;
        let len = lis.length;
        for(var i=0;i<len;i++) {
          if(lis[i]!=e.target && n!=4) {
            lis[i].classList.remove("clred","active-arrow-down","active-arrow-up");//移出高亮显示
            lis[i].removeAttribute('data-flag');
          }
        }
        if(n<4) {
            e.target.classList.add("clred");//text高亮
        }        
        if(n!=2&&n!=4 && n!=e.target.dataset.flag) {
          e.target.classList.add("active-arrow-down");
        } else if(n==2 && n!=e.target.dataset.flag) {
          e.target.classList.add("active-arrow-up");
        }
        if(e.target.classList.contains("clred")==true&&n!=4) {
          if(n==e.target.dataset.flag && e.target.classList.contains("active-arrow-down")==true) {
            e.target.classList.remove("active-arrow-down");
            e.target.classList.add("active-arrow-up");
          } else if (n==e.target.dataset.flag && e.target.classList.contains("active-arrow-up")==true) {
            e.target.classList.remove("active-arrow-up");
            e.target.classList.add("active-arrow-down");
          }           
        }
        e.target.setAttribute('data-flag',n);
      }
    },
    filter:function() {
      this.popupVisible = !this.popupVisible;
    },
    toggleSlide:function(e){
      e.target.classList.toggle("slide-down");
    },
  }
}
</script>

<style lang="scss" scoped>
$font:'PingFang SC Medium';
.nav {
    height: 80px;
    line-height: 80px;
    border-bottom:1px solid #d7d7d7;/*no*/
    background-color: #fff;
    li {
      float: left;
      width: 20%;
      font-family: $font;
      color:#666;
      font-size: 28px;/*px*/
      text-align: center;
      background-repeat:no-repeat;
      background-position:90% center;
      background-image: url('../assets/images/grey-triangle_down@2x.png');
      background-size:13px 7px;/*px*/ 
    }
    .price, {
      background-image: url('../assets/images/grey-triangle_up@2x.png');
    }
    .filter {
      background-image: url('../assets/images/sift@2x.png');
      background-size: 24px 24px;/*px*/
    }
    .active-arrow-down {  
      background-image: url('../assets/images/red-triangle_down@2x.png');
    }    
    .active-arrow-up {  
      background-image: url('../assets/images/red-triangle_up@2x.png');
    }
    .clred {
      color:#ff464e;
    }
  }
  .filter-box {
    position: relative;
    width:566px;
    height: 1334px;
    font-family: $font;
    background-color: #fff;
    ul {
      overflow: hidden;
      padding-bottom: 4px;
      border-bottom:1px solid #f4f4f4;/*no*/
    }
    li {
      width:170px;
      height: 72px;
      line-height: 72px;
      text-align: center;
      margin-left: 14px;
      float: left;
      background-color: #f4f4f4;
      border-radius: 8px;
      margin-bottom: 16px;
    } 
    h3,li {
    color: #222;
    font-size: 24px;/*px*/
    }
    h3 {
      height: 81px;
      line-height: 81px;
      padding-left: 14px;
      margin:0;
    }
    .price-range div {
      padding-left: 14px;
      span {
        display: inline-block;
        width:250px;
        height: 72px;
        line-height: 72px;
        text-align: center;
        font-size: 24px;
        background-color: #f4f4f4;
        color:#999;
        border-radius: 8px;
      }
      i {
        color: #999;
      }
    }
    .category {
      background: url('../assets/images/down@2x.png') no-repeat 95% center;
      background-size: 26px 14px;/*px*/
    }
    .slide-down {
      background: url('../assets/images/up@2x.png') no-repeat 95% center;
    }
    .sub {
      position: absolute;
      bottom:0;
      overflow: hidden;
      button {
        float: left;
        width:283px;
        height: 78px;
        line-height: 78px;
        text-align: center;
        box-sizing: border-box;
        font-size: 36px;/*px*/
        border:none;
        padding:0;
        background-color: #ff464e;
      }
      .sure {
        color: #fff;
      }
      .reset {
        border-top:1px solid #d7d7d7;
        background-color: #fff;
      }
    }
  }
</style>


