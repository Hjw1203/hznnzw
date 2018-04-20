<template>
  <div style="position:relative;">
      <div class="product">
         <router-link to="">
             <img src="http://img.hznzcn.com/images/goods_new/20170602/0f6e10255c944694b16d22ea356036d2.jpg" alt="">
             <div>
                 <div class="product-keywords">连衣裙2018年春季纯色气质优雅中长款时尚潮流修身显瘦</div>
                 <div class="price"><i>￥</i>215.00</div>
                 <div class="clearfix info">
                     <span class="pull-left">库存:999</span>
                     <span class="pull-right">净利润：100元</span>
                 </div>
             </div>
         </router-link> 
      </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1" class="item1">基本信息</mt-tab-item>
            <mt-tab-item id="2" class="item2">宝贝属性</mt-tab-item>
            <mt-tab-item id="3" class="item3">销售属性</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="title-box">
                    <span class="baby-titles">宝贝标题</span>
                    <textarea name="" id="" cols="30" rows="10" v-model="title" @input="titleNum"></textarea>
                    <div>{{count1}}/60</div>
                </div>   
                <div class="selling-point-box">  
                    <span class="baby-titles">宝贝卖点</span>
                    <textarea name="" id="" cols="30" rows="10" v-model="sellingPoint" @input="sellingPointNum"></textarea>
                    <div>{{count2}}/150</div>
                </div>
                <div class="title2">物流信息</div>
                <div class="item">
                    <span class="baby-titles">运费模板</span>
                    <span class="pull-right arrow-right" @click='shippingTemplates'>{{kd}}</span>
                </div>
                <div class="item">
                    <span class="baby-titles">所在地</span>
                    <span class="province" @click="chooseArea">{{save}}</span>
                    <span class="city" @click="chooseAreaCity">{{city}}</span>
                </div>
                <div class="title2">售后保障信息</div>
                <div class="item">
                    <span class="baby-titles">提供发票</span>
                    <label class="pull-right"><input class="mui-switch" type="checkbox"></label>
                </div>
                <div class="item">
                    <span class="baby-titles">保修服务</span>
                    <label class="pull-right"><input class="mui-switch" type="checkbox"></label>
                </div>
                <div class="item">
                    <span class="baby-titles">退换货承诺</span>
                    <label class="pull-right"><input class="mui-switch" type="checkbox"></label>
                </div>
                <div class="item">
                    <span class="baby-titles">服务承诺</span>
                    <label class="pull-right"><input class="mui-switch" type="checkbox"></label>
                </div>
                <div class="title2">其他信息</div>
                <div class="item">
                    <span class="baby-titles">库存计数</span>
                    <span class='pull-right arrow-right' @click="inventoryCount">{{js}}</span>
                </div>
                <div class="item">
                    <span class="baby-titles">上架时间</span>
                    <router-link class="pull-right arrow-right" to='getProductDate'>立即上架</router-link>    
                </div>
                <div class="item">
                    <span class="baby-titles">橱窗推荐</span>
                    <label class="pull-right"><input class="mui-switch" type="checkbox"></label>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="prompt">填错宝贝属性，可能会引起宝贝下架，影响您的正常销售。请认真准确填写</div>
                <ul class="property">
                    <li>
                        <span class="baby-titles">材质</span>
                        <router-link class="arrow-right pull-right" to='texture'>棉</router-link>
                    </li>
                    <li>
                        <span class="baby-titles">廓形</span>
                        <router-link class="arrow-right pull-right" to='profile'>X型</router-link>                   
                    </li>
                    <li>
                        <span class="baby-titles">风格</span>
                        <router-link class="arrow-right pull-right" to='style'>通勤</router-link>
                    </li>
                    <li>
                        <span class="baby-titles">组合形式</span>
                        <router-link class="arrow-right pull-right" to='combine'>单件</router-link>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="item" style="margin-top:17px">
                    <span class='baby-titles'>批发价</span>
                    <span class="hint"><i></i>电商最低限价￥125</span>
                    <span class='pull-right price1'>￥115.00</span>
                </div>
                <div class="item">
                    <span class='baby-titles'>一口价</span>
                    <div class="edit-box pull-right">
                        ￥<input type="text" v-model="nowPrice">   
                    </div>
                </div>
                <div class="item">
                    <span class='baby-titles'>利润方式</span>
                    <span class="pull-right way" @click="profitModeCheck">{{fs}}</span>
                </div>
                <div class="item">
                    <span class="title3">固定利润</span>
                    <div class="edit-box pull-right">
                        ￥<input type="text" v-model="markup">  
                    </div>
                </div>
                <div class="item">
                    <span class='baby-titles'>商家编码</span>
                    <input type="text" class='pull-right text-box' v-model="code">
                </div>
                <div class="item">
                    <span class='baby-titles'>总库存</span>
                    <span class="pull-right total">39999</span>
                </div>
                <ul class="goods-attr">
                    <li>
                        <div class="item">
                            <span class="baby-titles">卡其色/M</span>
                            <span class="delete"></span>
                        </div>
                        <div class="item">
                            <span class='baby-titles'>价格</span>
                            <input type="text" class="text-box1">
                            <span class="baby-titles">库存</span>
                            <input type="text" class="text-box1">
                        </div>
                        <div class="item">
                            <span class='baby-titles'>商家编码</span>
                            <input type="text" class="pull-right text-box" value="LDM1823-1">
                        </div>                          
                    </li>
                    <li>
                        <div class="item">
                            <span class="baby-titles">卡其色/M</span>
                            <span class="delete"></span>
                        </div>
                        <div class="item">
                            <span class='baby-titles'>价格</span>
                            <input type="text" class="text-box1">
                            <span class="baby-titles">库存</span>
                            <input type="text" class="text-box1">
                        </div>
                        <div class="item">
                            <span class='baby-titles'>商家编码</span>
                            <input type="text" class="pull-right text-box" value="LDM1823-1">
                        </div>                          
                    </li>            
                </ul>         
            </mt-tab-container-item>
        </mt-tab-container> 
        <div class='publish'>发布到淘宝</div>
        <mt-popup v-model="templates" position='bottom' class="shipping-tamplates">
            <div class="templates-title">选择运费模板</div>
                <ul @click="chooseItem">
                    <li data-kd='顺丰'>顺丰</li>
                    <li data-kd='圆通'>圆通</li>
                    <li data-kd='中通'>中通</li>
                    <li data-kd='申通'>申通</li>
                    <li @click="shippingTemplates">取消</li>
                </ul>
        </mt-popup>
        <mt-popup v-model="inventory" position='bottom' class="shipping-tamplates">
            <div class="templates-title">库存计数</div>
                <ul @click="chooseItem">
                    <li data-js='买家拍下减库存'>买家拍下减库存</li>
                    <li data-js='买家付款减库存'>买家付款减库存</li>
                    <li @click="inventoryCount">取消</li>
                </ul>
        </mt-popup>
        <mt-popup v-model="profitMode" position='bottom' class="shipping-tamplates">
            <div class="templates-title">选择利润方式</div>
                <ul @click="chooseItem">
                    <li data-fs='按固定利润'>按固定利润</li>
                    <li data-fs='按百分比'>按百分比</li>
                    <li @click="profitModeCheck">取消</li>
                </ul>
        </mt-popup>
        <mt-popup v-model="area" position='bottom' class="area-box">
            <div class="area-title">所在地区</div>
            <mt-navbar v-model="nav">
            <mt-tab-item id="4">{{save}}</mt-tab-item>
            <mt-tab-item id="5">{{cityTitle}}</mt-tab-item>
            </mt-navbar>

            <!-- tab-container -->
            <mt-tab-container v-model="nav">
            <mt-tab-container-item id="4">
                <div class="save-box">
                    <ul @click="chooseCity">
                        <li data-save='北京'>北京</li>
                        <li data-save='天津'>天津</li>
                        <li>河北</li>
                        <li>山西</li>
                        <li>内蒙古</li>
                        <li>辽宁</li>
                        <li>吉林</li>
                        <li>黑龙江</li>
                        <li>上海</li>
                        <li>江苏</li>
                        <li>浙江</li>
                        <li>江西</li> 
                        <li>安徽</li>
                        <li>山东</li>
                        <li>河南</li>
                        <li>湖北</li>
                        <li>湖南</li>
                    </ul>                    
                </div>

            </mt-tab-container-item>
            <mt-tab-container-item id="5">
                <div class="city-box">
                    <ul @click="chooseCity">
                        <li data-city='东城区'>东城区</li>
                        <li data-city='西城区'>西城区</li>
                        <li>朝阳区</li>
                        <li>丰台区</li>
                        <li>石景山区</li>
                        <li>海淀区</li>
                    </ul>                    
                </div>
            </mt-tab-container-item>
            </mt-tab-container>
        </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
      return {
          selected:'1',
          nav:'4',
          templates:false,
          inventory:false,
          profitMode:false,
          area:false,
          title:'连衣裙2018年春季纯色气质优雅中长款时尚潮流修身显瘦',
          sellingPoint:'可不填',
          count1:0,
          count2:0,
          kd:'请选择', //选择快递
          js:'请选择' ,//选择库存计数
          fs:'请选择', //利润方式
          nowPrice:215.00 ,//一口价
          markup:222, //固定利润
          code:'LDM1823-1',
          save:'请选择', //省份初始化
          cityTitle:'', //城市请选择
          city:'请选择', //选择的城市
      }
  },
  methods:{
      titleNum(e) {
          this.count1 = e.target.value.length;
      },
      sellingPointNum(e) {
          this.count2 = e.target.value.length;
      },
      shippingTemplates() {
          this.templates = !this.templates; //选择运费模板
      },
      inventoryCount() {
          this.inventory = !this.inventory; //库存计数
      },
      profitModeCheck() {
          this.profitMode = !this.profitMode; //选择利润方式
      },
      chooseArea() {
          this.area = !this.area;
      },
      chooseAreaCity() {
          this.area = !this.area;
          this.cityTitle = '请选择';
          this.nav = '5';
      },
      chooseCity(e) {
        if(e.target.nodeName.toLowerCase() ==='li') {
            let lis = e.target.parentNode.children;
            let len = lis.length;
            for(var i=0;i<len;i++) {
                if(lis[i] != e.target) {
                    lis[i].classList.remove('checked');
                }
            }
            e.target.classList.add('checked');
            if(e.target.dataset.save) {
                this.save = e.target.dataset.save;                
            }else if(e.target.dataset.city) {
                this.city = e.target.dataset.city;
            }
            this.area = !this.area;
        }
    },
    chooseItem(e){
        if(e.target.nodeName.toLowerCase() ==='li') {
            if(e.target.dataset.kd) {
                this.kd = e.target.dataset.kd;
                this.templates = !this.templates; //选择运费模板            
            } else if(e.target.dataset.js) {
                this.js = e.target.dataset.js;
                this.inventory = !this.inventory; //库存计数
            } else if (e.target.dataset.fs) {
                this.fs = e.target.dataset.fs;
                this.profitMode = !this.profitMode; //选择利润方式
            }

        }        
    }
  }
}
</script>

<style lang="scss" scoped>
    .product {
        background-color: #fff;
        padding:19px 27px 21px 29px;
        img {
            width:164px;
            height: 164px;
        }
        a>div {
            display: inline-block;
            width:513px;
            vertical-align: top;
        }
        .product-keywords {
            font-size: 28px;
            color: #222;
            line-height: 40px;
        }
        .price {
            color: #ff464e;
            font-size: 36px;/*px*/
            margin-top: 10px;
            i {
                font-style: normal;
                font-size: 24px;
            }
        }
        .info {
            margin-top: 10px;
            span:first-child {
                color: #999;
                font-family: PingFang SC Medium;
                font-size: 26px;/*px*/
            }
            span:last-child {
                color: #11c05a;
                font-size: 26px;/*px*/
            }
        }
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom-color: #ff464e;
        color: #ff464e;
        .mint-tab-item-label {
            color: #ff464e !important;
        }
    }
    .mint-tab-item {
        flex: none;
        padding: 0 10px;
        margin:0 60px;
    }
    .title-box {
        margin-top: 17px;
    }
    .title-box,.selling-point-box {
        background-color: #fff;
        padding:27px 27px 29px 38px;
        box-sizing: border-box;
        position: relative;
        span {
            display: inline-block;
            vertical-align: top;
            margin-top: 21px;
        }
        div {
            position: absolute;
            bottom: 46px;
            right:44px;
            z-index: 222;
            font-family: PingFang SC Medium;
            color: #999;
            font-size: 28px;/*px*/
        }
    }
    .baby-titles {
        font-family: PingFang SC Medium;
        font-size: 32px;/*px*/
        color: #222;
    }
    textarea {
        width:522px;
        height: 144px;
        background-color: #f8f8f8;
        border-radius: 10px;
        border:none;
        outline: none;
        margin-left: 23px;
        padding:23px 15px 0 22px;
        box-sizing: border-box;
        font-size: 28px;/*px*/
        color: #999;
        line-height: 46px;
    }
    .title2 {
        height: 82px;
        line-height: 82px;
        color:#999 ;
        font-family: PingFang SC Medium;
        font-size: 28px;
        padding-left: 38px;
        border-bottom: 1px solid #eaeaea;
        background-color: #fff;
    }
     .item {
        background-color: #fff;
        height: 104px;
        line-height: 104px;
        padding-left: 38px;
        overflow: hidden;
        padding-right: 18px;
        border-bottom:1px solid #eaeaea;/*px*/
        label {
            padding-top: 22px;
        }
    }
    .mint-tab-container {
        padding-bottom: 145px;
    }
    .prompt {
        background-color: #fffcef;
        color: #ff6600;
        font-size: 24px;/*px*/
        line-height: 33px;
        padding:16px 30px 15px 26px;
        margin-top: 16px;
    }
    .publish {
        position: absolute;
        width:100%;
        bottom:0;
        height: 96px;
        line-height: 96px;
        text-align: center;
        border:none;
        outline: none;
        background-color: #ff464e;
        color: #fff;
        float: left;
        font-family: PingFang SC Bold;
        font-size: 32px;/*px*/
    }
    .arrow-right {
        display: inline-block;
        width:80%;
        text-align: right;
        color: #999;
        font-family: PingFang SC Medium;
        font-size: 32px;/*px*/
        background: url('../assets/images/arrow_right.png') no-repeat right center;
        padding-right: 30px;
        box-sizing: border-box;
    }
    .province,.city {
        display: inline-block;
        width:41%;
        text-align: right;
        box-sizing: border-box;
        font-family: PingFang SC Medium;
        font-size: 32px;/*px*/
        color: #999;
        padding-right: 20px;
        background: url('../assets/images/grey-triangle_down@2x.png') no-repeat right center;
    }
    .shipping-tamplates {
        width:709px;
        margin:0 auto;
        border-radius: 26px;
        bottom:20px;
        .templates-title {
            color: #999;
            font-size: 26px;/*px*/
            text-align: center;
            height: 88px;
            line-height: 88px;
        }
        li {
            height: 114px;
            line-height: 114px;
            color:#007aff;
            text-align: center;
            font-family: PingFang SC Medium;
            font-size: 40px;/*px*/
            border-top:1px solid #d7d7d7;
        }
    }
    .property {
        padding-bottom: 367px;
        li {
        background-color: #fff;
        height: 104px;
        line-height: 104px;
        padding-left: 38px;
        overflow: hidden;
        padding-right: 18px;
        border-bottom:1px solid #eaeaea;/*px*/      
    }
}
.hint {
    position: relative;
    display: inline-block;
    width:243px;
    height: 43px;
    background-color: #f4f4f4;
    border-radius: 6px;
    line-height: 43px;
    padding-left: 10px;
    box-sizing: border-box;
    color: #ff6600;
    font-size: 24px;/*px*/
    vertical-align: middle;
    margin-left: 5px;
    i {
        position: absolute;
        display: inline-block;
        width:16px;
        height: 16px;
        top:50%;
        margin-top: -8px;
        transform: rotate(45deg);
        left:-8px;
        background-color: #f4f4f4;
    }
}
.title3 {
    color: #999;
    font-family: PingFang SC Medium;
    font-size: 32px;/*px*/
}
.price1,.total {
    color:#222;
    font-family: PingFang SC Medium;
    font-size: 32px;/*px*/
}
.edit-box {
    font-family: PingFang SC Medium;
    color: #999;
    font-size: 32px;/*px*/
    input {
        width:102px;
        height: 60px;
        border:none;
        outline: none;
        color: #999;
        font-family: PingFang SC Medium;
        font-size: 32px;/*px*/ 
    }
}
.way {
    display: inline-block;
    width:80%;
    text-align: right;
    background: url('../assets/images/arrow_right.png') no-repeat right center;
    padding-right: 30px;
    box-sizing: border-box;
    color: #999;
    font-family: PingFang SC Medium;
    font-size: 32px;/*px*/    
}
.text-box {
    width:80%;
    height: 60px;
    margin-top: 22px;
    font-family: PingFang SC Medium;
    color: #999;
    font-size: 32px;/*px*/
    border:none;
    outline: none;
    text-align: right;
}
.text-box1 {
    width:220px;
    height: 60px;
    margin-top: 22px;
    font-family: PingFang SC Medium;
    color: #999;
    font-size: 32px;/*px*/
    border:none;
    outline: none;
    text-align: right;
    padding-right: 30px;
}
.goods-attr li {
    margin:21px 0;
}
.delete {
    display: inline-block;
    float: right;
    margin-top: 38px;
    width:28px;
    height: 28px;
    background: url('../assets/images/delete-grey@2x.png') no-repeat center;
    background-size: 28px 28px;/*px*/
}
.area-box {
    width:100%;
    .area-title {
        height: 82px;
        line-height: 82px;
        text-align: center;
        background-color: #fafafa;
    }
    .mint-tab-container {
        padding:0;
    }
    .save-box,.city-box {
        height: 825px;
        overflow-y: scroll;
        margin-top: 5px;
    li {
        height: 75px;
        line-height: 75px;
        padding-left: 36px;
        font-family: PingFang SC Medium;
        color: #222;
        font-size: 24px;/*px*/
    }
    }
}
.mint-navbar {
    background-color: #fafafa;
}
.checked {
    color:#ff464e;
    background:#fff url('../assets/images/checked@2x.png') no-repeat 25% center;
}
</style>
