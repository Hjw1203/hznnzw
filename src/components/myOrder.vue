<template>
  <div>
    <header class="header">
        <router-link to='' class="back"></router-link>
        <input type="text" placeholder="搜索收件人" @focus="toSearch">
        <router-link to="selectSource" class="area">杭州</router-link>
    </header>
    <div class="nav">
        <ul class="nav1">
            <li class="active">7天</li>
            <li>1个月</li>
            <li>3个月</li>
            <li>半年</li>
            <li>一年</li>
        </ul>
        <ul class="nav2">
            <li class="active1">全部</li>
            <li>未付款</li>
            <li>待发货</li>
            <li>已发货</li>
            <li>完成</li>
        </ul>
    </div>
    <div class="main">
      <div v-if="searchShow">
        <ul v-if="false">
          <li>
            <router-link to="">
              <div class="order-num">
                <span class="hz">杭州</span>
                <span>订单号：2017091212453491</span>
                <span class="pull-right">未付款</span>
              </div>
              <div class="goods">
                <img src="http://img.hznzcn.com/images/goods_new/20170324/fe591e8e82a30c5fd0d25c22f0521cbe.jpg" alt="" class="pull-left">
                <div class="pull-left">
                  <div>
                    <span class='keywords'>欣贝拉 XBL307-1 配腰带</span>
                    <span class="price pull-right">￥115.00</span>
                  </div>
                  <div class="clearfix">
                    <span class="pull-left color-size">红色,M</span>
                    <span class="pull-right number">x1</span>
                  </div>
                  <div class="sd">闪电发货</div>
                </div>
              </div>
            </router-link>
            <div class="total">
              <div class="pull-right">
                <span class="span1">共1件商品</span>
                <span class="span2">合计<i>￥326.00</i></span>
                <span class="span3">(含运费￥5.50)</span>
              </div>
            </div>
            <div class="action">
              <div class="pull-right">
                <span class="cancel-order">取消订单</span>
                <router-link to=" " class="now-pay">立即付款</router-link>
                <router-link to="">查看物流</router-link>
                <router-link to="">确认收货</router-link>
              </div>
            </div>
          </li>
        </ul>
        <div v-else class="no-order">
          <p>暂无订单</p>
        </div>
      </div>
    <div class="header-search" v-else>
      <div class="header1">
        <div class="search-box">
          <input type="text" placeholder="搜索收件人" @keypress.enter="search" @input="del" v-model="keyWords">
          <span class="delete" v-show="deleteShow" @click="cancel" ref="del"></span>
        </div>
        <button @click='toSearch'>取消</button>
      </div>
      <div class="search-title">更多搜索条件</div>
      <div class="search-form">
        <div>
          <span>起止时间：</span>
          从<input type="date">
          到<input type="date">
        </div>
        <div>
          <span>订单状态：</span>
          <ul>
            <li class="active">全部</li>
            <li>未付款</li>
            <li>待付款</li>
            <li>已发货</li>
            <li>完成</li>
          </ul>
        </div>
        <div>
          <span>订单状态：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <span>快递单号：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <span>收件人：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <span>手机号码：</span>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <span>旺旺昵称：</span>
          <input type="text" placeholder="请输入">
        </div>
      </div>
      <div class="btns">
        <button>重置</button>
        <button>开始搜索</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchShow:true, //点击搜索按钮显示搜索框
      deleteShow:false,
      keyWords:'', //搜索关键字
    }
  },
  methods: {
    del(e) {
      let len = e.target.value.length;
      if(len>1) {
        this.deleteShow = true;
      } else {
        this.deleteShow = false;
      }
    },
    search(e) {
      let keyWords = e.target.value;
      this.$router.push({name: 'collectGoods'});
    },
    toSearch() {
      this.searchShow = !this.searchShow;
    },
    cancel() {
      this.keyWords = '';
      this.deleteShow = false;
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    height: 88px;
    line-height: 88px;
    background-color: #fff;
    .back {
        position: absolute;
        left:30px;
        top:50%;
        margin-top: -18px;
        z-index:233;
        display: inline-block;
        width:18px;
        height: 36px;
        background: url('../assets/images/left@2x.png') no-repeat center;
    }
    input {
        width:510px;
        height: 56px;
        padding-left: 56px;
        margin-left: 80px;
        border-radius: 20px;
        border:none;
        outline: none;
        background:#f4f4f4 url('../assets/images/search1@2x.png') no-repeat 19px center;
        box-sizing: border-box;
    }
     .area{
        display: inline-block;
        width:140px;
        padding-left: 30px;
        padding-right: 20px;
        box-sizing: border-box;
        text-align: center;
        background: url('../assets/images/regional@2x.png') no-repeat 15px center,url('../assets/images/down1@2x.png') no-repeat 110px center;
    }
}
.nav {
    background-color: #fff;
    margin-top: 17px;
    .nav1 {
        font-size: 0;
        padding:21px 0;
        border-bottom: 1px solid #ddd;/*px*/
        li {
          display: inline-block;
           width:120px;
           height: 49px;
           line-height: 49px;
           text-align: center;
           font-family: PingFang SC Medium;
           font-size: 26px;/*px*/
           color: #1e1e1e;
           margin-left: 26px;
           background-color: #f4f4f4;
           border-radius: 8px;
        }
        .active {
            background-color: #ff464e;
            color: #fff;
        }
    }
    .nav2 {
        height: 79px;
        line-height: 79px;
        font-size: 0;
        li {
            display: inline-block;
            font-family: PingFang SC Medium;
            font-size: 30px;/*px*/
            color: #222;
            margin:0 35px;
        }
        .active1 {
            color: #ff464e;
            border-bottom: 4px solid #ff464e;
        }

    }
}
.main {
    li {
        background-color: #fff;
        margin-top: 20px;
        .order-num {
            height: 86px;
            line-height: 86px;
            background-color: #fafafa;
            padding-left: 23px;
            padding-right: 11px;
          .hz {
            display: inline-block;
            width:52px;
            height: 28px;
            line-height: 28px;
            text-align: center;
            color: #fff;
            background-color: #ff464e;
            font-family: PingFang SC Medium;
            font-size: 20px;/*px*/
            border-radius: 4px;
            vertical-align: top;
            margin-top: 32px;
          }
          span:nth-child(2) {
            color: #282828;
            font-size: 30px;/*px*/
          }
          span:last-child {
            color: #ff464e;
            font-family: PingFang SC Medium;
            font-size:26px;/*px*/

          }
        }
        img {
            width:140px;
            height: 140px;
        }
        .goods {
            padding:29px 0 32px 24px;
            height: 200px;
            box-sizing: border-box;
            >div {
                width:571px;
                padding-left: 16px;
                padding-right: 15px;
                box-sizing: border-box;
                .keywords {
                    font-family: PingFang SC Medium;
                    font-size: 28px;/*px*/
                    color: #282828;
                }
                .price {
                    font-family: PingFang SC Bold;
                    font-size: 32px;/*px*/
                    color: #ff464e;
                }
                .color-size,.number {
                    font-family: PingFang SC Bold;
                    font-size: 26px;/*px*/
                    color: #949494;
                    margin-top: 16px;
                }
                .sd {
                    width:94px;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    border:1px solid #10bf5a;
                    color: #11c05a;
                    font-size: 20px;/*px*/
                    margin-top: 28px;
                }
            }
        }
        .total {
            height: 79px;
            line-height: 79px;
            border-top:1px solid #ddd;
            border-bottom:1px solid #ddd;
            padding-right: 19px;
            i {
              font-style: normal;
            }
            .span1 {
                color: #282828;
                font-size: 30px;/*px*/
            }
            .span2 {
                color: #282828;
                font-size: 30px;/*px*/
                i {
                    color: #ff464e;
                }
            }
            .span3 {
                color: #282828;
                font-size: 30px;/*px*/
            }
        }
      .action {
        height: 93px;
        line-height: 93px;
        span,a {
          display: inline-block;
          width:140px;
          height: 51px;
          line-height: 51px;
          text-align: center;
          font-family: PingFang SC Medium;
          font-size: 26px;/*px*/
          color: #8b8a8a;
          border-radius:26px;
          border:1px solid #a3a3a3;
        }
        .now-pay {
          border:none;
          background-color: #ff464e;
          color:#fff;
        }
      }
    }
  .no-order {
    height: 500px;
    background: url("../assets/images/wdd@2x.png") no-repeat center 194px;
    background-size: 200px 200px;/*px*/
    box-sizing: border-box;
    padding-top: 456px;
    p {
      text-align: center;
      font-family: PingFang SC Medium;
      color: #494949;
      font-size: 32px;/*px*/

    }
  }
}
.header-search {
  position: absolute;
  z-index: 2333;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background-color: #f4f4f4;
  .header1 {
    height: 88px;
    background-color: #fff;
    input {
      width:90%;
      height: 56px;
      border:none;
      outline: none;
      background-size: 28px 28px ;/*px*/
      background-color: transparent;
    }
    .search-box {
      display: inline-block;
      width:618px;
      height: 56px;
      margin-left: 29px;
      margin-top: 16px;
      border-radius: 28px;
      background:#f4f4f4 url('../assets/images/search1@2x.png') no-repeat 19px center;
      box-sizing: border-box;
      padding-left: 56px;
    }
    button {
      border:none;
      outline:none;
      background-color: transparent;
      color: #949494;
      font-family: PingFang SC Medium;
      font-size: 28px;/*px*/
      margin-left: 18px;
    }
    .delete {
      display: inline-block;
      width:24px;
      height: 24px;
      background: url('../assets/images/deletes.png') no-repeat center;
      background-size: 24px 24px;/*px*/
      vertical-align: middle;
    }
  }
  .search-title {
    height: 76px;
    line-height: 76px;
    color:#494949;
    font-family:PingFang SC Medium ;
    font-size: 28px;/*px*/
    padding-left: 27px;
    background-color: #f4f4f4;

  }
  .search-form {
    background-color: #fff;
    >div {
      border-bottom:1px solid #ddd;
      height: 110px;
      line-height: 110px;
      span:first-child {
        display: inline-block;
        width:180px;
        padding-left:24px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family:PingFang SC Medium ;
        color: #282828;
        font-size: 30px;/*px*/
      }
      input[type='text'] {
        width:541px;
        height: 65px;
        background-color: #f4f4f4;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        border:none;
        outline: none;
        padding-left: 25px;
        box-sizing: border-box;
      }
      input[type='date'] {
        width:217px;
        height: 47px;
        background-color: #f4f4f4;
        text-align: center;
        border:none;
        outline: none;
        margin:0 15px;
        border-radius: 4px;
      }
      ul {
        display: inline-block;
        width:541px;
        font-size: 0;
        li {
          display: inline-block;
          width:97px;
          height: 49px;
          line-height:49px;
          margin-left: 18px;
          text-align: center;
          background-color: #f4f4f4;
          -webkit-border-radius: 4px;
          -moz-border-radius: 4px;
          border-radius: 4px;
          color: #1e1e1e;
          font-family: "PingFang SC Medium";
          font-size: 26px;/*px*/
          &:first-child{
            width:72px;
            margin-left: 0;
          }
        }
        li.active {
          background-color: #ff464e;
          color: #fff;
        }
      }
    }

  }
  .btns {
    position: absolute;
    width:100%;
    bottom:0;
    height: 96px;
    font-size: 0;
    button {
      display: inline-block;
      width:50%;
      line-height: 96px;
      border:none;
      outline: none;
      font-size: 32px;
      font-family: "PingFang SC Bold";
      font-weight: bold;
      color: #fff;
      &:first-child {
        background-color: #ffaa00;
      }
      &:last-child {
        background-color: #ff464e;
      }
    }
  }
}
</style>
