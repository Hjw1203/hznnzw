<template>
  <div>
      <div class='title'>您可以直接选择</div>
      <ul @click="checked">
          <li class="checked">PU</li>
          <li>棉</li>
          <li>麻</li>
          <li>羊毛</li>
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
    checked(e) {
        if(e.target.nodeName.toLowerCase() ==='li') {
            let lis = e.target.parentNode.children;
            let len = lis.length;
            for(var i=0;i<len;i++) {
                if(lis[i] != e.target) {
                    lis[i].classList.remove('checked');
                }
            }
            e.target.classList.add('checked');
            this.val = e.target.dataset.val;
        }
    },
  }
}
</script>

<style lang="scss" scoped>
    .title {
        height: 78px;
        line-height: 78px;
        color: #999;
        font-family: PingFang SC Medium;
        font-size:28px;/*px*/
        padding-left: 33px;
    }
    ul {
        background-color: #fff;
        li {
            height:109px ;
            line-height: 109px;
            font-family: PingFang SC Medium;
            font-size:32px;/*px*/
            color: #222;
            border-bottom:1px solid #eaeaea;
            padding-left: 40px;
        }
    }
    .checked {
        color:#ff464e;
        background:#fff url('../assets/images/checked@2x.png') no-repeat 95% center;
    }
</style>
