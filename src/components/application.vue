<template>
  <div>
    <mt-header title="填写入驻申请表">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <ul class="form1">
        <li class="choose">
            <span class='title'>主营类别</span>
            <router-link to='mainCategory'>女装</router-link>
        </li>
        <li class="choose">
            <span class='title'>店铺所在市场</span>
            <router-link to='selectSourceSearch'>杭州-意法服饰城</router-link>
        </li>
        <li>
            <span class="title">档口地址</span>
            <input type="text" placeholder="请输入您的档口地址">
        </li>
        <li>
            <span class="title">经营品牌</span>
            <input type="text" placeholder="请输入您的档口地址">
        </li>
        <li>
            <span class="title">经营品牌</span>
            <input type="text" placeholder="请输入您的档口地址">
        </li>
    </ul>
    <ul class="form2">
        <li>
            <span class="title">联系人</span>
            <input type="text" placeholder="我们怎么称呼您">
        </li>
        <li>
            <span class="title">手机</span>
            <input type="text" placeholder="请输入您的手机号码">
        </li>
        <li>
            <span class="title">QQ</span>
            <input type="text" placeholder="请输入您日常使用的QQ">
        </li>
        <li>
            <span class="title">淘宝旺旺</span>
            <input type="text" placeholder="请输入您日常使用的旺旺名">
        </li>
        <li>
            <span class="title">固定电话</span>
            <input type="text" placeholder="请输入您的固定电话">
        </li>
        <li>
            <span class="title">Email</span>
            <input type="text" placeholder="请输入您日常使用的Email">
        </li>
    </ul>
    <div class="form3">
        <span class="title">品牌介绍</span>
        <textarea name="" id="" cols="30" rows="10" placeholder="请输入100字以内的品牌介绍"></textarea>
    </div>
    <div class="sub-btn" @click="sub">提交</div>
  </div>
</template>


<script>
import { MessageBox } from 'mint-ui';
export default {
  components:{MessageBox},
  data() {
      return {
          
      }
  },
  methods:{
      sub() {
        MessageBox.confirm('',{
            title:'温馨提示',
            message:'以上信息填写不真实或错误，都将审核不通过！',
            showConfirmButton:true,
            showCancelButton:true,

        }).then(action => {
            if(action=='confirm') {
               this.$router.push({name: 'index'}); 
                }
            }).catch(err => {
                if(err = 'cancle') {
                    alert('拜拜')
                }
            });
      }
  }
}
</script>

<style lang="scss" scoped>
    .form1 {
        margin-top: 112px;
    }
    li {
        height: 105px;
        line-height: 105px;
        background-color: #fff;
        padding-left: 38px;
        padding-right: 30px;
        font-family: PingFang SC Medium;
        font-size: 32px;
        color: #222;
        box-sizing: border-box;
        border-bottom:1px solid #eaeaea;/*px*/
        .title {
            display: inline-block;
            width:210px;
        }
        a,input {
            display: inline-block;
            width:461px;
            text-align: right;
            box-sizing: border-box;
            color: #999;
            border:none;
            outline: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        a {
            width: 430px;
        }
        input {
            height: 60px;
            background-color: transparent;
        }
    }
    .choose {
        padding-right: 61px;
        background:#fff url('../assets/images/arrow_right.png') no-repeat 97% center;
        background-size: 20px 25px;
    }
    .form2,.form3 {
        margin-top: 20px;
    }
    .form3 {
        background-color: #fff;
        font-family: PingFang SC Medium;
        padding-bottom: 34px;
        .title {
            display: inline-block;
            width:210px;
            font-size: 32px;
            color: #222;
            vertical-align: top;
            padding-left: 38px;
            margin-top: 38px;
            box-sizing: border-box;
        }
        textarea {
            width:522px;
            height: 292px;
            background-color: #e5e5e5;
            color: #999;
            font-size: 28px;/*px*/
            border-radius: 10px;
            border:none;
            outline: none;
            margin-top: 18px;
            padding-left: 22px;
            padding-top: 23px;
            box-sizing: border-box;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
    }
    .sub-btn {
        width:702px;
        height: 96px;
        background-color: #ff464a;
        color: #fff;
        text-align: center;
        line-height: 96px;
        font-family: PingFang SC Medium;
        font-size: 36px;/*px*/
        border-radius: 10px;
        margin:29px auto 30px auto;
    }
</style>
