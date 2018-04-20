<template>
  <div>
    <mt-header title="选择货源地">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="input-box">
        <input type="text" placeholder="请输入主营类别">
    </div>
    <div class="title">请选择货源地</div>
    <ul class='area' @click="option">
        <li class="select">
            <router-link to="selectMarket">杭州</router-link>
        </li>
        <li> 
            <router-link to="">濮院</router-link>
        </li>
        <li>
            <router-link to="">广州</router-link>
        </li>
    </ul>
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
    .input-box {
       margin-top: 88px;
       padding-left: 26px;
       input {
           width:697px;
           height: 56px;
           box-sizing: border-box;
           border-radius: 28px;
           border:none;
           outline: none;
           margin-top: 29px;
           padding-left: 56px;
           background:#fff url('../assets/images/search.png') no-repeat 21px center;
           background-size: 27px 27px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
       }
    }
    .title {

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
            a {
                display: block;
            }
        }
        li.select {
            background-color:#efefef; 
        }
    }
</style>
