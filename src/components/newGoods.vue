<template>
  <div>
    <div class="fixed">
      <div class="swiper">
        <mt-swipe :auto="4000">
            <mt-swipe-item>
              <a href="" style="background-color:#ff2d4b">1</a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="" style="background-color:#ffd705">2</a>
            </mt-swipe-item>
            <mt-swipe-item>
              <a href="" style="background-color:skyblue">3</a>
            </mt-swipe-item>
        </mt-swipe>
      </div>
      <nav-sort></nav-sort>
    </div>
    <div class="goods-main-row">
      <ul>
        <li>
          <a href="">
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
          </a>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
        <li>
          <a href="">
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
          </a>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
        <li>
          <a href="">
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
          </a>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
        <li>
          <a href="">
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
          </a>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
        <li>
          <a href="">
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
          </a>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
      </ul>  
    </div>
  </div>
</template>
<script>
import navSort from "./navSort.vue";
export default {
  name:'searchResult',
  data () {
    return {
      
    }
  },
  components:{navSort},
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.fixed {
  position: fixed;
  width:100%;
  top:0;
  z-index: 233;
}
  .swiper {
    height: 300px;
    a {
      display: block;
      height: 100%;
      img {
        width:100%;
        height: 100%;
      }
    }
  }
</style>
