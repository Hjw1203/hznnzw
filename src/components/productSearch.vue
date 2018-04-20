<template>
  <div class="header">
      <div class="search-box">
          <input type="text" placeholder="搜索收藏商品" @keypress.enter="search" v-model="keyWords">
      </div>
      <button @click="cancel">取消</button>
  </div>
</template>

<script>
export default {
  data() {
      return {
          keyWords:'',
      }
  },
  methods:{
      search(e) {
          let keyWords = e.target.value;
          this.$router.push({name: 'collectGoods'});
      },
      cancel() {
          this.keyWords = '';
      }
  }

}
</script>

<style lang="scss" scoped>
    .header {
        height: 88px;
        line-height: 88px;
        background-color: #fff;
        input {
            width:618px;
            height: 56px;
            border-radius: 28px;
            padding-left: 56px;
            border:none;
            outline: none;
            margin-left: 29px;
            box-sizing: border-box;
            background:#f4f4f4 url('../assets/images/search1@2x.png') no-repeat 19px center;
            background-size: 28px 28px ;/*px*/
        }
        .search-box {
            display: inline-block;
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
    }
</style>
