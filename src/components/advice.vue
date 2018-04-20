<template>
  <div>
    <mt-header title="投诉建议">
        <router-link to="/" slot="left">
            <mt-button icon="back"></mt-button>
        </router-link>
    </mt-header>
    <div class="info-title">选择问题类型</div>
    <ul @click='select'>
        <li>
            <span>客服问题</span>
            <label for="service">
                <input type="radio" id="service" name="problem">
            </label>
        </li>
        <li>
            <span>商品问题</span>
            <label for="service1">
                <input type="radio" id="service1" name="problem">
            </label>
        </li>
        <li>
            <span>发货问题</span>
            <label for="service2">
                <input type="radio" id="service2" name="problem">
            </label>
        </li>
        <li class="other">
            <span>其他问题</span>
            <label for="service3">
                <input type="radio" id="service3" name="problem">
            </label>
        </li>
    </ul>
    <div class="next">
        <router-link to="" name=''>下一步</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name:'advice',
  data() {
      return {

      }
  },
  methods:{
    select(e) {
        let len = e.target.parentNode.children.length;
        let lis = e.target.parentNode.children;
        if(e.target.nodeName.toLowerCase()==='li') {
            for(var i=0;i<len;i++) {
                if(lis[i] != e.target) {
                    lis[i].children[1].classList.remove('check1');
                }
            }
            // e.target.children[1].classList.toggle('check1');
        }
        e.target.children[1].classList.add("check1");
    }   
  }
}
</script>

<style lang="scss" scoped>
    .info-title {
        height: 76px;
        line-height: 76px;
        background-color: transparent;
        border:none;
        margin-top: 88px;
        padding-left: 25px;
        padding-left: 25px;
        font-family: PingFang SC Medium;
        font-size: 24px;/*px*/
        color: #494949;        
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
        .other {
            border:none;
        }
    }
    .next {
        width:702px;
        height: 80px;
        margin:0 auto;
        background-color: #ff464e;
        margin-top: 40px;
        border-radius: 10px;
        a {
            display: block;
            font-family:PingFang SC Medium;
            font-size: 36px; 
            text-align: center;
            line-height: 80px;
            color: #fff;
            text-decoration: none;
        }
    }
</style>
