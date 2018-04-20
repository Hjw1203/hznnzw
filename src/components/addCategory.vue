<template>
  <div>
    <mt-header title="输入主营类别">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" class="done">完成</mt-button>
    </mt-header>
    <div class="input-box">
        <input type="text" placeholder="请输入主营类别">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
    .done {
        font-family: PingFang SC Medium;
        font-size:32px;
        color:#999;
    }
    .input-box {
        margin-top:112px;
        height: 103px;
        background-color: #fff;
        line-height: 103px;
        input {
            height: 60px;
            outline: none;
            border: none;
            padding-left: 31px;
            font-family: PingFang SC Medium;
            font-size:32px;
            color:#999;
            width:700px;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
    }
</style>