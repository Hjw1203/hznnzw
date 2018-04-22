<template>
  <div>
    <div class="kd-header">
      <img src="https://gd2.alicdn.com/imgextra/i4/856979316/TB2TCQcllDH8KJjSszcXXbDTFXa_!!856979316.jpg_400x400.jpg" alt="">
      <div class="kd-info">
        <div class="kd-status">运输中</div>
        <div class="kd-name">
          <span>申通快递：</span>
          <span>704332719484949</span>
        </div>
        <div class="kd-phone">官方电话：<span>95543</span></div>
      </div>
    </div>
    <div class="kd-main" ref="kdMain">
      <div class="kd-prompt">【温馨提示】您的包裹正在运输中，如遇 恶劣天气，请您耐心等待。<span></span></div>
      <!--<div kd-address>[收货地址]湖南省衡阳市双清区 东风路街 道红岭路96号</div>-->
      <ul class="kd-detail">
        <!--<li>-->
          <!--<div class="title1">已签收</div>-->
          <!--<div class="text">签收人：钢铁侠</div>-->
          <!--<div class="time">-->
            <!--<p>上午</p>-->
            <!--<p>09:43</p>-->
          <!--</div>-->
          <!--<span></span>-->
        <!--</li>-->
        <!--<li>-->
          <!--<div class="title1">派送中</div>-->
          <!--<div class="text">[衡阳市]湖南省衡阳市派件员：李小明<span>135625652356</span>正在为您派件</div>-->
          <!--<div class="time">-->
            <!--<p>上午</p>-->
            <!--<p>07:43</p>-->
          <!--</div>-->
          <!--<span></span>-->
        <!--</li>-->
        <li class="ysz">
          <div class="title1">运输中</div>
          <div class="text">湖南省衡阳市 已收入</div>
          <span></span>
          <div class="time">
            <p>昨天</p>
            <p>21:43</p>
          </div>
          <ul>
            <li>
              <div>快递已到达【湖南衡阳中转部】 扫描员是【李小明】</div>
              <span></span>
              <div class="time">
                <p>昨天</p>
                <p>09:43</p>
              </div>
            </li>
            <li>
              <div>快件已到达【浙江嘉兴航空部】扫描员是【李大明】</div>
              <span></span>
              <div class="time">
                <p>01-28</p>
                <p>20:43</p>
              </div>
            </li>
            <li>
              <div>【浙江嘉兴公司】正在【装车】</div>
              <span></span>
              <div class="time">
                <p >01-27</p>
                <p>17:43</p>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <div class="title1">已揽件</div>
          <div class="text">浙江省嘉兴市公司 已收件</div>
          <span></span>
          <div class="time">
            <p>01-27</p>
            <p>16:43</p>
          </div>
        </li>
        <li>
          <div class="title1">已发货</div>
          <div class="text">质检完成打包发货</div>
          <span></span>
          <div class="time">
            <p>01-27</p>
            <p>10:43</p>
          </div>
        </li>
      </ul>
      <div class="look-detail" @click="slideDown">查看物流详情</div>
    </div>
    <div class="like">
      <div class="like-title">——<span>你可能还喜欢</span>——</div>
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
  </div>

</template>

<script>
    export default {
        name: "logistics",
        data() {
          return {

          }
        },
    methods:{
          slideDown(e){
            if(e.target.innerHTML === '查看物流详情') {
              e.target.innerHTML = '收起';
            } else if(e.target.innerHTML === '收起'){
              e.target.innerHTML = '查看物流详情';
            }
            this.$refs.kdMain.classList.toggle('look');
      }
    }
    }
</script>

<style lang="scss" scoped>
  .kd-header {
    height:180px;
    background-color: #fff;
    padding:30px 0 30px 48px;
    box-sizing: border-box;
    img {
      width:120px;
      height: 120px;
    }
    .kd-info {
      display: inline-block;
      margin-left: 19px;
      vertical-align: top;
      .kd-status {
        color: #f6891d;
        font-family: "PingFang SC Medium";
        font-size: 32px;/*px*/
      }
      .kd-name,.kd-phone {
        font-family: "PingFang SC Medium";
        color:#666;
        font-size: 28px;/*px*/
        margin-top: 9px;
        span {
          color:#666;
        }
      }
      .kd-phone span {
        color: #2a8bf1;
      }
    }
  }
  .kd-main {
    position: relative;
    padding:40px 41px 40px 0;
    background-color: #fff;
    margin-top: 20px;
    max-height: 450px;
    overflow: hidden;
    transition: max-height .3s;
    .kd-prompt {
      position: relative;
      margin-left: 158px;
      color: #f6891d;
      font-size: 28px;/*px*/
      padding-left: 46px;
      line-height: 36px;
      span {
        position: absolute;
        top:0;
        left:-12px;
        display: inline-block;
        width:30px;
        height: 30px;
        background: url("../assets/images/address1@2x.png") no-repeat center;
        background-size: 30px 30px;/*px*/
      }
  }
    .kd-detail {
      margin-left: 158px;
      margin-top: 54px;
      padding-left:46px ;
      border-left:1px solid #d7d7d7;/*no*/
      >li {
        position: relative;
        &:last-child {
          .text {
            margin-bottom: 0;
          }
        }
        &:first-child {
          color: #f6891d;
          >span {
            background: url("../assets/images/qs.png") no-repeat center;
          }
          .title1 {
            color: #f6891d;
          }
        }
        .title1 {
          font-family: "PingFang SC Medium";
          font-size: 28px;/*px*/
          color: #999;
          margin-bottom: 23px;
        }
        .text {
          margin:0 0 70px 0;
          font-family: "PingFang SC Medium";
          font-size: 24px;/*px*/
          color: #999;
        }
        .time {
          position: absolute;
          width:120px;
          top:0;
          left:-200px;
          text-align: right;
          font-family: "PingFang SC Medium";
          color: #999;
        }
        >.time {
          p:first-child {
            font-size: 28px;/*px*/
            margin-bottom: 10px;
          }
          P:last-child {
            font-size: 20px;/*px*/
          }
        }
        >span {
          position: absolute;
          top:0;
          left:-60px;
          display: inline-block;
          width:30px;
          height: 30px;
          background: url("../assets/images/process-grey@2x.png") no-repeat center;
          background-size: 30px 30px;/*px*/
        }
      }
      .ysz {
        height: auto;
        li {
          position: relative;
          >div:first-child {
            margin-bottom: 69px;
            color: #999;
            font-size: 24px;
          }
          .time {
            font-size: 20px;/*px*/
            p:first-child {
              margin-bottom: 10px;
            }
          }
          >span {
            position: absolute;
            width:12px;
            height: 12px;
            display: inline-block;
            background-color: #b6b6b6;
            border-radius: 50%;
            top:0;
            left:-52px;
          }
        }
      }
    }
    .look-detail {
      position: absolute;
      width:100%;
      height: 90px;
      z-index: 888;
      line-height: 90px;
      text-align: center;
      bottom:0;
      font-family: "PingFang SC Medium";
      font-size: 26px;
      color: #999;
      background: #fff url("../assets/images/open@2x.png") no-repeat 65% center;
    }
  }
  .look {
    max-height: 800px;
  }
  .like-title {
    height: 76px;
    line-height: 76px;
    text-align: center;
    font-family: "PingFang SC Medium";
    font-size: 28px;/*px*/
    color: #ff464e;
    span {
      display: inline-block;
      padding-right:28px;
      padding-left: 70px;
      background: url("../assets/images/like@2x.png") no-repeat 30px center;
    }

  }

</style>
