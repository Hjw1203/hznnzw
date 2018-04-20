<template>
  <div>
    <header class="header">
        <router-link to='' class="back"></router-link>
        <input type="text" placeholder="搜索收件人">
        <span>杭州</span>          
    </header>
    <div class="nav">
        <ul class="nav1">
            <li class="active">7天</li>
            <li>1个月</li>
            <li>3个月</li>
            <li>半年</li>
            <li>一年</li>
        </ul>
        <ul class="nav2">
            <li class="active1">全部</li>
            <li>未付款</li>
            <li>待发货</li>
            <li>已发货</li>
            <li>完成</li>
        </ul>
    </div>
    <div class="main">
        <ul>
            <li>
                <router-link to="">
                    <div class="order-num">
                        <span class="hz">杭州</span>
                        <span>订单号：2017091212453491</span>
                        <span>未付款</span>
                    </div>
                    <div class="goods">
                        <img src="http://img.hznzcn.com/images/goods_new/20170324/fe591e8e82a30c5fd0d25c22f0521cbe.jpg" alt="" class="pull-left">
                        <div class="pull-left">
                            <div>
                                <span class='keywords'>欣贝拉 XBL307-1 配腰带</span>
                                <span class="price pull-right">￥115.00</span>
                            </div>
                            <div class="clearfix">
                                <span class="pull-left color-size">红色,M</span>
                                <span class="pull-right number">x1</span>
                            </div>
                            <div class="sd">闪电发货</div>
                        </div>
                    </div>                    
                </router-link>
                <div class="total">
                    <span class="span1">共1件商品</span>
                    <span class="span2">合计<i>￥326.00</i></span>
                    <span class="span3">(含运费￥5.50)</span>
                </div>
                <div class="action">
                    <span class="cancel-order">取消订单</span>
                    <a href="" class="pay">立即付款</a>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    height: 88px;
    line-height: 88px;
    background-color: #fff;
    .back {
        position: absolute;
        left:30px;
        top:50%;
        margin-top: -18px;
        z-index:233;
        display: inline-block;
        width:18px;
        height: 36px;
        background: url('../assets/images/left@2x.png') no-repeat center;
    }
    input {
        width:510px;
        height: 56px;
        padding-left: 56px;
        margin-left: 80px;
        border-radius: 20px;
        border:none;
        outline: none;
        background:#f4f4f4 url('../assets/images/search1@2x.png') no-repeat 19px center;
        box-sizing: border-box;
    }
    span {
        display: inline-block;
        width:140px;
        padding-left: 30px;
        padding-right: 20px;
        box-sizing: border-box;
        text-align: center;
        background: url('../assets/images/regional@2x.png') no-repeat 15px center,url('../assets/images/down1@2x.png') no-repeat 110px center;
    }
}
.nav {
    background-color: #fff;
    margin-top: 17px;
    .nav1 {
        font-size: 0;
        padding:21px 0;
        border-bottom: 1px solid #ddd;/*px*/
        li {
          display: inline-block;
           width:120px;
           height: 49px;
           line-height: 49px;
           text-align: center; 
           font-family: PingFang SC Medium;
           font-size: 26px;/*px*/
           color: #1e1e1e;
           margin-left: 26px;
           background-color: #f4f4f4;
           border-radius: 8px;
        }
        .active {
            background-color: #ff464e;
            color: #fff;
        }
    }
    .nav2 {
        height: 79px;
        line-height: 79px;
        font-size: 0;
        li {
            display: inline-block;
            font-family: PingFang SC Medium;
            font-size: 30px;/*px*/
            color: #222;
            margin:0 35px;           
        }
        .active1 {
            color: #ff464e;
            border-bottom: 4px solid #ff464e;
        }

    }
}
.main {
    li {
        background-color: #fff;
        margin-top: 20px;
        .order-num {
            height: 86px;
            line-height: 86px;
            background-color: #fafafa;
        }
        img {
            width:140px;
            height: 140px;
        }
        .goods {
            padding:29px 0 32px 24px;
            height: 200px;
            box-sizing: border-box;
            >div {
                width:571px;
                padding-left: 16px;
                padding-right: 15px;
                box-sizing: border-box;
                .keywords {
                    font-family: PingFang SC Medium;
                    font-size: 28px;/*px*/
                    color: #282828;                    
                }
                .price {
                    font-family: PingFang SC Bold;
                    font-size: 32px;/*px*/
                    color: #ff464e;                   
                }
                .color-size,.number {
                    font-family: PingFang SC Bold;
                    font-size: 26px;/*px*/
                    color: #949494;
                    margin-top: 16px;                       
                }
                .sd {
                    width:94px;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    border:1px solid #10bf5a;
                    color: #11c05a;
                    font-size: 20px;/*px*/
                    margin-top: 28px;
                }
            }
        }
        .total {
            height: 79px;
            line-height: 79px;
            border-top:1px solid #ddd;
            border-bottom:1px solid #ddd;
            padding-left: 219px;
            .span1 {
                color: #282828;
                font-size: 30px;/*px*/
            }
            .span2 {
                color: #282828;
                font-size: 30px;/*px*/
                i {
                    color: #ff464e;
                }                     
            }
            .span3 {
                color: #282828;
                font-size: 30px;/*px*/      
            }
        }
    }
}
</style>
