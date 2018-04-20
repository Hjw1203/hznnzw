<template>
  <div>
      <div class="header">
          <router-link to='' class="back"></router-link>
          <h1>商品收藏</h1>
          <router-link class="search" to="productSearch"></router-link>
          <span class="edit" @click="edit" ref="editBox">{{editText}}</span>
      </div>
      <div class="nav">
          <ul>
              <li>货源地
                  <ul>
                      <li>杭州</li>
                      <li>濮院</li>
                      <li>广州</li>
                  </ul>
              </li>
              <li>在售商品
                  <ul style="display:none">
                      <li>在售商品</li>
                      <li>下架商品</li>
                  </ul>
              </li>
              <li>商品分类</li>
          </ul>
      </div>
    <div class="goods-collect" ref="main">
      <ul @click="checked">
        <li class="product">
          <div class="check" data-flag='checkBox'></div>
          <a href="" class="pull-left">
            <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
            <div class="goods-message">
              <div class="keywords-box">
                <span class="city">杭州</span>
                <span class="state">预售</span>
                <span class="keywords">关键词 GJC7711</span>
              </div>
              <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
              <div v-if="shelve">
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>                  
              </div>
              <div v-else class="shelves">已下架</div>
            </div>        
          </a>
          <span class="collect-time">2018-01-29收藏</span>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
        <li class="product">
          <div class="check" data-flag='checkBox'></div>
          <a href="" class="pull-left">
            <img src="http://img.hznzcn.com/images/goods_new/20180201/20180201173228071.jpg" class="goods-img" alt="">
            <div class="goods-message">
              <div class="keywords-box">
                <span class="city">杭州</span>
                <span class="state">预售</span>
                <span class="keywords">关键词 GJC7711</span>
              </div>
              <div class="describe">2018年春季长袖长款修身POLO领时尚韩版气质优雅简约潮流风衣</div>
              <div v-if="unShelve">
                <div class="goods-price">
                    <span class="cost"><i>￥</i>115.00</span>
                </div>
                <div class="goods-ico">
                    <span class="ico1">实</span>
                    <span class="ico2">退</span>
                    <span class="ico3">厂</span>
                    <span class="ico4">图</span>
                </div>                  
              </div>
              <div v-else class="shelves">已下架</div>
            </div>        
          </a>
          <span class="collect-time">2018-01-29收藏</span>
          <div class="find-similar"><a href="">找相似</a></div>
        </li>
      </ul>  
    </div>
    <div class="info" ref="info">
        <div class="num">已选择<span>1</span>件商品</div>
        <button class="cbtn" @click="boomJuice">取消关注</button>
    </div>
    <mt-popup v-model="boomBox" position='bottom' class="boom-box">
        <div class="top">
            <div class="boom-title">确定要取消收藏吗？</div>
            <div class="confirm">确认</div>            
        </div>
        <div class="undo" @click="boomJuice">取消</div>
    </mt-popup>    
  </div>
</template>
<script>
export default {
  data() {
      return {
          shelve:true,
          unShelve:false,
          boomBox:false, //取消收藏盒子
          editText:'编辑',
      }
  },
  methods:{
      edit() {
        this.$refs.main.classList.toggle('active');
        this.$refs.info.classList.toggle('info1');
      },
      checked(e) {
        if(e.target.nodeName.toLowerCase()==='div' && e.target.dataset.flag ==='checkBox') {
            e.target.parentNode.classList.add('checked');
            this.editText = '完成';
            this.$refs.editBox.classList.add('clred');
        }
      },
      boomJuice() {
          this.boomBox = !this.boomBox;
      }
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
    h1 {
        margin:0;
        color:#222;
        font-size: 36px;/*px*/
        text-align: center;
        font-style: normal;
    }
    .search  {
        position: absolute;
        right:108px;
        top:50%;
        margin-top: -15px;
        z-index: 233;
        display: inline-block;
        width:30px;
        height: 30px;
        background: url('../assets/images/search1@2x.png') no-repeat center;
        background-size: 30px 30px;
    }
    .edit {
        position: absolute;
        top:0;
        right:28px;
        color: #949494;
        font-family: PingFang SC Medium;
        font-size: 28px;
    }
}
.nav {
    height: 78px;
    line-height: 78px;
    border-top:1px solid #eaeaea;/*no*/
    background-color: #fff;
    >ul {
        font-size: 0;
        >li {
            display: inline-block;
            width:33.3%;
            text-align: center;
            font-family: PingFang SC Medium;
            font-size: 30px;/*px*/
            color: #222;
            background: url('../assets/images/arrow_down@2x.png') no-repeat 85% center;
            &:first-child {
                background-position-x: 80%;
            }
            ul {
                position: absolute;
                z-index: 999;
                width:100%;
                top:168px;
                li 
                {
                    height: 83px;
                    line-height: 83px;
                    padding-left: 29px;
                    columns:#222;
                    font-family: PingFang SC Medium;
                    font-size: 30px;/*px*/
                    background-color: #fff;
                    border-bottom:1px solid #eaeaea;
                    text-align: left;
                    &:last-child {
                        border-bottom: none;
                    }
                }
            }
        }
    }
}
.goods-collect {
    margin-top: 14px;
    li {
        position: relative;
        height: 235px;
        background-color: #fff;
        padding:24px 18px 28px 29px;
        box-sizing: border-box;
        border-bottom:1px solid #eaeaea;
        .collect-time {
            position: absolute;
            right:18px;
            top:110px;
            font-size: 20px;/*px*/
            color: #999;
            float: right;
            line-height: 41px;
        }
        .goods-img {
            float: left;
            width:180px;
            height: 180px;
        }
        .goods-message {
            float: left;
            width:493px;
            margin-left: 13px;
        }
        .keywords-box {
        overflow: hidden;
        font-family: PingFang SC Medium;
        .keywords {
            width:368px;
            height: 32px;
            float: left;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            font-size: 28px;/*px*/
            color: #222;
            margin-left: 9px;
        }
        .city,.state {
            float: left;
            width:52px;
            height: 28px;
            line-height:28px;
            text-align:center;
            color:#fff;
            font-size: 20px;/*px*/
            border-radius: 4px;
            vertical-align: top;
            margin-top: 3px;
        }
        .city {
            background-color: #fd626a;
        }
        .state {
            background-color: #0bc67d;
            margin-left: 2px;
            }
        } 
        .describe {
        color: #999;
        font-size: 24px;/*px*/
        line-height: 32px;
        margin-top: 13px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        } 
        .goods-price {
        margin-top: 10px;
        .cost {
        color: #ff464e;
        font-size: 36px;/*px*/
        font-weight: bold;
        i {
            font-style: normal;
            font-weight: normal;
            font-size: 24px;/*px*/
        }
        }
        .send,.spread {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 4px;
        height: 28px;
        font-family: PingFang SC Medium;
        font-size: 20px;/*px*/
        vertical-align: top;
        text-align: center;
        line-height: 28px;
        margin-top: 7px;
        
        }
        .send {
        width:94px;
        border:1px solid #10bf5a;
        color: #11c05a;
        margin-left: 7px;
        }
        .spread {
        width:54px;
        color: #d7d7d7;
        border:1px solid #d7d7d7;
        margin-left: 3px;
        }
        } 
        .goods-ico {
        margin-top: 14px;
        font-family: PingFang SC Medium;
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
    .find-similar {
      position: absolute;
      right:18px;
      bottom:31px;
      width:82px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border:1px solid #ebebeb;
      border-radius: 4px;
      font-family: PingFang SC Medium;
      font-size: 20px;/*px*/
      a {
        color: #999;
      }
    } 
    .shelves {
        position: absolute;
        bottom:31px;
        right:444px;
        font-family: PingFang SC Medium;
        color: #949494;
        font-size: 28px;/*px*/
    }
    }
}
.active {
    li {
        padding-left: 0;
        .keywords {
            width:318px !important;
        }
      .goods-message {
          width:443px;
      } 
    .check {
        float: left;
        width:80px;
        height: 100%;
        background: #fff url('../assets/images/check.png') no-repeat 26px center;
        background-size: 40px 40px;/*px*/ 
    }
    .shelves {
        right:387px;
    }
    }
    .checked .check {
        background: #fff url('../assets/images/check1.png') no-repeat 26px center;
    }
}
.clred {
    color: #ff464e !important;
}
.info {
    width:100%;
    position: absolute;
    bottom:-100px;
    height: 100px;
    font-size: 0;
    transition: all .2s;
    .num {
        display: inline-block;
        width:70%;
        height: 100px;
        font-size: 30px;
        text-align: center;
        background-color: #fff;
        line-height: 100px;
        span {
            color: #ff464e;
        }

    }
    .cbtn{
        width:30%;
        height: 100px;
        color: #fff;
        background-color: #ff464e;
        border:none;
        outline: none;
        font-family: PingFang SC Medium;
        font-size: 34px;/*px*/
    }
}
.info1 {
    bottom:0;
}
.boom-box {
        width: 100%;
        background-color: transparent;
    .top {
        width:710px;
        height: 229px;
        margin-left: 19px;
        border-radius: 26px;
        background-color: #fff;
        .boom-title,.confirm {
          height: 114px;
          line-height: 114px;
          font-family: PingFang SC Medium;
          color: #8f8f8f;
          font-size: 26px;/*px*/
          text-align: center;
        }
        .confirm {
            color: #ff3b30;
            border-top:1px solid #dadada;/*no*/
            font-size: 40px;/*px*/
        }
    }
    .undo {
          width:710px;
          height: 114px;
          line-height: 114px;
          background-color: #fff;
          font-family: PingFang SC Medium;
          color: #007aff;
          font-size: 40px;/*px*/
          text-align: center;
          border-radius: 26px;
          margin-left: 19px;
          margin-top: 16px;
          margin-bottom: 20px;
    }
}
</style>
