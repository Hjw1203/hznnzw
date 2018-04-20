<template>
  <div>
      <header class="header">
        <router-link to='' class="back"></router-link>
        <h1>浏览记录</h1>
        <span class="search" @click="clear">清空</span>
        <span class="edit" ref="editBox" @click="edit">编辑</span>          
      </header>
      <div class="container" ref="main">
        <div class="date">今天</div>
        <div class="goods-collect">
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
                <div class="find-similar"><a href="">找相似</a></div>
                <div class="add"><a href="">加入购物车</a></div>
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
                <div class="find-similar"><a href="">找相似</a></div>
                <div class="add"><a href="">加入购物车</a></div>
                </li>
            </ul>  
        </div>
        <div class="date">2018-01-26</div>
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
                <div class="find-similar"><a href="">找相似</a></div>
                <div class="add"><a href="">加入购物车</a></div>
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
                <div class="find-similar"><a href="">找相似</a></div>
                <div class="add"><a href="">加入购物车</a></div>
                </li>
            </ul>  
        </div>      
      </div>
    <div class="info" ref="info">
        <div class="num" @click="allCheck">全选（<span>{{num}}</span>）</div>
        <button class="cbtn" @click="remove">删除</button>
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui'
export default {
  data() {
      return {
          shelve:true,
          unShelve:false,
          num:0, //删除数
      }
  },
  methods:{
      clear() {
        MessageBox.confirm('',{
            title:'温馨提示',
            message:'确定清空浏览记录？',
            showConfirmButton:true,
            showCancelButton:true,

        }).then(action => {
            if(action=='confirm') {
                this.$refs.main.innerHTML = ''; //实际删除数据即可       
                }
            }).catch(err => {
                if(err = 'cancle') {
                    alert('拜拜')
                }
            });          
      },
      edit(e) {
        this.$refs.main.classList.toggle('active');
        this.$refs.info.classList.toggle('info1');
        e.target.classList.toggle('clred');
      },
      checked(e) {
        if(e.target.nodeName.toLowerCase()==='div' && e.target.dataset.flag ==='checkBox') {
            e.target.parentNode.classList.toggle('checked');
            let lis = document.querySelectorAll('.checked');
            this.num = lis.length;
        }
      },
      allCheck(e) {
          e.target.classList.toggle('num1');
          if(e.target.classList.contains('num1')) {
            let len = document.querySelectorAll('li').length;
            let lis = document.querySelectorAll('li');
            this.num = len;
            lis.forEach(element => {
                element.classList.add('checked');
            });              
          } else {
            this.num = 0;
            let lis = document.querySelectorAll('li');
            lis.forEach(element => {
                element.classList.remove('checked');
            });              
          }

      },
      remove() {
          let lis = document.querySelectorAll('.checked');
          lis.forEach(element => {
              element.innerHTML = '';  //实际删除数据即可
          });
          this.$refs.editBox.classList.remove('clred');
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
        top:0;
        z-index: 233;
        display: inline-block;
        color: #949494;
        font-family: PingFang SC Medium;
        font-size: 28px;/*px*/
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
.goods-collect {
    margin-top:0;
}
.date {
    height: 65px;
    line-height: 65px;
    color:#494949;
    font-family: PingFang SC Medium;
    font-size: 24px;/*px*/
    padding-left: 28px;
}
.goods-collect li .find-similar {
    right:143px;
}
.add {
    position: absolute;
    right:18px;
    bottom:31px;
    width:110px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border:1px solid #ebebeb;
    border-radius: 4px;
    a {
        font-size: 20px;
        color: #999;
        font-family: PingFang SC Medium;
    } 
}
.mint-msgbox-message {
    color:#ff464e;
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
        text-align: left;
        padding-left: 92px;
        box-sizing: border-box;
        background: #fff url('../assets/images/check.png') no-repeat 26px center;
        span {
            color: #ff464e;
        }
    }
    .num1 {
        background: #fff url('../assets/images/check1.png') no-repeat 26px center;
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
</style>
