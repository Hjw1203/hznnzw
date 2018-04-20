<template>
  <div>
    <mt-header title="主营类别">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="title">您可以直接选择</div>
    <ul class='area' @click="option">
        <li class="select">女装</li>
        <li>男装</li>
        <li>鞋类箱包</li>
        <li>孕妇装</li>
    </ul>
    <router-link to='addCategory' class="other">输入其他类别</router-link>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
  methods:{
      option(e) {
          if(e.target.nodeName.toLowerCase()==='li') {
              var len = e.target.parentNode.children.length;
              var lis = e.target.parentNode.children;
              for(var i=0;i<len;i++) {
                  if(lis[i] != e.target) {
                      lis[i].classList.remove('select');
                  }
              }
              e.target.classList.add('select');
          }
      }
  }
}
</script>

<style lang="scss" scoped>
    .title {
        margin-top: 88px;
        height: 76px;
        line-height: 76px;
        font-family: PingFang SC Medium;
        font-size: 28px;/*px*/
        color: #999;
        padding-left: 33px;
    }
    .area {
        li {
            height: 105px;
            line-height: 105px;
            color: #222;
            font-family: PingFang SC Medium;
            font-size: 32px;/*px*/
            color: #222;
            background-color: #fff;
            padding-left: 39px;
            border-bottom: 1px solid #eaeaea;
        }
        li.select {
            background-color:#efefef; 
        }
    }
    .other {
        display: block;
        width: 366px;
        height: 82px;
        line-height: 82px;
        text-align: center;
        margin:0 auto;
        margin-top: 38px;
        font-family: PingFang SC Medium;
        font-size: 32px;/*px*/
        color: #222;
        border:1px solid #999;
        border-radius: 10px;
         -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
</style>