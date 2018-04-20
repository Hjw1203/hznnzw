<template>
  <div>
    <mt-header title="用户注册协议和隐私保护政策">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
      <div class="text">
      <p>一、本服务协议双方为杭州常青网络科技有限公司（下称“杭州女装网”)与杭州女装网用户，本服务协议具有合同效力。</p>
      <p>本服务协议内容包括协议正文及所有杭州女装网已经发布的或将来可能发布的各类规则。所有规则为协议不可分割的一部分，与协议正文具有同等法律效力。 </p>
      <p>在本服务协议中没有以“规则”字样表示的链接文字所指示的文件不属于本服务协议的组成部分，而是其它内容的协议或有关参考数据，与本协议没有法律上的直接关系。</p>
      <p>用户在使用杭州女装网提供的各项服务的同时，承诺接受并遵守各项相关规则的规定。杭州女装网有权根据需要不时地制定、修改本协议或各类规则，如本协议有任何变更，杭州女装网将在网站上刊载公告，通知予用户。如用户不同意相关变更，必须停止使用“服务”。经修订的协议一经在杭州女装网网公布后，立即自动生效。各类规则会在发布后生效，亦成为本协议的一部分。登录或继续使用“服务”将表示用户接受经修订的协议。除另行明确声明外，任何使“服务”范围扩大或功能增强的新内容均受本协议约束。</p>  
      <p>用户确认本服务协议后，本服务协议即在用户和杭州女装网之间产生法律效力。请用户务必在注册之前认真阅读全部服务协议内容，如有任何疑问，可向杭州女装网咨询。 1)无论用户事实上是否在注册之前认真阅读了本服务协议，只要用户点击协议正本下方的“确认”按钮并按照杭州女装网注册程序成功注册为用户，用户的行为仍然表示其同意并签署了本服务协议。 2)本协议不涉及用户与杭州女装网其它用户之间因网上交易而产生的法律关系及法律纠纷。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userAgreement',
  data () {
    return {
      title:"用户注册",
      urlBack:"/"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .text {
    padding-left: 38px;
    padding-right: 37px;
    padding-top:120px;
    background-color: #fff;
  }
  .text p {
    text-indent: 2em;
    font-family: PingFang SC;
    font-size: 26px;/*px*/
    line-height: 42px;
    color:#666;
    margin:0;
    text-align: justify;
  }
</style>
