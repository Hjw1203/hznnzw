<template>
  <div>
    <mt-header title="支出详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="title">
      <span class="zcje">支出金额</span>
      <span class="number">-500.00</span>
    </div>
    <div>
      <span>交易时间</span>
      <span>2018-01-28 10:59:06</span>
    </div>
    <div>
      <span>订单号</span>
      <span>3117854664233542</span>
    </div>
    <div>
      <span>类型说明</span>
      <span>提现</span>
    </div>
    <div>
      <span>备注</span>
      <span>提现到支付宝</span>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  .title {
    height: 176px;
    line-height: 176px;
    font-family: "PingFang SC Medium";
    background-color: #fff;
    color: #282828;
    border-bottom:1px solid #ddd;
    margin-top: 88px;
    padding-left: 34px;
    padding-right: 21px;
    span:first-child {
      font-size: 30px;/*px*/
      float: left;
    }
    span:last-child {
      font-size: 50px;/*px*/
      float: right;
    }
  }
  .title~div {
    height: 70px;
    line-height: 70px;
    font-family: "PingFang SC Medium";
    background-color: #fff;
    font-size: 24px;/*px*/
    color: #949494;
    padding-left: 34px;
    padding-right: 21px;
    span:first-child {
      float: left;
    }
    span:last-child {
      float: right;
    }
  }
</style>
