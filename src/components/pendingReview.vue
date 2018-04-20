<template>
  <div>
    <mt-header title="等待审核">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="content">
        <div class="title">已提交，审核中</div>
        <div>
            <span>1</span>      
            <p>入驻申请正在等待审核受理，工作人员将会在72小时内与您联系，请保持联系方式畅通。</p>
        </div>
        <div>
            <span>2</span>      
            <p>货捕头/杭州女装网承诺：绝不向他人透露您的任何个人信息！</p>
        </div>
    </div>
    <p class="info">货捕头/杭州女装网感谢您的入驻！我们期待为您服务。</p>
    <div class="back-home" @click="backHome">返回首页</div>
    <p class="info">如果在72小时后工作人员仍没有和您取得联系，</p>
    <p class="info">请拨打入驻热线,杭州:0571-56829683/濮院:0573-88565132</p>
  </div>
</template>

<script>
export default {
  methods:{
      backHome() {
          this.$router.push({name: 'pendingReview'}); 
      }
  }
}
</script>

<style lang="scss" scoped>
    .content {
        background-color: #fff;
        height: 363px;
        box-sizing: border-box;
        padding-top: 59px;
        margin-top: 112px;
        .title{
            font-family: PingFang SC Bold;
            font-size: 36px;/*px*/
            color: #58c211;
            font-weight: bold;
            text-align: center;
            margin-bottom: 38px;
        }            
        span {
                display: inline-block;
                width:32px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                border-radius: 50%;
                font-family: PingFang SC Bold;
                font-size: 21px;/*px*/
                color: #fff;
                background-color: #ff464e;
                margin-left: 67px;
                vertical-align: top;
            }
        p {
            display: inline-block;
            width:565px;
            height: 69px;
            color: #999;
            font-size: 28px;/*px*/
            line-height: 35px;
            margin-bottom: 37px;
        }
    }
    .info {
        margin-top: 21px;
        color: #999;
        font-family: PingFang SC Medium;
        font-size: 24px;/*px*/
        text-align: center;
    }
    .back-home {
        width:702px;
        height: 96px;
        background-color: #ff464a;
        color: #fff;
        text-align: center;
        line-height: 96px;
        font-family: PingFang SC Medium;
        font-size: 36px;/*px*/
        border-radius: 10px;
        margin:69px auto 38px auto;       
    }
</style>

