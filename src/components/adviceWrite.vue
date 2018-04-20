<template>
  <div>
    <mt-header title="客服问题">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="title info-title">请填写投诉对象/订单号，没有可不填</div>
    <ul>
        <li>
            <span>投诉对象</span>
            <input type="text" placeholder="选填" class="obj" v-model="obj">
        </li>
        <li>
            <span>相关订单号</span>
            <input type="text" placeholder="选填" class="num" v-model="num">
        </li>
    </ul>
    <div class="title">问题描述</div>
    <div>
        <textarea name="" id="" @input="sub" v-model="problem"></textarea>
    </div>
    <div class="title">添加图片（选填，提供问题图片）</div>
    <div class="send-box">
        <ul>
            <li></li>
            <li></li>
            <li class="send" @click="upload">+
                <input type="file" name="" id="">
            </li>
        </ul>
    </div>
    <div class="commit" ref="sub">提交问题</div>
  </div>
</template>

<script>
export default {
  name:'adviceWrite',
  data() {
      return {
          obj:'',//投诉对象
          num:'',//相关订单号
          problem:''
      }
  },
  methods:{
      upload(e) {
          e.target.children[0].click();
      },
      sub() {
          if(this.obj.length>1 && this.num.length>1 && this.problem.length>1) {
            this.$refs.sub.classList.add("commit1");
          }
      }
  }
}
</script>

<style lang="scss" scoped>
    .info-title {
        margin-top: 88px; 
    }
    .title {
        padding-left: 25px;
        font-family: PingFang SC Medium;
        font-size: 24px;/*px*/
        color: #494949;
        height: 76px;
        line-height: 76px;
        background-color: transparent;
        border:none;        
    }
    ul {
        li {
            padding-left: 25px;
            font-family: PingFang SC Medium;
            font-size: 28px;/*px*/
            color: #494949;
            height: 87px;
            line-height: 87px;
            background-color: #fff;
            border-bottom: 1px solid #d7d7d7;/*no*/
            padding-right: 26px;
            label{
                display: inline-block;
                width:40px;
                height: 40px;
                float:right;
                background: url('../assets/images/check.png') no-repeat center;
                margin-top: 23.5px;
                input {
                    display: none;
                }
            }
            label.check1 {
             background: url('../assets/images/check1.png') no-repeat center;   
            }
        }
        input[type='text'] {
            height: 60px;
            border:none;
            outline: none;
            color: #222;
        }
        .other {
            border:none;
        }
    }
    textarea {
        width:100%;
        height: 200px;
        border:none;
        resize: none;
        outline: none;
        border-radius: 10px;
        padding:30px 0 0 24px;
        box-sizing: border-box;
        color: #222;
    }
    .obj {
        margin-left: 46px;
    }
    .num {
        margin-left: 18px;
    }
    .send-box {
        height: 184px;
        background-color: #fff;
        padding:30px 0 30px 24px;
        box-sizing: border-box;
        li {
            width:124px;
            height: 124px;
            border:1px solid #f4f4f4;
            padding:0;
            box-sizing: border-box;
            float: left;
            margin-right: 24px;
        }
        .send {
            text-align: center;
            line-height: 124px;
            font-size: 120px;
            color: #d7d7d7;
            input[type='file'] {
                display: none;
            }
        }
    }
    .commit {
        position: absolute;
        width:100%;
        height: 96px;
        bottom:0;
        background-color: #d7d7d7;
        color: #fff;
        text-align: center;
        line-height: 96px;
        font-family: PingFang SC Medium;
        font-size: 36px;/*px*/
    }
    .commit1 {
        background-color:#ff464e; 
    }
</style>