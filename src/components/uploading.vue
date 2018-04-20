<template>
  <div class="box">
      <div class="uploading" v-show="uploading">
        <svg viewbox="0 0 182 182">
            <circle cx="91" cy="91" r="81" stroke-width="5" stroke="#fff" fill="#fff"></circle>
            <circle cx="91" cy="91" ref="cir" r="81" stroke-width="5" stroke="#ff464e" fill="none" transform="matrix(0,-1,1,0,0,182)" stroke-dasharray="0 1069"></circle>
        </svg>
        <div id="infoNum">{{pro}}%</div>
        <!-- <div>拖我：<input id="range" ref="range" type="range" min="0" max="100" value="0" style="width:300px;"></div> -->
        <p>商品上传中，请耐心等待...</p>
      </div>
      <div class="success" v-show='ok'>
          <h6>恭喜您，上传成功</h6>
          <p>温馨提示：如上传商品后提示您使用了他人已经认证的图片，请忽略，这仅是提示，非投诉</p>
      </div>
      <div class="error" v-show="error">
          <h6>上传失败</h6>
          <p>上传失败原因</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            uploading:true,
            ok:false,
            error:false,
            pro:0           
        }
    },
    methods:{

    },
    mounted() {
        var range  = this.$refs.range,cir = this.$refs.cir;
        var _this = this;
        if(range && cir) {
            range.addEventListener("change", function() {
                _this.pro = this.value;
                console.log(_this.pro)   //示例：传入上传进度值。
                var percent = this.value / 200, perimeter = Math.PI * 2 * 170;
                cir.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
            });            
        }

    }
}
</script>

<style lang="scss" scoped>
    .box {
        >div {
            height: 1206px;
        }
        .uploading {
            position: relative;
            svg {
                width:200px;
                height: 200px;
                margin-top: 223px;
                margin-left: 288px;
            }
            #infoNum {
                position: absolute;
                width:162px;
                left:50%;
                margin-left: -75px;
                top:300px;
                text-align: center;
                font-family: PingFang SC Medium;
                font-size: 36px;/*px*/
                color: #ff464e;
            }
            circle {
                -webkit-transition: stroke-dasharray .25s;
                transition: stroke-dasharray .25s;
            }
            p {
                text-align: center;
                color: #222;
                font-family: PingFang SC Medium;
                font-size: 28px;/*px*/
                margin-top: 27px;
            }
        }
        .success {
            background: url('../assets/images/ok@2x.png') no-repeat center 223px;
            background-size: 161px 161px;/*px*/
            padding-top: 412px;
            h6 {
                text-align: center;
                color: #222;
                font-family: PingFang SC Medium;
                font-size: 28px;/*px*/
                margin:0;
            }
            p {
                margin-left: 60px;
                margin-right: 61px;
                text-align: center;
                color: #999;
                font-size: 24px;/*px*/
                line-height: 36px;
                margin-top:29px;
            }  
        }
        .error {
            background: url('../assets/images/error@2x.png') no-repeat center 223px;
            background-size: 161px 161px;/*px*/
            padding-top: 412px;
            h6 {
                text-align: center;
                color: #222;
                font-family: PingFang SC Medium;
                font-size: 28px;/*px*/
                margin:0;
            }
            p {
                margin-left: 60px;
                margin-right: 61px;
                text-align: center;
                color: #999;
                font-size: 24px;/*px*/
                line-height: 36px;
                margin-top:29px;
            }  
        }
    }
</style>
