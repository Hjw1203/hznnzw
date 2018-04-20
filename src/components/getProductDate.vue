<template>
  <div>
      <div class="title">您可以直接选择</div>
      <ul @click="checked">
          <li class="checked" data-val ='立即上架'>立即上架</li>
          <li data-val='放入仓库'>放入仓库</li>
          <li data-val='定时上架'>
              定时上架
              <input type="datetime-local" @click="datePicker" ref="mmm" value="2014-06-01T10:55:33">
          </li>
      </ul>
      <button @click="sure">确定</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          val:'立即上架',
          time:''
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
                  } else if(lis[i].dataset.val==='定时上架') {
                      lis[i].children[0].style.display = 'none';
                  }
              }
              e.target.classList.add('checked');
              if(e.target.dataset.val==='定时上架') {
                  e.target.children[0].style.display = 'inline-block';
              }
              this.val = e.target.dataset.val;
          }
      },
      datePicker(e) {
          console.log(e.target.value)
      },
      sure() {
          console.log(this.$refs.mmm.value)
      }
  }
}
</script>

<style lang="scss" scoped>
    .title {
       height: 78px;
       line-height: 78px;
        font-family: PingFang SC Medium;
        font-size: 28px;/*px*/
       color: #999;
       padding-left: 33px;
    }
    li {
        height: 109px;
        line-height: 109px;
        font-family: PingFang SC Medium;
        color: #222;
        font-size: 32px;/*px*/
        background-color: #fff;
        padding-left: 39px;
        border-bottom: 1px solid #eaeaea;
        span {
            display: none;
        }
    }
    .checked {
        color:#ff464e;
        background:#fff url('../assets/images/checked@2x.png') no-repeat 95% center;
    }
    input[type='datetime-local'] {
        border:none;
        color: #007aff;
        background-color:none;
        vertical-align: middle;
        display: none;
        margin-left: 190px;
        // background-color: transparent
    }
    ::-webkit-inner-spin-button {
        display: none;
    }
</style>
