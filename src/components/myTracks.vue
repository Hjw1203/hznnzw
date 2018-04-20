<template>
  <div>
      <ul class="main">
          <li>
              <div class="title">今天</div>
              <ul class="content clearfix">
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li> 
              </ul>
          </li>
          <li>
              <div class="title">3天前</div>
              <ul class="content clearfix">
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
              </ul>
          </li>
          <li>
              <div class="title">1月12号</div>
              <ul class="content clearfix">
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
                  <li>
                      <router-link to="">
                          <img src="http://img.hznzcn.com/images/goods_new/20180401/20180401151838089.jpg" alt="">
                      </router-link>
                      <div class="clearfix">
                          <span class="price">￥115.00</span>
                          <span class="more pull-right" @click="moreAction"></span>
                      </div>
                  </li>
              </ul>
          </li>
      </ul>
      <div class="info">30天内浏览记录已经全部显示</div>
      <mt-popup v-model="popupVisible" position="bottom" class="popup">
          <div class="items">
              <div class="find">
                  <router-link to=""></router-link>
                  <span>找相似</span>
              </div>
              <div class="collect">
                  <span></span>
                  <span>收藏</span>
              </div>
              <div class="delete">
                  <span></span>
                  <span>取消</span>
              </div>
          </div>
          <div class="cancel" @click="moreAction">取消</div>
      </mt-popup>
  </div>
</template>

<script>
export default {
    data() {
        return {
            popupVisible:false,
        }
    },
  methods:{
      moreAction:function(e) {
          this.popupVisible = !this.popupVisible;
      }
  }
}
</script>

<style lang="scss" scoped>
.main {
    .content li {
       width:246px;
       height: 322px;
       float: left;
       a {
           display: block;
       }
       img {
           width:246px;
           height: 246px;
           vertical-align: bottom;
       }
       &:nth-child(2) {
           margin: 0 6px;
       }
       div {
           height: 76px;
           line-height: 76px;
           background-color: #fff;
           .price {
               color: #ff464e;
               font-size: 28px;
               margin-left: 20px;
           }
           .more {
               width:28px;
               height: 76px;
               margin-right: 28px;
               background: url('../assets/images/more-grey@2x.png') no-repeat center;
           }
       }
    }
    .title {
        height: 62px;
        padding-left: 12px;
        line-height: 62px;
        color: #999;
        font-size: 24px;/*px*/
        font-family: PingFang SC Medium;       
    } 
}
.info {
    height: 94px;
    line-height: 94px;
    text-align: center;
    color: #d7d7d7;
    font-size: 24px;/*px*/
    font-family: PingFang SC Medium;
}
.popup {
    width:100%;
    .items {
        height: 200px;
        background-color: #f4f4f4;
        padding: 36px 183px 0;
        font-size: 0;
        box-sizing: border-box;
        div {
            width:94px;
            display: inline-block;
            font-family: PingFang SC Medium;
            font-size: 22px;/*px*/
            color: #666;
            text-align: center;
            span:first-child {
                display: inline-block;
                width:94px;
                height: 94px;
            }
            span:last-child {
                display: inline-block;
                height: 65px;
                line-height: 65px;
            }
        }
        .find {
            a {
                display: inline-block;
                width:94px;
                height: 94px;
                background:#fff url('../assets/images/search-grey@2x.png') no-repeat center;
            }
        }
        .collect {
            margin:0 51px;
            span:first-child {
                background:#fff url('../assets/images/collection-grey@2x.png') no-repeat center;                
            }
        }
        .delete {
            span:first-child {
                background:#fff url('../assets/images/delete-grey@2x.png') no-repeat center;                       
            }
        }
    }
    .cancel {
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: #222;
        font-family: PingFang SC Bold;
        font-weight: bold;
        font-size: 32px;/*px*/

    }
}

</style>
