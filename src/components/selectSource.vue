<template>
  <div>
    <mt-header title="选择货源地">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="title">请选择货源地</div>
    <ul class='area' @click="option">
        <li class="select">杭州</li>
        <li>濮院</li>
        <li>广州</li>
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
</style>
