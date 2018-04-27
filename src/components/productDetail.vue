<template>
  <div>
      <div class="banner">
            <mt-swipe :auto="0" :showIndicators="false" :continuous="false" @change="handleChange">
              <mt-swipe-item>
                <video poster="http://img.hznzcn.com/images/goods_new/20160813/b1265806dc5b4162813d039f423c0e85.jpg">
                  <source src="http://video.hznzcn.com/video/20180403/-715974517.mov" type="video/mp4">
                </video>
                <span class="play" @click="play"></span>
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="http://img.hznzcn.com/images/goods_new/20160813/b1265806dc5b4162813d039f423c0e85.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="http://img.hznzcn.com/images/goods_new/20160813/598aeda4014c40769c0300d5519b7d09.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="http://img.hznzcn.com/images/goods_new/20160813/a20bdcedcb814b9986c18754b37a3dd5.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="http://img.hznzcn.com/images/goods_new/20160813/1fdec2e6b59045dbabd2b3667ed3ff0c.jpg" alt="">
              </mt-swipe-item>
              <mt-swipe-item>
                <img src="http://img.hznzcn.com/images/goods_new/20160813/fe4fe566b4e5438da1ee4e43e3c44ba8.jpg" alt="">
              </mt-swipe-item>
            </mt-swipe>
            <div class="info">
                <div class="center">
                    <span class="video on" ref="video">视频</span>
                    <span class="img" ref="img">图片</span>
                </div>
                <div class="page" ref="page">
                    {{page}}/{{totalPage}}
                </div>
            </div>
      </div>
        <div class="goods-info goods-info1" v-if="false">
            <span>【预售商品】</span>预计2018年2月1日开始陆续发货
        </div>
        <div class="goods-info goods-info2" v-if="true">
              <span>【官网图片】</span>官网图片被投诉后无法处理，请代理商<i>谨慎上传!</i>
        </div>
      <div class="product-data">
        <div class="product-msg">
            <div class="shop-name-title">蓝黛门 LDM1823</div>
            <p class="keywords">长袖长裙2018年春季花色甜美圆领高腰修身显瘦连衣裙</p>
            <div>
                <span class="price">
                    <i>￥</i>115.00
                </span>
                <span class="sd-send">闪电发货</span>
                <span class="floor-price">电商最低限价￥250</span>
            </div>
        </div>
        <div class="data">
            <div class="data1">
                <span>月销量</span>
                <span>10000-50000</span>
            </div>
            <div class="data2">
                <span>浏览量</span>
                <span>14404</span>
            </div>
            <div class="data3">
                <span>下载</span>
                <span>2445</span>
            </div>
            <div class="data4">
                <span>上传</span>
                <span>7441</span>
            </div>
        </div>
      </div>
      <div class="yhq-box">
          <span class='yhq-title'>优惠券</span>
          <span class="yhq">￥2.00</span>
          <span class="yhq">￥5.00</span>
          <span class="yhq">￥10.00</span>
          <span class="yhq">￥20.00</span>
      </div>
      <div class="color-size" @click="colorSizeCheck">颜色 尺码</div>
      <div class="parameter" @click="parametersInfo">商品参数</div>
      <div class="label">
          <span class="label1">实力厂家</span>
          <span class="label2">8天包退</span>
          <span class="label3">工厂认证</span>
          <span class="label4">原图保证</span>
      </div>
        <div class="store-msg">
            <div class="clearfix">
                <div class="pull-left">
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
                    <div class="count">
                    <span>652</span>
                    <p>关注数</p>
                    </div>
                    <div class="collect">
                    <span class="collect-box"  @click="collect">取消</span>
                    </div>
                </div>
            </div>
            <div class="all-data">
                <div class="data1">
                    <p>652</p>
                    <p>目前有货</p>
                </div>
                <div class="data2">
                    <p>10000-50000</p>
                    <p>近一年销量</p>
                </div>
                <div class="data3">
                    <p class="clgreen">17.12%</p>
                    <p>退货率</p>
                </div>
                <div class="data4">
                    <p class="clred">56.12%<span></span></p>
                    <p>缺货率</p>
                </div>
            </div>
            <div class="to-store">
                <router-link to="">进入商家</router-link>
            </div>
        </div>
        <div class="store-detail">
            <div class="detail-title">
                ———<span>详情</span>———
            </div>
            <ul class="img-box">
                <li>
                    <img src="https://img.alicdn.com/imgextra/i2/415761/TB2SQm6bYArBKNjSZFLXXc_dVXa-415761.jpg" alt="">
                </li>
                <li>
                    <img src="https://img.alicdn.com/imgextra/i1/415761/TB2FV2.hCBYBeNjy0FeXXbnmFXa-415761.jpg" alt="">
                </li>
                <li>
                    <img src="https://img.alicdn.com/imgextra/i2/415761/TB2O.yQb5AnBKNjSZFvXXaTKXXa-415761.jpg" alt="">
                </li>
                <li>
                    <img src="https://img.alicdn.com/imgextra/i2/415761/TB2921chpmWBuNjSspdXXbugXXa-415761.jpg" alt="">
                </li>
                <li>
                    <img src="https://img.alicdn.com/imgextra/i4/415761/TB2PzuYhuuSBuNjy1XcXXcYjFXa-415761.jpg" alt="">
                </li>
                <li>
                    <img src="https://img.alicdn.com/imgextra/i4/415761/TB2gNOQb2iSBuNkSnhJXXbDcpXa-415761.jpg" alt="">
                </li>
            </ul>
            <div class="detail-title">
                ———<span>销售记录</span>———
            </div>
            <ul class="sales-record">
                <li>
                    <div class="div1">
                        <span>宇佳芝韵 YJZY2601</span>
                        <span class="pull-right">2017-08-10</span>
                    </div>
                    <div class="div2">
                        <span>紫红色</span>
                        <span class="clred pull-right">￥299.00元</span>
                    </div>
                    <div class="div3">
                        <span>2XL</span>
                        <span class="pull-right">x1件</span>
                    </div>
                </li>
                <li>
                    <div class="div1">
                        <span>宇佳芝韵 YJZY2601</span>
                        <span class="pull-right">2017-08-10</span>
                    </div>
                    <div class="div2">
                        <span>紫红色</span>
                        <span class="clred pull-right">￥299.00元</span>
                    </div>
                    <div class="div3">
                        <span>2XL</span>
                        <span class="pull-right">x1件</span>
                    </div>
                </li>
                <li>
                    <div class="div1">
                        <span>宇佳芝韵 YJZY2601</span>
                        <span class="pull-right">2017-08-10</span>
                    </div>
                    <div class="div2">
                        <span>紫红色</span>
                        <span class="clred pull-right">￥299.00元</span>
                    </div>
                    <div class="div3">
                        <span>2XL</span>
                        <span class="pull-right">x1件</span>
                    </div>
                </li>
                <li>
                    <div class="div1">
                        <span>宇佳芝韵 YJZY2601</span>
                        <span class="pull-right">2017-08-10</span>
                    </div>
                    <div class="div2">
                        <span>紫红色</span>
                        <span class="clred pull-right">￥299.00元</span>
                    </div>
                    <div class="div3">
                        <span>2XL</span>
                        <span class="pull-right">x1件</span>
                    </div>
                </li>
            </ul>
            <div class="sales-info">仅显示最近10条销售记录</div>
            <div class="detail-title">
                ———<span>上传记录</span>———
            </div>
            <ul class="upload">
                <li>
                    <span>数据包下载</span>
                    <span><i>54</i>次</span>
                </li>
                <li>
                    <span>传淘宝</span>
                    <span><i>54</i>次</span>
                </li>
                <li>
                    <span>传阿里</span>
                    <span><i>54</i>次</span>
                </li>
                <li>
                    <span>传微店</span>
                    <span><i>54</i>次</span>
                </li>
                <li>
                    <span>传有赞</span>
                    <span><i>54</i>次</span>
                </li>
                <li>
                    <span>传朋友圈</span>
                    <span><i>54</i>次</span>
                </li>
                <li>
                    <span>传蘑菇街</span>
                    <span><i>54</i>次</span>
                </li>
            </ul>
            <div class="detail-title">
                ———<span>推荐商品</span>———
            </div>
            <div class="goods-main">
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
                </ul>
            </div>
        </div>
    <mt-popup v-model="colorSize" position='bottom'>
      <div class="goods-color-size">
        <div>
          <div>
            <img src="http://img.hznzcn.com/images/goods_new/20180410/476fca0d58b1a2c7b92efc7b71065516.jpg" alt="">
            <div>
              <p>蓝黛门 LDM1823</p>
              <p>￥<span class="rmb">{{6.50}}</span>
              <span class='sd-send'>闪电发货</span>
              </p>
              <p>
                <span>已选：</span>
                <span>{{goodsColor}}</span>
                <span>{{goodsQuantity}}</span>
                <span>{{num}}件</span>
              </p>
            </div>
          </div>
          <div class="goods-quantity">
            <p>颜色</p>
            <div @click="selectgoodsQuantity">
              <span class="default" data-color='白色'>白色</span>
              <span data-color='米色'>米色</span>
              <span data-color='绿色'>绿色</span>
              <span data-color='黑色'>黑色</span>
            </div>
          </div>
          <div class="goods-quantity">
            <p>尺码</p>
            <div @click="selectgoodsQuantity">
                <span class="default" data-quantity='M'>M</span>
                <span data-quantity='L'>L</span>
                <span data-quantity='XL'>XL</span>
                <span data-quantity='XXL'>XXL</span>
            </div>
          </div>
          <div class="pay-num clearfix">
            <span class="pull-left">购买数量</span>
            <div class="pull-right">
              <button @click="reduce">-</button>
                <span v-text='num'></span>
                <button @click="add">+</button>
            </div>
          </div>
        </div>
        <div class="close" @click="colorSizeCheck"></div>
        <div class="btns">
          <button>确定</button>
        </div>
      </div>
    </mt-popup>
    <mt-popup v-model="parameters" position='bottom'>
      <div class="parameters-box">
          <div>商品参数</div>
          <ul>
              <li class="parameters-title">基本参数</li>
              <li>
                  <span>商品货号</span>
                  <span>DO028</span>
              </li>
              <li>
                  <span>商品重量</span>
                  <span>500克(g)</span>
              </li>
              <li>
                  <span>上架时间</span>
                  <span>上架时间</span>
              </li>
              <li>
                  <span>季节分类</span>
                  <span>春秋季</span>
              </li>
              <li  class="parameters-title parameters-title2">商品参数</li>
              <li>
                  <span>面料材质</span>
                  <span>羊毛</span>
              </li>
              <li>
                  <span>领子</span>
                  <span>西装领</span>
              </li>
              <li>
                  <span>面料主材质含量</span>
                  <span>96%及以上</span>
              </li>
              <li>
                  <span>上市年份季节</span>
                  <span>2017年冬季</span>
              </li>
              <li>
                  <span>袖子</span>
                  <span>长袖</span>
              </li>
              <li>
                  <span>衣长</span>
                  <span>长款</span>
              </li>
              <li>
                  <span>尺码</span>
                  <span>S M L</span>
              </li>
              <li>
                  <span>颜色分类</span>
                  <span>黑色</span>
              </li>
          </ul>
          <div class="close" @click="parametersInfo"></div>
        <div class="btns">
          <button>确定</button>
        </div>
      </div>
    </mt-popup>
    <mt-popup v-model="upload" position='bottom' class="upload-popup">
        <div class="upload-title">请选择要上传的平台</div>
        <ul>
            <li @click="uploadT">
                传淘宝
            </li>
            <li @click="uploadA">
                传阿里
            </li>
            <li @click="uploadW">
                传微店
            </li>
            <li @click="uploadY">
                传有赞
            </li>
            <li @click="uploadQ">
                传朋友圈
            </li>
        </ul>
        <div class="close" @click="uploadPopup"></div>
    </mt-popup>
    <div class="buy">
        <div class="action">
            <div @click="uploadPopup">一键上传</div>
            <div>客服</div>
            <div @click="collect">收藏</div>
        </div>
        <div class="buy-now">立即购买</div>
        <div class="add-to-cart">加入购物车</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          colorSize:false,
          parameters:false,
          goodsColor:'白色',
          goodsQuantity:'M',
          upload:false,
          num:1,
          page:0, //商品展示图索引
          totalPage:5, //商品展示图总数
      }
  },
  methods:{
      play:function(e) {
          e.target.parentNode.children[0].play();
          e.target.parentNode.children[0].controls = true;
          e.target.style.display = 'none';
      },
      colorSizeCheck:function(e) {
          this.colorSize = !this.colorSize;
      },
      handleChange(index) {
       if(index>=1 && index <= this.totalPage) {
            this.page = index;
            this.$refs.video.classList.remove('on');
            this.$refs.img.classList.add('on');
            this.$refs.page.style.display = 'block';
       } else if(index < 1) {
            this.$refs.page.style.display = 'none';
            this.page= 0;
           this.$refs.video.classList.add('on');
           this.$refs.img.classList.remove('on');
       }
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
    selectgoodsQuantity(e) { //商品参数选择
        if(e.target.nodeName.toLowerCase()==='span') {
            let len = e.target.parentNode.children.length;
            let lis = e.target.parentNode.children;
            for(var i=0;i<len;i++) {
                if(lis[i] != e.target) {
                    lis[i].classList.remove('default');
                }
            }
            e.target.classList.add("default");
            if(e.target.dataset.color) {
                this.goodsColor = e.target.dataset.color;
            } else if (e.target.dataset.quantity) {
                this.goodsQuantity = e.target.dataset.quantity;
            }
        }
    },
    add(e){ //礼品数量+
      e.target.parentNode.children[0].disabled = false;
      this.num+=1;
      this.tarePrice = this.price*this.num;
  },
    reduce(e){ //礼品数量-
    if(parseInt(e.target.parentNode.children[1].innerHTML)<=1) {
            e.target.disabled = true;
            return;
        }
        this.num-=1;
        this.tarePrice = this.price*this.num;
    },
    sure() { //礼品确定
        this.giftInfo = !this.giftInfo;
        this.giftCount+=this.num;
        console.log(this.giftCount,this.num)
        this.gifts = '共'+this.giftCount+'件';
        this.$refs.gift.classList.add('df-color');
        let o = this.obj; //获取当前对象
            this.$refs[o].classList.add('checked');
        if(this.giftCount<=0) {
            this.$refs.gift.classList.remove('df-color');
            this.gifts = '请选择';
        }
    },
    parametersInfo() {
        this.parameters = !this.parameters;
    },
    uploadPopup() {
        this.upload = !this.upload;
    },
    //一键上传
    uploadT() {
        alert('传淘宝...');
        this.$router.push({path:'/editProduct'})
    },
    uploadA() {
        alert('传阿里...')
    },
    uploadW() {
        alert('传微店...')
    },
    uploadY() {
        alert('传有赞...')
    },
    uploadQ() {
        alert('传朋友圈...')
    }
  },
  mounted() {
    let len = document.querySelectorAll('.banner img').length;
    this.totalPge = len;
  }
}
</script>

<style lang="scss" scoped>
    .banner {
      position: relative;
      height: 750px;
      img {
        width: 100%;
        height: 750px;
      }
      .info {
        position: absolute;
        bottom: 31px;
        width: 100%;
        div {
          display: inline-block;
          span {
            display: inline-block;
            width: 89px;
            height: 42px;
            line-height: 42px;
            border-radius: 21px;
            font-family: PingFang SC Medium;
            font-size: 22px; /*px*/
          }
          .video {
            background:url('../assets/images/play2@2x.png') no-repeat 9px center;
            padding-left: 35px;
            box-sizing: border-box;
            margin-left: 294px;
          }
          .img {
            background-color: #fff;
            color: #000;
            text-align: center;
            margin-left: 6px;
          }
          .on {
            background-color: #ff464e;
            color: #fff;
          }
        }
        .page {
          width: 75px;
          height: 42px;
          line-height: 42px;
          border-radius: 21px;
          font-family: PingFang SC Medium;
          font-size: 22px; /*px*/
          background-color: rgba(0, 0, 0, .4);
          color: #fff;
          text-align: center;
          float: right;
          margin-right: 25px;
          display: none;
        }
      }
    }
    .product-data {
        padding-top: 25px;
        padding-left: 25px;
        padding-right: 22px;
        background-color: #fff;
    }
    .product-msg {
        padding-bottom: 22px;
        .shop-name-title {
            font-family: PingFang SC Medium;
            font-size: 32px;/*px*/
            color: #222;
        }
        .keywords {
            font-family: PingFang SC Medium;
            font-size: 28px;/*px*/
            color: #666;
            margin-top: 15px;
            margin-bottom: 20px;
            overflow: hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:1;
        }
        .price {
            color: #ff464e;
            font-size: 42px;
            i {
                font-style: normal;
                font-size: 30px;
            }
        }
        .floor-price {
            display: inline-block;
            float: right;
            width:234px;
            height: 43px;
            text-align: center;
            line-height: 43px;
            background-color: #f4f4f4;
            border-radius: 6px;
            color: #ff6600;
            font-size: 24px;/*px*/

        }
    }
    .data {
        border-top:1px solid #d7d7d7;/*px*/
        font-size: 0;
        padding:26px 0 33px 0;
            div {
                display: inline-block;
                    span:first-child {
                    color: #949494;
                    font-size: 24px;/*px*/
                }
                    span:last-child {
                    color: #282828;
                    font-size: 24px;/*px*/
                    margin: 0 8px 0 8px;
                    }
        }
        .data1 {
            span:last-child {
                color: #ff6600;
            }
        }
        .data2,.data3,.data4 {
            span:first-child {
                border-left:1px solid #d9d9d9;/*no*/
                padding-left: 10px;
            }
        }
    }
    .yhq-box {
        padding-left: 23px;
        height: 80px;
        background-color: #fff;
        .yhq-title {
            color: #949494;
            font-family: PingFang SC Medium;
            font-size: 28px;/*px*/
            line-height: 80px;
        }
        .yhq {
            display: inline-block;
            padding:0 10px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            color: #fff;
            margin-left: 8px;
            background: url('../assets/images/yhq@2x.png') no-repeat;
            background-size: cover;
        }
    }
    .color-size,.parameter {
        height: 81px;
        line-height: 81px;
        color: #282828;
        font-family: PingFang SC Medium;
        font-size: 30px;/*px*/
        background:#fff url('../assets/images/more-grey@2x.png') no-repeat 695px center;
        padding-left: 23px;
        border-bottom: 1px solid #d7d7d7;
    }
    .label {
        height: 81px;
        background-color: #fafafa;
        padding-left: 23px;
        line-height: 81px;
        span {
            display: inline-block;
            width:95px;
            height:32px;
            line-height: 32px;
            text-align: center;
            border-radius: 4px;
            margin-left: 9px;
            color: #fff;
            font-family: PingFang SC Medium;
            font-size: 20px;
        }
        .label1 {
            background:rgba(255,118,91,1);
        }
        .label2 {
            background:rgba(83,205,163,1);
        }
        .label3 {
            background:rgba(78,198,191,1);
        }
        .label4{
            background:rgba(170,128,214,1);
        }
    }
    video {
        width:750px;
        height: 750px;
        object-fit: fill;
    }
.store-msg {
    border-bottom: 1px solid #d7d7d7;/*no*/
    margin-top: 19px;
    background-color: #fff;
    padding:0 22px 0 23px;
    >div {
        border-bottom: 1px solid #ddd;/*no*/
        padding-top: 32px;
        padding-bottom: 26px;
    }
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
    display: inline-block;
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
.all-data {
        padding-top: 30px;
        padding-bottom: 25px;
    div {
        text-align: center;
        display: inline-block;
       p:last-child {
           font-family: PingFang SC Medium;
           color: #b3b3b3;
           font-size: 24px;/*px*/
           margin-top: 19px;
       }
    }
    .data1,.data2,.data3 {
        border-right:1px solid #ebebeb;/*no*/
    }
    .data1 p:first-child,.data2 p:first-child {
           font-family: PingFang SC Medium;
           color: #292929;
           font-size: 28px;/*px*/
    }
    .data1 {
        width:160px;
    }
    .data2 {
        width:235px;
    }
    .data3 {
        width:140px;
    }
    .data4 {
        width:140px;
        p:first-child {
            span {
                display: inline-block;
                width:28px;
                height: 28px;background: url('../assets/images/notice@2x.png') no-repeat bottom center;
            }
        }
    }
}
.store-msg .to-store {
    height: 86px;
    line-height: 86px;
    text-align: center;
    background-color: #fff;
    padding:0;
    a {
        font-family: PingFang SC Medium;
        font-size: 30px;/*px*/
        color: #282828;
        display:block;
        background: url('../assets/images/store@2x.png') no-repeat 39% center;
        background-size: 28px 26px;
    }
}
.detail-title {
    text-align: center;
    height: 87px;
    line-height: 87px;
    color: #ddd;
    span {
        color: #282828;
        font-family: PingFang SC Medium;
        font-size: 30px;/*px*/
        margin:0 11px;
    }
}
.img-box {
    font-size:0;
    padding:7px  7px 20px;
    background-color: #fff;
    img {
        width:100%;
    }
}
.sales-record {
    li {
        padding-bottom: 25px;
        margin-bottom: 15px;
        background-color: #fff;
        padding-left: 27px;
        padding-right: 23px;
    }
    li:last-child {
        margin-bottom: 0;
    }
    div span:last-child {
        color: #898989;
        font-family: PingFang SC Medium;
        font-size: 26px;/*px*/
    }
    .div1 {
        height: 76px;
        line-height: 76px;
        border-bottom: 1px solid #d7d7d7;/*no*/
        span:first-child {
            color: #282828;
            font-family: PingFang SC Medium;
            font-size: 28px;/*px*/
        }
    }
    .div2,.div3 {
        margin-top: 17px;
        span:first-child {
            color: #b3b3b3;
            font-size: 26px;/*px*/
        }
    }
}
.sales-info {
    height: 61px;
    line-height: 61px;
    text-align: center;
    font-family: PingFang SC Medium;
    font-size: 24px;/*px*/
    color: #898989;
}
.upload {
    background-color: #fff;
    padding: 0 25px;
}
.upload li {
    height: 77px;
    line-height: 77px;
    border-bottom:1px solid #ddd;
    font-family: PingFang SC Medium;
    font-size: 26px;/*px*/
    color: #727272;
    padding-left: 40px;
    &:last-child {
        border-bottom:none;
    }
    span:last-child {
        float: right;
        i {
            font-style: normal;
            color: #ff5700;
        }
    }
    &:first-child {
        background: url('../assets/images/dw1.png') no-repeat left center;
    }
    &:nth-child(2) {
        background: url('../assets/images/dw2.png') no-repeat left center;
    }
    &:nth-child(3) {
        background: url('../assets/images/dw3.png') no-repeat left center;
    }
    &:nth-child(4) {
        background: url('../assets/images/dw4.png') no-repeat left center;
    }
    &:nth-child(5) {
        background: url('../assets/images/dw5.png') no-repeat left center;
    }
    &:nth-child(6) {
        background: url('../assets/images/dw6.png') no-repeat left center;
    }
    &:nth-child(7) {
        background: url('../assets/images/dw7.jpg') no-repeat left center;
    }
}
.goods-main {
    margin-bottom: 134px;
}
.buy {
    position: fixed;
    bottom:0;
    font-size: 0;
    height: 105px;
    div {
        display: inline-block;
        height: 105px;
    }
    .buy-now,.add-to-cart {
        width:214px;
        line-height: 105px;
        background-color: #ff464e;
        font-family: PingFang SC Bold;
        font-weight: bold;
        color: #fff;
        text-align: center;
        font-size: 32px;/*px*/
    }
    .add-to-cart {
        background-color: #ffaa00;
    }
    .action {
        width:322px;
        background-color: #fff;
        vertical-align: top;
        font-size: 0;
        text-align: center;
        div:first-child {
            width:147px;
            background: url('../assets/images/upload.png') no-repeat center 21px;
            background-size: 40px 27px;/*px*/
        }
        div:nth-child(2) {
            width:87px;
            background: url('../assets/images/kf.png') no-repeat center 21px;
            background-size: 32px 32px;/*px*/
        }
        div:last-child {
            width:87px;
            background: url('../assets/images/collect.png') no-repeat center 21px;
            background-size: 34px 32px;/*px*/
        }
        div {
            height: 105px;
            font-family: PingFang SC Medium;
            font-size: 26px;/*px*/
            color: #666;
            padding-top: 61px;
        }
    }
}
.goods-info {
    height: 72px;
    line-height: 72px;
    span {
        color: #fff;
        margin:0 35px 0 15px;
        font-family: PingFang SC Medium;
        font-size: 28px;/*px*/
    }
}
.goods-info1 {
    background: url('../assets/images/ys@2x.png') no-repeat;
    background-size: cover;
    font-size: 26px;
    color: #15b167;
}
.goods-info2 {
    background: url('../assets/images/gw@2x.png') no-repeat;
    background-size: cover;
    color:#a235e5;
    i {
        font-style: normal;
        font-weight: bold;
    }
}
.mint-popup {
    width:100%;
}
.goods-color-size {
  position: relative;
  height: 950px;
  position: relative;
  background-color: #f4f4f4;
  >div {
    background-color: #fff;
    padding-left: 23px;
    padding-right: 30px;
  }
  img {
    position: absolute;
    width:220px;
    height: 222px;
    left:23px;
    top:-27px;
    border-radius: 15px;
  }
  >div>div:first-child {
    padding-left: 245px;
    padding-top: 54px;
    padding-bottom: 23px;
    border-bottom:1px solid #ddd;
    font-family: PingFang SC Medium;
    font-size: 32px;/*px*/
    color: #222;
    p:nth-child(2) {
      color:#ff464e;
      margin-top: 20px;
      font-size: 24px;/*px*/
      .rmb {
          font-size: 32px;/*px*/
      }
      .sd-send {
          vertical-align: top;
          margin-top:5px;
      }
    }
    p:last-child {
      font-size: 28px;
      margin-top: 11px;
    }
  }
}
  .goods-quantity {
    padding-bottom: 23px;
    border-bottom: 1px solid #ddd;
    p {
      font-family: PingFang SC Medium;
      font-size: 28px;
      color: #282828;
      margin-top: 26px;
    }
    span {
      display: inline-block;
      width:88px;
      height: 49px;
      line-height: 49px;
      text-align: center;
      color: #000;
      background-color: #f4f4f4;
      border-radius: 4px;
      margin-top: 29px;
      margin-right: 15px;
    }
    }
.pay-num {
  padding-bottom: 27px;
  >span {
    margin-top: 32px;
    font-family: PingFang SC Medium;
    font-size: 28px;
    color: #282828;
  }
    div {
        width:182px;
        height: 51px;
        border:2px solid #d7d7d7;/*no*/
        margin-top: 20px;
        line-height: 31px;
        padding:10px 0;
        box-sizing: border-box;
        span {
            display: inline-block;
            border-left:2px solid #d7d7d7;
            border-right:2px solid #d7d7d7;
            width:68px;
            text-align: center;
        }
        button {
            border:none;
            width:45px;
            text-align: center;
            background-color: transparent;
            outline: none;
        }
    }
}
.btns {
  position: absolute;
  bottom:0;
  padding:0 !important;
  width:100%;
  button {
    width:100%;
    height: 96px;
    border:none;
    outline: none;
    background-color: #ff464e;
    color: #fff;
    float: left;
    font-family: PingFang SC Bold;
    font-size: 32px;/*px*/
  }
}
.sd-send {
    display: inline-block;
    width: 94px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    color: #11c05a;
    border:1px solid #11c05a;
    font-size: 20px;/*px*/
    vertical-align: top;
    margin-top: 12px;
    margin-left: 6px;
}
.parameters-box {
    margin-bottom: 105px;
    div:first-child {
    height: 91px;
    line-height: 91px;
    font-family: PingFang SC Medium;
    font-size: 30px;/*px*/
    color: #282828;
    padding-left: 35px;
    }
    ul {
        margin-left: 27px;
        margin-right: 15px;
        padding-left: 20px;
        padding-bottom: 10px;
        li {
           font-size: 30px;/*px*/
           color: #898989;
           span:first-child {
               display: inline-block;
               width:260px;
               line-height: 55px;
               margin-right: 80px;
           }
        }
    }
    .parameters-title {
        padding-top: 29px;
        padding-bottom: 15px;
        border-top:1px solid #ddd;
        font-family: PingFang SC Medium;
        font-size: 28px;/*px*/
        color: #282828;
        margin:0
    }
    .parameters-title2 {
        margin-top: 20px;
    }
}
.upload-popup {
    height: 614px;
    .upload-title {
        height: 91px;
        line-height: 91px;
        font-family: PingFang SC Medium;
        font-size: 30px;/*px*/
        color: #282828;
        padding-left: 35px;
    }
    ul {
        margin-left: 27px;
        margin-right: 15px;
        padding-left:25px;
        padding-right: 51px;
        border-top:1px solid #ddd;
        font-size: 0;
        li {
            width:106px;
            display: inline-block;
            font-family: PingFang SC Medium;
            color: #282828;
            font-size: 26px;
            padding-top: 125px;
            margin-top: 36px;
            text-align: center;
            &:first-child {
                background: url('../assets/images/c1@2x.png') no-repeat center 0;
            }
            &:nth-child(2) {
                 background: url('../assets/images/c2@2x.png') no-repeat center 0;
                 margin-left: 69px;
            }
            &:nth-child(3) {
                 background: url('../assets/images/c3@2x.png') no-repeat center 0;
                 margin-left: 69px;
            }
            &:nth-child(4) {
                 background: url('../assets/images/c4@2x.png') no-repeat center 0;
                 margin-left: 69px;
            }
            &:nth-child(5) {
                 background: url('../assets/images/c5@2x.png') no-repeat center 0;
                 margin-top: 44px;
            }
        }

    }
}
.close {
    position: absolute;
    width:24px;
    height: 24px;
    z-index: 999;
    padding:0 !important;
    top:25px;
    right:25px;
    background:transparent url('../assets/images/close.png') no-repeat center;
}
.clred {
    color: #ff464e !important;
}
.clgreen {
    color: #2ea067 !important;
}
.default {
  background-color: #ff464e !important;
  color: #fff !important;
  border:1px solid #ff464e !important;
}
.df-color {
  color: #ff464e !important;
}
</style>
