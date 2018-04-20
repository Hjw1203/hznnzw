<template>
  <div>
    <mt-header title="我的优惠券">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="header">
        <mt-navbar v-model="selected" class="nav-bar">
            <mt-tab-item id="1">可用</mt-tab-item>
            <mt-tab-item id="2">已用</mt-tab-item>
            <mt-tab-item id="3">已过期</mt-tab-item>
        </mt-navbar>
        <ul class="nav1"  @click="checkNav">
            <li>{{nav1}}
                <ul class="nav-item" @click="choose">
                    <li data-area='杭州'>杭州</li>
                    <li data-area='濮院'>濮院</li>
                    <li data-area='广州'>广州</li>
                </ul>
            </li>
            <li>{{nav2}}
                <ul class="nav-item" @click="choose">
                    <li data-class='全部类型'>全部类型</li>
                    <li data-class='实力商家'>实力商家</li>
                    <li data-class='羊毛针织类专用优惠券'>羊毛针织类专用优惠券</li>
                    <li data-class='男装专用'>男装专用</li>
                </ul>
            </li>
        </ul>       
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" style="padding-top:242px;">
        <mt-tab-container-item id="1">
            <div v-if="yhq">
                <ul class="voucher-list">
                    <li>
                        <div>
                            <span class="voucher-title pull-left">优惠券</span>
                            <div class='pull-left center'>
                                <div class="proviso"><span>￥<i>2</i></span> 满 100 元可用</div>
                                <div class="recipient">
                                    <span>杭州</span>
                                    <span>使用商家：<i>波西诺塔</i></span>
                                </div>
                                <div class="deadline">2017.07.06-2017.09.06</div>
                            </div>
                            <div class="pull-right">
                                <button>去下单</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="voucher-title pull-left">优惠券</span>
                            <div class='pull-left center'>
                                <div class="proviso"><span>￥<i>5</i></span> 满 100 元可用</div>
                                <div class="recipient">
                                    <span>杭州</span>
                                    <span>使用商家：<i>波西诺塔</i></span>
                                </div>
                                <div class="deadline">2017.07.06-2017.09.06</div>
                            </div>
                            <div class="pull-right">
                                <button>去下单</button>
                            </div>
                        </div>
                    </li>
                </ul>        
            </div>
            <div v-if="false" class="no-voucher">
                <span></span>
                <p>暂无优惠券</p>
            </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
            <ul class="voucher-list">
                <li>
                    <div>
                        <span class="voucher-title pull-left">优惠券</span>
                        <div class='pull-left center'>
                            <div class="proviso"><span>￥<i>2</i></span> 满 100 元可用</div>
                            <div class="recipient">
                                <span>杭州</span>
                                <span>使用商家：<i>波西诺塔</i></span>
                            </div>
                            <div class="deadline">2017.07.06-2017.09.06</div>
                        </div>
                        <div class="pull-right used"></div>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="voucher-title pull-left">优惠券</span>
                        <div class='pull-left center'>
                            <div class="proviso"><span>￥<i>5</i></span> 满 100 元可用</div>
                            <div class="recipient">
                                <span>杭州</span>
                                <span>使用商家：<i>波西诺塔</i></span>
                            </div>
                            <div class="deadline">2017.07.06-2017.09.06</div>
                        </div>
                        <div class="pull-right used"></div>
                    </div>
                </li>
            </ul>   
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
            <ul class="voucher-list">
                <li>
                    <div>
                        <span class="voucher-title pull-left">优惠券</span>
                        <div class='pull-left center'>
                            <div class="proviso"><span>￥<i>2</i></span> 满 100 元可用</div>
                            <div class="recipient">
                                <span>杭州</span>
                                <span>使用商家：<i>波西诺塔</i></span>
                            </div>
                            <div class="deadline">2017.07.06-2017.09.06</div>
                        </div>
                        <div class="pull-right expired"></div>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="voucher-title pull-left">优惠券</span>
                        <div class='pull-left center'>
                            <div class="proviso"><span>￥<i>5</i></span> 满 100 元可用</div>
                            <div class="recipient">
                                <span>杭州</span>
                                <span>使用商家：<i>波西诺塔</i></span>
                            </div>
                            <div class="deadline">2017.07.06-2017.09.06</div>
                        </div>
                        <div class="pull-right expired"></div>
                    </div>
                </li>
            </ul>  
        </mt-tab-container-item>
    </mt-tab-container>
    <div class="bg" ref="bg" @click="close"></div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          selected:'1',
          yhq:true, //有时为true 无是为false;
          nav1:'货源地',
          nav2:'全部类型',
      }
  },
  methods:{
        choose(e) {
          if(e.target.nodeName.toLowerCase() === 'li') {
                e.target.classList.add('checked1');
                let lis = e.target.parentNode.children;
                let len = lis.length;
                for(var i=0;i<len;i++) {
                    if(lis[i] != e.target) {
                        lis[i].classList.remove('checked1');
                    }
                }
            if(e.target.dataset.area) {
                this.nav1 = e.target.dataset.area;
            } else if (e.target.dataset.class) {
                this.nav2 = e.target.dataset.class;
            }
          }
      },
      checkNav(e) {
          if(e.target.nodeName.toLowerCase() === 'li') {
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
  }
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    width:100%;
    margin-top: 88px;
}
.mint-tab-item {
    flex:none;
    padding:0 10px;
    margin:0 82px;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom-color: #ff464e;
}
.nav1 {
    font-size: 0;
    background-color: #fff;
    border-top:1px solid #ddd; /*px*/
    >li {
        display: inline-block;
        width:50%;
        text-align: center;
        height: 73px;
        line-height: 73px;
        color: #222;
        font-size: 30px;/*px*/
        font-family: PingFang SC Medium;
        background: url('../assets/images/arrow_down@2x.png') no-repeat 74% center;
        &:first-child {
            background-position-x: 70%;
        }
        ul {
            position: absolute;
            z-index: 999;
            width:100%;
            top:154px;
            left:0;
            max-height: 0;
            transition:max-height .5s;
            overflow: hidden;
            border-top:1px solid #ddd; /*px*/
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
.voucher-list {
  background-color: #f4f4f4;
  padding-top: 38px;
  padding-bottom: 30px;
  li {
    padding-left: 27px;
    padding-right: 26px;
    margin-bottom: 29px;
    >div {
      height: 194px;
      background: url('../assets/images/voucher.png') no-repeat 0 center;
      padding-top: 15px;
      padding-bottom: 22px;
      box-sizing: border-box;
      .center {
        padding-left: 54px;
        .proviso {
          font-family: PingFang SC Medium;
          font-size: 24px;/*px*/
          color: #fb6e48;
          span {
            font-size: 32px;/*px*/
            i {
              font-size: 58px; /*px*/
              font-style: normal;
            }
          }
        }
        .recipient {
          margin-top: 5px;
          padding-bottom: 18px;
          width:380px;
          border-bottom:3px dashed #ededed;/*no*/
          span:first-child {
            display: inline-block;
            width:52px;
            height: 28px;
            background-color:#fd626a;
            color: #fff; 
            text-align: center;
            line-height: 28px;
            border-radius: 4px;
            font-size: 20px;/*px*/
          }
          span:last-child {
            color: #949494;
            font-size: 28px;/*px*/
            i {
              font-style: normal;
              color: #282828;
              font-size: 24px;/*px*/
            }
          }
        }
        .deadline {
          font-family: PingFang SC Medium;
          font-size: 21px;/*px*/
          color: #949494;
          margin-top: 10px;
        }
      }
      .pull-right {
          width:183px;
          height: 167px;
          border-left:3px dashed #efeff4;
          line-height: 167px;
          text-align: center;
          button {
            display: inline-block;
            width:133px;
            height: 51px;
            line-height: 51px;
            text-align: center;
            border:none;
            color: #fff;
            border-radius: 25px;
            font-size: 28px;/*px*/
            outline: none;
            background-color: #ff464e;
          }
        }
    }
  }
}
.voucher-title {
  color:#fff;
  display: inline-block;
  width:30px;
  font-size: 30px;
  margin-top: 35px;
  margin-left: 21px;
}
.no-voucher {
  height: 600px;
  background-color: #f4f4f4;
  text-align: center;
  span {
    display: inline-block;
    width:200px;
    height: 200px;
    background: #d7d7d7 url('../assets/images/novoucher.png') no-repeat center;
    border-radius: 50%;
    margin-top: 100px;
  }
  p {
    margin-top: 54px;
    font-size: 30px;/*px*/
  }
}
.used {
    background: url('../assets/images/used@2x.png') no-repeat center;
    background-size: 137px 137px;/*px*/
}
.expired {
    background: url('../assets/images/expired@2x.png') no-repeat center;
    background-size: 137px 137px;/*px*/
}
.nav {
    ul {
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
.bg1 {
    display: block;
}
.highlight {
    color: #ff464e !important;
    background-image: url('../assets/images/arrow_top@2x.png') !important;
}
.hauto {
    max-height: 550px !important;
}
.checked1 {
    color:#ff464e !important;
    background:#fff url('../assets/images/checked@2x.png') no-repeat 95% center;
}
.checked2 {
    background-color: #ff464e !important;
    color:#fff !important;
}
.mint-header,.header {
    z-index: 2333;

}
</style>


