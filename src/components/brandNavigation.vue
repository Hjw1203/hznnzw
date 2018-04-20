<template>
  <div>
    <ul class="nav" @click="select">
      <li class="pop clred active-arrow-down" data-index=0>默认</li>
      <li class="sales" data-index=1>销量</li>
      <li class="price" data-index=2>缺货</li>
      <li class="new" data-index=3>上新</li>
      <li class="filter" data-index=4 @click="bolt">筛选</li>
    </ul>
    <div class="main">
        <ul class="clearfix">
            <li class="clearfix">
                <div class="store-msg clearfix">
                    <div class="pull-left">
                        <div class="pull-left strength"></div>
                        <div class="pull-right">
                            <div>
                                <a class="store-name" href="">布衣坊</a>
                                <span class="store-year">3年店</span>
                                <span class="store-area">杭州</span>
                            </div>
                            <p class="store-address">好四季3楼3056</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="inline-block count">
                            <span>652</span>
                            <p>关注数</p>
                        </div>
                        <div class="inline-block collect">
                            <span class="collect-box"  @click="collect">取消</span>
                        </div>
                    </div>
                </div>
                <div class="sales-box1 clearfix">
                  <div class="sales-volume pull-left">
                    <span class="title">一年销量：</span>
                    <span class="sales">10000~50000</span>
                  </div>
                  <div class="brand-icon pull-right right">
                      <span class="title">品牌勋章：</span>
                      <span class="ico1">实</span>
                      <span class="ico2">退</span>
                      <span class="ico3">厂</span>
                      <span class="ico4">图</span>
                  </div>
                </div>
                <div class="sales-box2 clearfix">
                  <div class="pull-left">
                    <span class="title">最新上款：</span>
                    <span class="title container">2017-07-02</span>
                  </div>
                  <div class="pull-right right">
                    <span class="title">目前有货：</span>
                    <span class="container">368件</span>
                  </div>
                </div>
                <div class="sales-box3">
                  <span class="title">主营产品：</span>
                  <span class="product">连衣裙、套装/套裙、T恤</span>
                </div>
                <div class="img-box">
                  <ul :style="'width:'+imgNum*imgWidth*1.05+'px;'">
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20171228/20171228142338344.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152053832.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180206/20180206151400435.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152052143.jpg" alt="" ref="imgWidth"></a></li>
                  </ul>
                </div>
                <div class="sales-box4">
                  <div class="pull-left">
                    <span class="title">退货率:</span>
                    <span class="container">17.2%</span>
                  </div>
                  <div class="pull-left div2">
                    <span class="title">7天缺货率:</span>
                    <span class="title clgreen">20.2%</span>
                  </div>
                  <div class="pull-left div3">
                    <span class="title">90天缺货率:</span>
                    <span class="title clred">80.4%</span>
                  </div>
                </div>
            </li>
            <li class="clearfix">
                <div class="store-msg clearfix">
                    <div class="pull-left">
                        <div class="pull-left strength"></div>
                        <div class="pull-right">
                            <div>
                                <a class="store-name" href="">布衣坊</a>
                                <span class="store-year">3年店</span>
                                <span class="store-area">杭州</span>
                            </div>
                            <p class="store-address">好四季3楼3056</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="inline-block count">
                            <span>652</span>
                            <p>关注数</p>
                        </div>
                        <div class="inline-block collect">
                            <span class="collect-box"  @click="collect">取消</span>
                            <!-- <p class="collect-text">取消</p> -->
                        </div>
                    </div>
                </div>
                <div class="sales-box1 clearfix">
                  <div class="sales-volume pull-left">
                    <span class="title">一年销量：</span>
                    <span class="sales">10000~50000</span>
                  </div>
                  <div class="brand-icon pull-right right">
                      <span class="title">品牌勋章：</span>
                      <span class="ico1">实</span>
                      <span class="ico2">退</span>
                      <span class="ico3">厂</span>
                      <span class="ico4">图</span>
                  </div>
                </div>
                <div class="sales-box2 clearfix">
                  <div class="pull-left">
                    <span class="title">最新上款：</span>
                    <span class="title container">2017-07-02</span>
                  </div>
                  <div class="pull-right right">
                    <span class="title">目前有货：</span>
                    <span class="container">368件</span>
                  </div>
                </div>
                <div class="sales-box3">
                  <span class="title">主营产品：</span>
                  <span class="product">连衣裙、套装/套裙、T恤</span>
                </div>
                <div class="img-box">
                  <ul :style="'width:'+imgNum*imgWidth*1.05+'px;'">
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20171228/20171228142338344.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152053832.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180206/20180206151400435.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152052143.jpg" alt="" ref="imgWidth"></a></li>
                  </ul>
                </div>
                <div class="sales-box4">
                  <div class="pull-left">
                    <span class="title">退货率:</span>
                    <span class="container">17.2%</span>
                  </div>
                  <div class="pull-left div2">
                    <span class="title">7天缺货率:</span>
                    <span class="title clgreen">20.2%</span>
                  </div>
                  <div class="pull-left div3">
                    <span class="title">90天缺货率:</span>
                    <span class="title clred">80.4%</span>
                  </div>
                </div>
            </li>
            <li class="clearfix">
                <div class="store-msg clearfix">
                    <div class="pull-left">
                        <div class="pull-left strength"></div>
                        <div class="pull-right">
                            <div>
                                <a class="store-name" href="">布衣坊</a>
                                <span class="store-year">3年店</span>
                                <span class="store-area">杭州</span>
                            </div>
                            <p class="store-address">好四季3楼3056</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="inline-block count">
                            <span>652</span>
                            <p>关注数</p>
                        </div>
                        <div class="inline-block collect">
                            <span class="collect-box"  @click="collect">取消</span>
                            <!-- <p class="collect-text">取消</p> -->
                        </div>
                    </div>
                </div>
                <div class="sales-box1 clearfix">
                  <div class="sales-volume pull-left">
                    <span class="title">一年销量：</span>
                    <span class="sales">10000~50000</span>
                  </div>
                  <div class="brand-icon pull-right right">
                      <span class="title">品牌勋章：</span>
                      <span class="ico1">实</span>
                      <span class="ico2">退</span>
                      <span class="ico3">厂</span>
                      <span class="ico4">图</span>
                  </div>
                </div>
                <div class="sales-box2 clearfix">
                  <div class="pull-left">
                    <span class="title">最新上款：</span>
                    <span class="title container">2017-07-02</span>
                  </div>
                  <div class="pull-right right">
                    <span class="title">目前有货：</span>
                    <span class="container">368件</span>
                  </div>
                </div>
                <div class="sales-box3">
                  <span class="title">主营产品：</span>
                  <span class="product">连衣裙、套装/套裙、T恤</span>
                </div>
                <div class="img-box">
                  <ul :style="'width:'+imgNum*imgWidth*1.05+'px;'">
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20171228/20171228142338344.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152053832.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180206/20180206151400435.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152052143.jpg" alt="" ref="imgWidth"></a></li>
                  </ul>
                </div>
                <div class="sales-box4">
                  <div class="pull-left">
                    <span class="title">退货率:</span>
                    <span class="container">17.2%</span>
                  </div>
                  <div class="pull-left div2">
                    <span class="title">7天缺货率:</span>
                    <span class="title clgreen">20.2%</span>
                  </div>
                  <div class="pull-left div3">
                    <span class="title">90天缺货率:</span>
                    <span class="title clred">80.4%</span>
                  </div>
                </div>
            </li>
            <li class="clearfix">
                <div class="store-msg clearfix">
                    <div class="pull-left">
                        <div class="pull-left strength"></div>
                        <div class="pull-right">
                            <div>
                                <a class="store-name" href="">布衣坊</a>
                                <span class="store-year">3年店</span>
                                <span class="store-area">杭州</span>
                            </div>
                            <p class="store-address">好四季3楼3056</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="inline-block count">
                            <span>652</span>
                            <p>关注数</p>
                        </div>
                        <div class="inline-block collect">
                            <span class="collect-box"  @click="collect">取消</span>
                            <!-- <p class="collect-text">取消</p> -->
                        </div>
                    </div>
                </div>
                <div class="sales-box1 clearfix">
                  <div class="sales-volume pull-left">
                    <span class="title">一年销量：</span>
                    <span class="sales">10000~50000</span>
                  </div>
                  <div class="brand-icon pull-right right">
                      <span class="title">品牌勋章：</span>
                      <span class="ico1">实</span>
                      <span class="ico2">退</span>
                      <span class="ico3">厂</span>
                      <span class="ico4">图</span>
                  </div>
                </div>
                <div class="sales-box2 clearfix">
                  <div class="pull-left">
                    <span class="title">最新上款：</span>
                    <span class="title container">2017-07-02</span>
                  </div>
                  <div class="pull-right right">
                    <span class="title">目前有货：</span>
                    <span class="container">368件</span>
                  </div>
                </div>
                <div class="sales-box3">
                  <span class="title">主营产品：</span>
                  <span class="product">连衣裙、套装/套裙、T恤</span>
                </div>
                <div class="img-box">
                  <ul :style="'width:'+imgNum*imgWidth*1.05+'px;'">
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20171228/20171228142338344.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152053832.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180206/20180206151400435.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152052143.jpg" alt="" ref="imgWidth"></a></li>
                  </ul>
                </div>
                <div class="sales-box4">
                  <div class="pull-left">
                    <span class="title">退货率:</span>
                    <span class="container">17.2%</span>
                  </div>
                  <div class="pull-left div2">
                    <span class="title">7天缺货率:</span>
                    <span class="title clgreen">20.2%</span>
                  </div>
                  <div class="pull-left div3">
                    <span class="title">90天缺货率:</span>
                    <span class="title clred">80.4%</span>
                  </div>
                </div>
            </li>
            <li class="clearfix">
                <div class="store-msg clearfix">
                    <div class="pull-left">
                        <div class="pull-left strength"></div>
                        <div class="pull-right">
                            <div>
                                <a class="store-name" href="">布衣坊</a>
                                <span class="store-year">3年店</span>
                                <span class="store-area">杭州</span>
                            </div>
                            <p class="store-address">好四季3楼3056</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="inline-block count">
                            <span>652</span>
                            <p>关注数</p>
                        </div>
                        <div class="inline-block collect">
                            <span class="collect-box"  @click="collect">取消</span>
                            <!-- <p class="collect-text">取消</p> -->
                        </div>
                    </div>
                </div>
                <div class="sales-box1 clearfix">
                  <div class="sales-volume pull-left">
                    <span class="title">一年销量：</span>
                    <span class="sales">10000~50000</span>
                  </div>
                  <div class="brand-icon pull-right right">
                      <span class="title">品牌勋章：</span>
                      <span class="ico1">实</span>
                      <span class="ico2">退</span>
                      <span class="ico3">厂</span>
                      <span class="ico4">图</span>
                  </div>
                </div>
                <div class="sales-box2 clearfix">
                  <div class="pull-left">
                    <span class="title">最新上款：</span>
                    <span class="title container">2017-07-02</span>
                  </div>
                  <div class="pull-right right">
                    <span class="title">目前有货：</span>
                    <span class="container">368件</span>
                  </div>
                </div>
                <div class="sales-box3">
                  <span class="title">主营产品：</span>
                  <span class="product">连衣裙、套装/套裙、T恤</span>
                </div>
                <div class="img-box">
                  <ul :style="'width:'+imgNum*imgWidth*1.05+'px;'">
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20171228/20171228142338344.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152053832.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180206/20180206151400435.jpg" alt="" ref="imgWidth"></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152052143.jpg" alt="" ref="imgWidth"></a></li>
                  </ul>
                </div>
                <div class="sales-box4">
                  <div class="pull-left">
                    <span class="title">退货率:</span>
                    <span class="container">17.2%</span>
                  </div>
                  <div class="pull-left div2">
                    <span class="title">7天缺货率:</span>
                    <span class="title clgreen">20.2%</span>
                  </div>
                  <div class="pull-left div3">
                    <span class="title">90天缺货率:</span>
                    <span class="title clred">80.4%</span>
                  </div>
                </div>
            </li>
            <li class="clearfix">
                <div class="store-msg clearfix">
                    <div class="pull-left">
                        <div class="pull-left strength"></div>
                        <div class="pull-right">
                            <div>
                                <a class="store-name" href="">布衣坊</a>
                                <span class="store-year">3年店</span>
                                <span class="store-area">杭州</span>
                            </div>
                            <p class="store-address">好四季3楼3056</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="inline-block count">
                            <span>652</span>
                            <p>关注数</p>
                        </div>
                        <div class="inline-block collect">
                            <span class="collect-box"  @click="collect">取消</span>
                            <!-- <p class="collect-text">取消</p> -->
                        </div>
                    </div>
                </div>
                <div class="sales-box1 clearfix">
                  <div class="sales-volume pull-left">
                    <span class="title">一年销量：</span>
                    <span class="sales">10000~50000</span>
                  </div>
                  <div class="brand-icon pull-right right">
                      <span class="title">品牌勋章：</span>
                      <span class="ico1">实</span>
                      <span class="ico2">退</span>
                      <span class="ico3">厂</span>
                      <span class="ico4">图</span>
                  </div>
                </div>
                <div class="sales-box2 clearfix">
                  <div class="pull-left">
                    <span class="title">最新上款：</span>
                    <span class="title container">2017-07-02</span>
                  </div>
                  <div class="pull-right right">
                    <span class="title">目前有货：</span>
                    <span class="container">368件</span>
                  </div>
                </div>
                <div class="sales-box3">
                  <span class="title">主营产品：</span>
                  <span class="product">连衣裙、套装/套裙、T恤</span>
                </div>
                <div class="img-box">
                  <ul>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20171228/20171228142338344.jpg" alt=""></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152053832.jpg" alt=""></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180206/20180206151400435.jpg" alt=""></a></li>
                    <li><a href=""><img src="http://img.hznzcn.com/images/goods_new/20180323/20180323152052143.jpg" alt=""></a></li>
                  </ul>
                </div>
                <div class="sales-box4">
                  <div class="pull-left">
                    <span class="title">退货率:</span>
                    <span class="container">17.2%</span>
                  </div>
                  <div class="pull-left div2">
                    <span class="title">7天缺货率:</span>
                    <span class="title clgreen">20.2%</span>
                  </div>
                  <div class="pull-left div3">
                    <span class="title">90天缺货率:</span>
                    <span class="title clred">80.4%</span>
                  </div>
                </div>
            </li>
        </ul>
    </div>
    <mt-popup v-model="popupShow" position="right">
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
        <div>
          <h3>退货率</h3>
          <ul>
            <li>10%以下</li>
            <li>20%以下</li>
            <li>30%以下</li>
          </ul> 
        </div>
        <div>
          <h3>90天缺货率</h3>
          <ul>
            <li>10%以下</li>
            <li>20%以下</li>
            <li>30%以下</li>
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
  name:'brandSearchResult',
  data () {
    return {
      popupShow:false,
      imgNum:4,
      imgWidth:0
    }
  },
  methods:{
    select:function(e){
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
    bolt:function() {
      this.popupShow = !this.popupShow;
    },
    collect:function(e){
       console.log(e.target)
       e.target.classList.toggle('collect-img');
       if (e.target.innerHTML=='取消') {
          e.target.innerHTML='收藏';
       } else {
           e.target.innerHTML='取消';
       }
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
    position: fixed;
    width:100%;
    top:0;
    height: 80px;
    line-height: 80px;
    border-bottom:1px solid #d7d7d7;/*no*/
    background-color: #fff;
    li {
      float: left;
      width: 20%;
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
        border-top:1px solid #d7d7d7;/*no*/
        background-color: #fff;
      }
    }
  }
  .main {
      padding-top:14px;
      margin-top: 81px;
    li {
      margin-bottom: 14px;
      padding:33px 0 23px 25px;  
    }
    >ul>li {
      background-color: #fff;
    }
  }
  .pull-left {
      float: left;
  }
  .pull-right {
      float: right;
  }
.clearfix:before,
.clearfix:after {
    display: table;
    content: " ";
    clear: both;
}
.clearfix{
    *zoom: 1;
}
p {
    margin:0;
}
::-webkit-scrollbar {/*隐藏滚轮*/
display: none;
}
.inline-block {
    display: inline-block;
}
.store-msg {
    padding-bottom: 24px;
    border-bottom: 1px solid #d7d7d7;/*no*/
    margin-right: 24px;
    span {
        display: inline-block;
    }
  }
.strength {
    width:57px;
    height: 72px;
    background: url('../assets/images/strength@2x.png') no-repeat center 7px;
    background-size: 57px 63px;/*px*/
    margin-right: 16px;
}
.store-name {
    color: #222;
    font-family: 'PingFang SC Bold';
    font-weight: bold;
    font-size: 32px;/*px*/
    text-decoration: none;
}
.store-year {
    width:70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #e3c71c;
    color: #783400;
    border-radius: 4px;
    font-family: 'PingFang SC Bold';
    font-weight: bold;
    font-size: 20px;/*px*/
    vertical-align: top;
    margin-top: 5px;
    margin-left: 5px;    
}
.store-area {
    width:52px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    background-color: #fd626a;
    color: #fff;
    border-radius: 4px;
    font-family: 'PingFang SC Medium';
    font-size: 20px;/*px*/ 
    vertical-align: top;    
    margin-top: 5px;
    margin-left: 5px;
}
.store-address {
    font-family: 'PingFang SC Medium';
    font-size: 22px;/*px*/
    color: #999;
    margin-top: 13px;
}
.count,.collect {
    text-align: center;
}
.count {
    padding-right: 20px;
    border-right:1px solid #d7d7d7;
    span {
        font-family: 'PingFang SC Bold';
        font-weight:bold;
        color: #222;
        font-size: 24px;/*px*/
    }
    p {
       color: #999;
       font-family: 'PingFang SC Medium';
       font-size: 22px;/*px*/
       margin-top: 16px; 
    }
}
.collect {
    padding-left: 11px;
    vertical-align: top;
    span {
        width:61px;
        height: 69px;
        padding-top: 44px;
        box-sizing: border-box;
        background: url('../assets/images/collection-s@2x.png') no-repeat center 0;
        background-size: 27px 26px;/*px*/
        color: #999;
        font-family: 'PingFang SC Medium';
        font-size: 22px;/*px*/
    }
    .collect-img {
    background-image: url('../assets/images/collection-n@2x.png');
}
}
  .main ul li .title {
    color: #999;
    font-family: 'PingFang SC Medium';
    font-size: 24px;/*px*/
    width:auto;
    margin:0;
  }
  .main ul li .container {
    color: #222;
    font-family: 'PingFang SC Medium';
    font-size: 24px;/*px*/
    width:auto;
  }
.sales-box1 {
  margin-top: 21px;
  .sales {
    font-size: 24px;/*px*/
    color: #ff464e;
  }
  .brand-icon {
    span {
      display: inline-block;
      width:34px;
      height: 32px;;
      line-height:32px;
      color: #fff;
      text-align: center;
      font-size: 20px;/*px*/
      border-radius: 4px;
      margin-right: 4px;
    }
    .ico1 {
      background-color: #ff765b;
    }
    .ico2 {
      background-color: #53cda3;
    }
    .ico3 {
      background-color: #4ec6bf;
    }
    .ico4 {
      background-color: #aa80d6;
    }
  }
}
.sales-box2 {
  margin-top: 19px;
}
.right {
  width:336px;
  text-align: left;
}
.sales-box3 {
  margin-top: 23px;
  .product {
    display: inline-block;
    width:572px;
    color: #222;
    font-size: 24px;/*px*/
    overflow: hidden;
    vertical-align: top;
  }
}
.img-box {
  width:100%;
  height: 230px;
  margin-top: 25px;
  overflow-x: scroll;
  overflow-y: hidden;
  ul {
    height: 230px;
    white-space:nowrap;
    font-size: 0;
  }
  li {
  display: inline-block;
  width:230px;
  height: 230px;
  padding:0;
  margin-right: 6px;
  margin-bottom:0;
  a {
    display: block;
    width:230px;
    height: 230px;
  }
  img {
    width:230px;
    height: 230px;
  }
}
}
.sales-box4 {
  margin-top: 24px;
  div {
    padding-right: 20px;
  }
  .div2 {
    padding-left: 20px;
    border-right:1px solid #ebebeb;/*no*/
    border-left:1px solid #ebebeb;/*no*/
  }
  .div3 {
    padding-left: 20px;
  }
  .clred {
    color: #ff464e !important;
  }
  .clgreen {
    color: #2ea067 !important;
  }
}
</style>
