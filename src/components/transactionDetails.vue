<template>
  <div>
    <mt-header title="交易明细">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="header">
      <mt-navbar v-model="selected" class="nav-bar">
        <mt-tab-item id="1">全部</mt-tab-item>
        <mt-tab-item id="2">收入</mt-tab-item>
        <mt-tab-item id="3">支出</mt-tab-item>
      </mt-navbar>
      <ul class="nav1"  @click="checkNav">
        <li>{{nav1}}
          <ul class="nav-item" @click="choose">
            <li data-class='全部分类'>全部分类</li>
            <li data-class='充值'>充值</li>
            <li data-class='提现'>提现</li>
            <li data-class="预存款支付">预存款支付</li>
            <li data-class="订单退款">订单退款</li>
            <li data-class="提现失败">提现失败</li>
            <li data-class="后台充值">后台充值</li>
            <li data-class="汇商通退款">汇商通退款</li>
          </ul>
        </li>
        <li>{{nav2}}
          <ul class="nav-item" @click="choose">
            <li data-time='全部时间'>全部时间</li>
            <li data-time='今天'>今天</li>
            <li data-time='昨天'>昨天</li>
            <li data-time='7天'>7天</li>
            <li data-time="1个月">1个月</li>
            <li data-time="3个月">3个月</li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected" style="padding-top:242px;">
      <mt-tab-container-item id="1">
        <div v-if="detail">
          <ul class="voucher-list">
            <li>
              <router-link to="payment">
                <div class="clearfix">
                  <span class="pull-left">提现</span>
                  <span class="pull-right rmb">-500</span>
                </div>
                <div class="clearfix">
                  <span class="pull-left">2018-01-28</span>
                  <span class="pull-right">余额：115.50</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="payment">
                <div class="clearfix">
                  <span class="pull-left">提现</span>
                  <span class="pull-right rmb">+500</span>
                </div>
                <div class="clearfix">
                  <span class="pull-left">2018-01-28</span>
                  <span class="pull-right">余额：615.50</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div v-if="false" class="no-voucher">
          <span></span>
          <p>暂无交易记录</p>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <ul class="voucher-list">
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <ul class="voucher-list">
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
        detail:true, //有时为true 无是为false;
        nav1:'全部分类',
        nav2:'全部时间',
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
          if(e.target.dataset.class) {
            this.nav1 = e.target.dataset.class;
          } else if (e.target.dataset.time) {
            this.nav2 = e.target.dataset.time;
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
    },
    mounted() {
      let rmbs = document.querySelectorAll('.rmb');
      rmbs.forEach(e=>{
        if(!e.innerHTML.indexOf('+')) {
          e.classList.add('clgreen');
        }
      })
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
   li {
     height: 124px;
     background-color: #fff;
     padding:29px 43px 28px 24px;
     background:#fff url("../assets/images/arrow_right.png") no-repeat 99% center;
     border-bottom: 1px solid #ddd;
     box-sizing: border-box;
     div:first-child {
       font-family: "PingFang SC Medium";
       font-size: 30px;/*px*/
       color: #282828;
       margin-bottom: 20px;
     }
     div:last-child {
       font-family: "PingFang SC Medium";
       font-size: 24px;/*px*/
       color: #949494;
       margin-bottom: 20px;
     }
   }
  }
  .no-voucher {
    height: 600px;
    background-color: #f4f4f4;
    text-align: center;
    span {
      display: inline-block;
      width:200px;
      height: 200px;
      background: #d7d7d7 url('../assets/images/wjl@2x.png') no-repeat center;
      border-radius: 50%;
      margin-top: 100px;
    }
    p {
      margin-top: 54px;
      font-size: 30px;/*px*/
    }
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
    max-height: 850px !important;
  }
  .checked1 {
    color:#ff464e !important;
    background:#fff url('../assets/images/checked@2x.png') no-repeat 95% center;
  }
  .checked2 {
    background-color: #ff464e !important;
    color:#fff !important;
  }
  .clgreen {
    color:#11c05a !important;
  }
  .mint-header,.header {
    z-index: 2333;

  }
</style>



