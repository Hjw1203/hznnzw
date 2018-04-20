<template>
  <div>
    <mt-header title="历史记录" class="header">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right" class="more"></mt-button>
    </mt-header>
    <div class="content">
        <div class="bg"></div>
        <p>暂无历史记录</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'findResults',
}
</script>

<style lang="scss" scoped>
.header {
    position: static;
}
    .content {
        height: 100%;
        height: 1246px;
        text-align: center;
        .bg {
            display: inline-block;
            width:200px;
            height: 200px;
            margin-top:304px;
            background: #d7d7d7 url('../assets/images/without_search.png') no-repeat center;
            background-size: 108px 104px;/*px*/
            border-radius: 50%;
        }
        p {
            margin:0;
            font-size: 32px;/*px*/
            color: #494949;
            margin-top: 62px;
        }
    }
</style>