<template>
  <div>
      <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a href="">
                  <img src="http://img.hznzcn.com/upload_file/images/C1_hszm.jpg?v=20180404" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="">
                  <img src="http://img.hznzcn.com/upload_file/images/C1_ysh.jpg?v=20170811" alt="">
              </a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="">
                  <img src="http://img.hznzcn.com/upload_file/images/C1_olbn.jpg?v=20180404" alt="">
              </a>
            </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="navigation"> <!-- 分类导航 -->
        <ul class='clearfix'>
            <li>
                <router-link to='brandNavigation'>品牌导航</router-link>
            </li>
            <li>
                <router-link to='category'>商品分类</router-link>
            </li>
            <li>
                <router-link to=''>热卖排行</router-link>
            </li>
            <li>
                <router-link to='newGoods'>每日新款</router-link>
            </li>
            <li>
                <router-link to='lightningSend'>闪电发货</router-link>
            </li>
            <li>
                <router-link to='application'>商家入驻</router-link>
            </li>
            <li>
                <router-link to=''>帮助中心</router-link>
            </li>
        </ul>
        <div class="headline">
            <span class="pull-left"></span>
            <div  class="pull-left">
                <ul style="left:0;" ref="headline">
                    <li>
                        <router-link to='newHeadlines'>
                            <span class="range">公告</span>
                            <p>2018年春节各类信息汇总-1月27日更新</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='newHeadlines'>
                            <span class="range">热评</span>
                            <p>2018年春节各类信息汇总-1月27日更新</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='newHeadlines'>
                            <span class="range">热议</span>
                            <p>2018年春节各类信息汇总-1月27日更新</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <span class="pull-right"></span>
        </div>
      </div>
      <div class="stores">
          <div class="goods-title"><span>好店</span>推荐</div>
          <div class="goods-box">
            <ul>
                <li>
                    <div class="clearfix">
                        <div class="pull-left left">
                            <div>
                                <span>垲花语</span>
                                <span>3年店</span>
                                <span>杭州</span>  
                            </div>
                            <div>好四季3楼3056</div>
                        </div>
                        <div class="pull-right right">
                                <div class="count">
                                    <span>652</span>
                                    <p>关注数</p>
                                </div>
                                <div class="collect">
                                    <span class="collect-box"  @click="collect">取消</span>
                                </div>
                        </div>
                    </div>
                    <div class="goods clearfix">
                        <div class="pull-left">
                            <router-link to='productDetail'>
                                <img src="http://img.hznzcn.com/images/goods_new/20180327/20180327162414496.jpg" alt="">
                                <span>￥90.00</span>
                            </router-link>
                        </div>
                        <div class="pull-right">
                            <div>
                                <router-link to='productDetail'>
                                    <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401162244930.jpg" alt="">
                                    <span>￥90.00</span>
                                </router-link>
                            </div>
                            <div>
                                <router-link to='productDetail'>
                                    <img src="http://img.hznzcn.com/images/goods_new/20180327/20180327162404974.jpg" alt="">
                                    <span>￥90.00</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="probability">
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
                <li>
                    <div class="clearfix">
                        <div class="pull-left left">
                            <div>
                                <span>垲花语</span>
                                <span>3年店</span>
                                <span>杭州</span>  
                            </div>
                            <div>好四季3楼3056</div>
                        </div>
                        <div class="pull-right right">
                                <div class="count">
                                    <span>652</span>
                                    <p>关注数</p>
                                </div>
                                <div class="collect">
                                    <span class="collect-box"  @click="collect">取消</span>
                                </div>
                        </div>
                    </div>
                    <div class="goods clearfix">
                        <div class="pull-left">
                            <router-link to='productDetail'>
                                <img src="http://img.hznzcn.com/images/goods_new/20160809/20160809152404637.jpg" alt="">
                                <span>￥90.00</span>
                            </router-link>
                        </div>
                        <div class="pull-right">
                            <div>
                                <router-link to=''>
                                    <img src="http://img.hznzcn.com/images/goods_new/20180124/20180124161242436.jpg" alt="">
                                    <span>￥90.00</span>
                                </router-link>
                            </div>
                            <div>
                                <router-link to=''>
                                    <img src="http://img.hznzcn.com/images/goods_new/20160809/20160809152401282.jpg" alt="">
                                    <span>￥90.00</span>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="probability">
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
      </div>
      <div class="send">
          <div class="send-title clearfix">
              <span>闪电</span>发货
              <a href="">更多</a>
          </div>
          <div class="send-box">
              <ul>
                  <li>
                      <router-link to='productDetail'>
                          <div>
                              <img src="http://img.hznzcn.com/images/goods_new/20170521/20170521204340022.jpg" alt="">
                          </div>
                          <div class="keywords">
                              <span>杭州</span>
                              <span>关键词 GJC7711</span>
                          </div>
                          <div class="info">蝴蝶结潮流纯色长袖开衫</div>
                          <div class="price">
                              <span><i>￥</i>115.00</span>
                              <span>闪电发货</span>
                          </div>
                      </router-link>
                  </li>
                  <li>
                      <router-link to=''>
                          <div>
                              <img src="http://img.hznzcn.com/images/goods_new/20150726/2015726_1249312458.jpg" alt="">
                          </div>
                          <div class="keywords">
                              <span>杭州</span>
                              <span>关键词 GJC7711</span>
                          </div>
                          <div class="info">蝴蝶结潮流纯色长袖开衫</div>
                          <div class="price">
                              <span><i>￥</i>115.00</span>
                              <span>闪电发货</span>
                          </div>
                      </router-link>
                  </li>
                  <li>
                      <router-link to=''>
                          <div>
                              <img src="http://img.hznzcn.com/images/goods_new/20180329/20180329171124287.jpg" alt="">
                          </div>
                          <div class="keywords">
                              <span>杭州</span>
                              <span>关键词 GJC7711</span>
                          </div>
                          <div class="info">蝴蝶结潮流纯色长袖开衫</div>
                          <div class="price">
                              <span><i>￥</i>115.00</span>
                              <span>闪电发货</span>
                          </div>
                      </router-link>
                  </li>
              </ul>
          </div>
      </div>
      <div class="market">
          <div class="market-title">
              <span>热批</span>市场
          </div>
          <ul class="market-box">
              <li>
                  <router-link to='brandNavigation'>
                      <div class="market-name">
                          <span>杭州</span>
                          <span>意法服饰城</span>
                      </div>
                      <div class="add-new-goods">本周上新 3954款</div>
                      <div class="hot-num">热销指数 393354</div>
                      <div class="store-num">入驻商家5922家</div>
                  </router-link>
              </li>
              <li>
                  <router-link to='brandNavigation'>
                      <div class="market-name">
                          <span>杭州</span>
                          <span>好四季鞋包服饰城</span>
                      </div>
                      <div class="add-new-goods">本周上新 3954款</div>
                      <div class="hot-num">热销指数 393354</div>
                      <div class="store-num">入驻商家5922家</div>
                  </router-link>
              </li>
              <li>
                  <router-link to='brandNavigation'>
                      <div class="market-name">
                          <span>杭州</span>
                          <span>中纺中心</span>
                      </div>
                      <div class="add-new-goods">本周上新 3954款</div>
                      <div class="hot-num">热销指数 393354</div>
                      <div class="store-num">入驻商家5922家</div>
                  </router-link>
              </li>
              <li>
                  <router-link to='brandNavigation'>
                      <div class="market-name">
                          <span>濮院</span>
                          <span>濮院毛衫市场</span>
                      </div>
                      <div class="add-new-goods">本周上新 3954款</div>
                      <div class="hot-num">热销指数 393354</div>
                      <div class="store-num">入驻商家5922家</div>
                  </router-link>
              </li>
          </ul>
      </div>
      <div class="chinyi">
          <div class="chinyi-title">
              <span>好货</span>推荐
          </div>
          <div class="clearfix sort-box">
            <ul class="sort" @click="sortSelect">
                <li class="actived">最新</li>
                <li>最热</li>
                <li>连衣裙</li>
                <li>套装/套裙</li>
                <li>风衣</li>
                <li>衬衫</li>
                <li>短外套</li>
                <li>毛呢外套</li>
            </ul>
            <span class='pull-right' @click="slide"></span>              
          </div>
      </div>
      <div class="goods-main">
        <ul>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
            <li>
            <router-link to='productDetail'>
                <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
                <div class="goods-message">
                <div class="keywords-box">
                    <span class="city">杭州</span>
                    <span class="state">预售</span>
                    <span class="keywords">关键词 GJC7711</span>
                </div>
                <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                    <span class="send">闪电发货</span>
                    <span class="spread">推广</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>
                </div>        
            </router-link>
            <div class="find-similar"><a href="">找相似</a></div>
            </li>
        </ul>            
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
      }
  },
  mounted:function() {
      this.headLine();
  },
  methods:{
    //   next(e) {
    //       let oUl = e.target.parentNode.children[1].children[0];
    //       let len =  oUl.children.length;
    //       console.log(-len * 525)
    //       if( parseInt(oUl.style.left) < -(len-1)*525 ) {
    //           oUl.style.left = 0+'px';
    //           return;
    //       }
    //       oUl.style.left = (parseInt(oUl.style.left)-525)+'px';
    //       console.log(e.target.parentNode.children[1].children[0].style.left)
    //   },
      headLine() {
          var timer,i=0;
          let obj = this.$refs.headline;
          let firstInfo = obj.firstChild.cloneNode(true);
          let w = obj.clientWidth;
          obj.appendChild(firstInfo);
          var len = obj.children.length;         
          function autoShow() {
              timer = setInterval(function(){
                  showInfo(i);
                  i++;
              },3000)
          }
          function showInfo(num) {
              if(num >= len) {
                  i = 1;
              }
            //   console.log(i)
            obj.style.left = -(w*i)+'px';
          }
          autoShow();
      },
    collect:function(e){
       console.log(e.target)
       e.target.classList.toggle('collect-img');
       if (e.target.innerHTML=='取消') {
          e.target.innerHTML='收藏';
       } else {
           e.target.innerHTML='取消';
       }
    },
    slide(e) {
       e.target.classList.toggle('span-down');
       e.target.parentNode.children[0].classList.toggle('sort-slide');
    },
    sortSelect(e) {
        if(e.target.nodeName.toLowerCase() === 'li') {
            let len = e.target.parentNode.children.length;
            let lis = e.target.parentNode.children;
            for(var i=0;i<len;i++) {
                if(lis[i] != e.target) {
                    lis[i].classList.remove('actived');
                }
            }
            e.target.classList.add('actived');
        }
    }
  }
}
</script>

<style lang="scss" scoped>
    $fontm: PingFang SC Medium;
    $fontb: PingFang SC Bold;
    @mixin hz {
        display: inline-block;
        width:52px;
        height: 28px;
        background-color: #fd626a;
        color: #fff;
        line-height: 28px;
        text-align: center;
        margin-left: 6px;
        font-size: 20px;
        vertical-align: top;
        margin-top: 8px;
        border-radius: 4px;
    }
    @mixin sd {
        display: inline-block;
        width:94px;
        height: 28px;
        color: #11c05a;
        border:1px solid #10bf5a;/*no*/
        font-family: $fontm;
        font-size: 20px;
        text-align: center;
        line-height: 28px;
    }
.swiper {
    //轮播
    height: 373px;
    a {
      display: block;
      height: 100%;
      img {
          width: 100%;
          height: 100%;
      }
    }
  }

    //主导航
    .navigation {
        position: relative;
        top:-7px;
        height: 418px;
        background:url('../assets/images/bg2x.png') no-repeat center;
        background-size: cover;
        >ul li {
            height: 122px;
            text-align: center;
            float: left;
            margin:35px 46px 0 45px;
            padding-top: 96px;
            box-sizing: border-box;
            background-position: center 0;
            background-repeat: no-repeat;
            background-size: 84px 84px;
            a {
                font-family:$fontm;
                font-size: 24px;
                color: #666;
                box-sizing: border-box;         
            }
            
        }
        >ul li:first-child {
            background-image: url('../assets/images/Brand_navigation@2x.png');
        }
        >ul li:nth-child(2) {
            background-image: url('../assets/images/classification@2x.png');
        }
        >ul li:nth-child(3) {
            background-image: url('../assets/images/ranking@2x.png');
        }
        >ul li:nth-child(4) {
            background-image: url('../assets/images/The_new@2x.png');
        }
        >ul li:nth-child(5) {
           background-image: url('../assets/images/Lightning_delivery@2x.png');
        }
        >ul li:nth-child(6) {
           background-image: url('../assets/images/tenants@2x.png');
        }
        >ul li:last-child {
           background-image: url('../assets/images/Help_center@2x.png');
        }
        .headline {
            height: 77px;
            margin:29px 15px 0 17px;
            border-top: 1px solid #d7d7d7;/*no*/
            padding-top: 23px;
            box-sizing: border-box;
            span.pull-left {
                display: inline-block;
                width:121px;
                height: 31px;
                padding:0 15px 0 11px;
                background: url('../assets/images/news@2x.png') no-repeat center;
                background-size: 121px 31px;
                border-right:1px solid #d7d7d7;/*no*/
            }
            ul {
                font-size: 0;
                position: relative;
                white-space:nowrap;
                transition: all .2s;
            }
            li {
                display: inline-block;
                width:100%;
            }
            >div {
                font-size: 0;
                width:73%;
                overflow: hidden;
                span {
                    display: inline-block;
                    width:55px;
                    height: 33px;
                    margin: 0 10px 0 11px;
                    text-align: center;
                    line-height: 33px;
                    color: #ff6c24;
                    background-color: rgba(255,234,223,1);
                    font-family:$fontb;
                    font-size: 24px;
                }
                p {
                    display: inline-block;
                    font-size: 24px;
                    color: #494949;
                }
            }
            span.pull-right {
                display: inline-block;
                width:27px;
                height: 33px;
                background: url('../assets/images/right@2x.png') no-repeat left center;
            }
        }
    }

    //好店推荐
    .stores {
        height: 742px;
        background-color: #fff;
        margin-top: 13px;
        .goods-title {
            height:102px;
            line-height: 102px; 
            font-size: 32px;
            font-weight: bold;
            color: #222;
            text-align: center;
            background: url('../assets/images/good_shop@2x.png') no-repeat 37% center;
            background-size: 38px 35px;/*px*/
            span {
                color: #663dee;
            }
        }
        .goods-box {
            box-sizing: border-box;
            overflow-x: scroll;
        }
        ul {
            position: relative;
            white-space:nowrap;
            transition: all .2s;
            font-size: 0;
            padding:8px 5px 22px 5px;
            li {
                display: inline-block;
                width:660px;
                height: 610px;
                margin-left: 16px;
                border-radius: 10px;
                padding:29px 18px 27px 18px;
                box-sizing: border-box;
                box-shadow:5px 5px 13px rgba(0,0,0,0.09) ,-3px -3px 13px rgba(0,0,0,0.09) ;
                .left {
                   div:first-child {
                     span:first-child {
                         font-family: $fontb;
                         font-size: 32px;/*px*/
                         font-weight: bold;
                         color: #222;
                     }
                     span:nth-child(2) {
                         display: inline-block;
                         width: 70px;
                         height:28px;
                         background-color: #fbde2d;
                         color: #783400;
                         text-align: center;
                         line-height: 28px;
                         font-size: 20px;/*px*/
                         border-radius: 4px;
                         margin-left: 4px;
                         vertical-align: top;
                         margin-top: 8px;
                     }
                     span:nth-child(3) {
                        @include hz;
                     }
                   }
                   div:last-child {
                       color: #999;
                       font-family: $fontm;
                       font-size: 22px;
                       margin-top: 13px;
                   }
                }
                .right {
                    .count {
                        display: inline-block;
                        padding-right: 20px;
                        text-align: center;
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
                        display: inline-block;
                        padding-left: 11px;
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
                }
                .goods {
                    margin-top: 25px;
                    .pull-left {
                        a {
                            position: relative;
                            display: inline-block;
                            width:412px;
                            height: 412px;
                            span {
                                position: absolute;
                                left:19px;
                                bottom:10px;
                                font-size: 26px;/*px*/
                                color: #fff;
                            }
                            img {
                                width:100%;
                                height: 100%;
                                border-radius: 10px;
                            }
                        }
                    }
                    .pull-right {
                        a {
                            position: relative;
                            display: inline-block;
                            width:200px;
                            height: 200px;
                            span {
                                position: absolute;
                                left:13px;
                                bottom:10px;
                                font-size: 26px;/*px*/
                                color: #fff;
                            }
                            img {
                                width:100%;
                                height: 100%;
                                border-radius: 10px;
                            }
                        }
                        div:last-child a {
                            margin-top: 12px;
                        }
                    }
                }
                .probability {
                  margin-top: 24px;
                  font-family: $fontm;
                  font-size: 24px;
                    div {
                        padding-right: 10px;
                    }
                    .div2 {
                        padding-left: 10px;
                        border-right:1px solid #ebebeb;/*no*/
                        border-left:1px solid #ebebeb;/*no*/
                    }
                    .div3 {
                        padding-left: 10px;
                    }
                    .clred {
                        color: #ff464e !important;
                    }
                    .clgreen {
                        color: #2ea067 !important;
                    }
                }
            }
            li:last-child {
                margin-right: 20px;
            }
        }
    }
    //闪电发货
    .send {
        height: 610px;
        background-color: #fff;
        margin-top: 20px;
        .send-title {
            position: relative;
            font-weight: bold;
            font-size: 32px;
            color: #222;
            height: 102px;
            text-align: center;
            background: url('../assets/images/lightning@2x.png') no-repeat 37% center;
            span {
                color: #ff464e;
                line-height: 102px;
            }
            a {
                position: absolute;
                width:100px;
                height: 26px;
                right:31px;
                top:50%;
                margin-top: -13px;
                font-size: 24px;/*px*/
                color: #999;
                font-weight: normal;
                background: url('../assets/images/arrow_right.png') no-repeat right center;
                background-size: 20px 20px;
            }
        }
        .send-box {
            overflow-x: scroll;
            ul {
                font-size: 0;
                position: relative;
                white-space:nowrap;
                transition: all .2s;
                padding-bottom: 22px;
                padding-top: 8px;
            li:last-child {
                margin-right: 20px;
            }
            }
            li {
                display: inline-block;
                width:315px;
                height: 478px;
                margin-left: 16px;
                border-radius: 10px;
                overflow: hidden;
                box-shadow:5px 5px 13px rgba(0,0,0,0.09) ,-3px -3px 13px rgba(0,0,0,0.09) ;
            }
            img {
                width:315px;
                height: 315px;
            }
            .keywords {
                height: 58px;
                line-height: 58px;
                padding-left:19px;
                span:first-child {
                    @include hz;
                    margin-top: 15px;
                    margin-left: 0;          
                }
                span:last-child {
                    width:208px;
                    height: 26px;
                    font-family: $fontm;
                    color: #222;
                    font-size: 28px;
                    margin-left: 6px;
                    overflow: hidden;
                }
            }
            .info {
                width:281px;
                height: 30px;
                line-height: 30px;
                padding-left: 19px;
                color: #999;
                font-family: $fontm;
                font-size: 24px;/*px*/
                margin-bottom: 15px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .price {
                padding-left: 19px;
                span:first-child {
                    font-size: 36px;
                    color: #ff464e;
                    font-weight: bold;
                    i {
                        font-style: normal;
                        font-size: 24px;/*px*/
                    }
                }
                span:last-child {
                    @include sd;
                    margin-left: 10px;
                    vertical-align: top;
                    margin-top: 6px;
                }
            }
        }
    }
    .market {
        height: 882px;
        background-color: #fff;
        margin-top: 20px;
        .market-title {
            font-size: 32px;/*px*/
            color: #222;
            height: 102px;
            line-height: 102px;
            text-align: center;
            font-weight: bold;
            background: url('../assets/images/Market_icon@2x.png') no-repeat 37% center;
            span {
                color: #12b37a;
            }
        }
        ul {
            margin-left: 16px;
            margin-right: 15px;
            font-size:0;
            border-top:1px solid #d7d7d7;
            li:first-child {
                background: url('../assets/images/yifaImg.png') no-repeat center;
                background-size: cover;
            }
            li:nth-child(2) {
                background: url('../assets/images/sd-haosjImg.png') no-repeat center;
                background-size: cover;
            }
            li:nth-child(3) {
                background: url('../assets/images/sd-zfzxImg.png') no-repeat center;
                background-size: cover;
            }
            li:nth-child(4) {
                background: url('../assets/images/sd-pyImg.png') no-repeat center;
                background-size: cover;
                .market-name span:first-child {
                    background-color: #ff7428;
                }
            }
            li:nth-child(2n) {
                margin-left: 18px;
            }
        }
        li {
            width:350px;
            height: 350px;
            display: inline-block;
            border-radius: 10px;
            margin-top: 26px;
            vertical-align: top;
            padding-top: 38px;
            padding-left: 28px;
            box-sizing: border-box;
            .market-name {
                span:first-child {
                    @include hz;
                    margin:0;
                    margin-top: 5px;
                }
                span:last-child {
                    font-family: $fontb;
                    font-size: 30px;/*px*/
                    color: #fffefe;
                    font-weight: bold;
                    margin-left: 5px;
                }
            }
            .add-new-goods,.hot-num {
                    font-family: $fontb;
                    font-size: 24px;/*px*/
                    color: #f1f1f1;
                    font-weight: bold;
                    margin-top: 14px;
                    overflow: hidden;
            }
            .store-num {
                width:230px;
                height: 44px;
                margin:0 auto;
                background-color: #26d092;
                color: #fff;
                text-align: center;
                line-height: 44px;
                border-radius: 22px;
                font-size: 24px;/*px*/
                margin-top: 130px;
            }
        }
    }

    //好货推荐
    .chinyi {
        background-color: #fff;
        margin-top: 20px;
        .chinyi-title {
            height: 102px;
            line-height: 102px;
            font-size: 32px;/*px*/
            font-weight: bold;
            color: #222;
            text-align: center;
            background: url('../assets/images/haohuo@2x.png') no-repeat 37% center;
            span {
                color: #ff464e;
            }
        }
        .sort-box {
            .sort {
            font-size: 0;
            width:593px;
            float: left;
            height: 71px;
            overflow: hidden;
            margin-left: 44px;
            transition: all .2s;
                li {
                    display: inline-block; 
                    font-family: $fontm;
                    font-size: 24px;/*px*/
                    color: #999;
                    padding:12px;
                    margin-bottom: 20px;
                }
            } 
            .sort-slide {
                height: 142px;
            }
            .actived {
                color: #fff !important;
                background-color:#ff5c3d  !important;
                border-radius: 24px;
            }
            span {
                display: inline-block;
                width:90px;
                height: 30px;
                border-left:1px solid #d7d7d7;
                margin-top: 12px;
                background-image:url('../assets/images/down@2x.png');
                background-repeat: no-repeat;
                background-position: center 10px;
            }
            .span-down {
                background-image: url('../assets/images/up@2x.png');
            }         
        }

    }
</style>
