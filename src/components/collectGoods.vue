<template>
  <div>
        <div class="header-search" v-show='searchShow'>
            <div class="header1">
                <div class="search-box">
                    <input type="text" placeholder="搜索收藏商品" @keypress.enter="search" @input="del" v-model="keyWords">
                    <span class="delete" v-show="deleteShow" @click="cancel" ref="del"></span>
                </div>
                <button @click='productSearch'>取消</button>
            </div>
        </div>
      <div class="header-f">
        <div class="header">
            <router-link to='' class="back"></router-link>
            <h1>商品收藏</h1>
            <span class="search" @click='productSearch'></span>
            <span class="edit" @click="edit" ref="editBox">{{editText}}</span>
        </div>
        <div class="nav">
            <ul @click="checkNav">
                <li data-id='1'>{{nav1}}
                    <ul class="nav-item" @click="choose">
                        <li data-area='杭州'>杭州</li>
                        <li data-area='濮院'>濮院</li>
                        <li data-area='广州'>广州</li>
                    </ul>
                </li>
                <li data-id='2'>{{nav2}}
                    <ul class="nav-item" @click="choose">
                        <li data-status='在售商品'>在售商品</li>
                        <li data-status='下架商品'>下架商品</li>
                    </ul>
                </li>
                <li data-id='3'>{{nav3}}
                    <div class="goods-class nav-item">
                        <div>女装</div>
                        <ul @click="choose">
                            <li data-class='套装/套裙'>套装/套裙（1）</li>
                            <li data-class='毛呢外套'>毛呢外套（1）</li>
                        </ul>                        
                    </div>
                </li>
            </ul>
        </div>          
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
    <div class="bg" ref="bg" @click="close"></div>
  </div>
</template>
<script>
export default {
  data() {
      return {
          searchShow:false,
          deleteShow:false,
          keyWords:'',
          shelve:true,
          unShelve:false,
          boomBox:false, //取消收藏盒子
          editText:'编辑',
          nav1:'货源地',
          nav2:'在售商品',
          nav3:'商品分类',
      }
  },
  methods:{
      productSearch() {
          this.searchShow = !this.searchShow;
      },
      edit() {
        this.$refs.main.classList.toggle('active');
        this.$refs.info.classList.toggle('info1');
      },
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
      cancel() {
          this.keyWords = '';
          this.deleteShow = false;
      },
      checked(e) {
        if(e.target.nodeName.toLowerCase()==='div' && e.target.dataset.flag ==='checkBox') {
            e.target.parentNode.classList.toggle('checked');
            this.editText = '完成';
            this.$refs.editBox.classList.toggle('clred');
        }
      },
      boomJuice() {
          this.boomBox = !this.boomBox;
      },
      checkNav(e) {
          if(e.target.nodeName.toLowerCase() === 'li' && e.target.dataset.id) {
            this.$refs.bg.classList.remove('bg1');
            let lis = e.target.parentNode.children;
            let len = lis.length;
            for(var i=0;i<len;i++) {
                if(lis[i] != e.target) {
                    lis[i].classList.remove('highlight');
                    lis[i].children[0].classList.remove('hauto');                
                }
            }
              e.target.classList.toggle('highlight');
              e.target.children[0].classList.toggle('hauto');
            for(var i=0;i<len;i++) {
                if(lis[i].children[0].classList.contains('hauto')) {
                this.$refs.bg.classList.add('bg1');    
                }
            }
          }
      },
      close(e) {
          e.target.classList.remove('bg1');
          var items = document.querySelectorAll('.nav-item');
          items.forEach(element => {
              element.parentNode.classList.remove('highlight');
              element.classList.remove('hauto');
          });
      },
      choose(e) {
          if(e.target.nodeName.toLowerCase() === 'li') {
            if(e.target.dataset.area) {
                e.target.classList.add('checked1');
                this.nav1 = e.target.dataset.area;
                let lis = e.target.parentNode.children;
                let len = lis.length;
                for(var i=0;i<len;i++) {
                    if(lis[i] != e.target) {
                        lis[i].classList.remove('checked1');
                    }
                }
            } else if(e.target.dataset.status) {                
                e.target.classList.add('checked1');
                this.nav2 = e.target.dataset.status;
                let lis = e.target.parentNode.children;
                let len = lis.length;
                for(var i=0;i<len;i++) {
                    if(lis[i] != e.target) {
                        lis[i].classList.remove('checked1');
                    }
                }
            } else if (e.target.dataset.class) {
                e.target.classList.add('checked2');
                this.nav3 = e.target.dataset.class;
                let lis = e.target.parentNode.children;
                let len = lis.length;
                for(var i=0;i<len;i++) {
                    if(lis[i] != e.target) {
                        lis[i].classList.remove('checked2');
                    }
                }
            }
          }
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
        font-size: 28px;/*px*/
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
            background-image: url('../assets/images/arrow_down@2x.png');
            background-repeat: no-repeat;
            background-position: 85% center;
            background-size: 12px 12px;/*px*/
            &:first-child {
                background-position-x: 80%;
            }
            >ul {
                position: absolute;
                z-index: 999;
                width:100%;
                top:167px;
                left:0;
                max-height: 0;
                transition:max-height .5s;
                overflow: hidden;
                li {
                    height: 83px;
                    line-height: 83px;
                    padding-left: 29px;
                    color:#222;
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
.header-f {
    position: fixed;
    width:100%;
    top:0;
    z-index: 233;
}
.bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: #000;
    display: none;
}
.goods-class {
    position: absolute;
    left:0;
    top:167px;
    width:100%;
    background-color: #fff;
    text-align: left;
    max-height:0;
    overflow: hidden;
    transition: max-height .5s;
    >div {
        height: 77px;
        line-height: 77px;
        padding-left: 35px;
        font-family: PingFang SC Medium;
        color: #949494;
        font-size: 24px;/*px*/
    }
    ul {
        font-size: 0;
        li {
            display: inline-block;
            font-family: PingFang SC Medium;
            color: #222;
            font-size: 26px;/*px*/
            margin-bottom: 39px;
            margin-left: 30px;
            height: 49px;
            line-height: 49px;
            padding:0 20px;
            background-color: #f4f4f4;

        }
    }
}
.highlight {
    color: #ff464e !important;
    background-image: url('../assets/images/arrow_top@2x.png') !important;
}
.hauto {
    max-height: 550px !important;
}
.bg1 {
    display: block;
}
.checked1 {
    color:#ff464e !important;
    background:#fff url('../assets/images/checked@2x.png') no-repeat 95% center;
}
.checked2 {
    background-color: #ff464e !important;
    color:#fff !important;
}
.header-search {
    position: absolute;
    z-index: 2333;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background-color: #fff;
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
}
</style>
