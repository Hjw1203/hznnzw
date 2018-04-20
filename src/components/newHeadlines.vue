<template>
  <div>
      <div class="banner">
          <router-link to="">
              <img src="http://img.hznzcn.com/upload_file/images/C1_olbn.jpg?v=20180404" alt="">
          </router-link>
      </div>
      <ul class="main">
          <li class="clearfix">
              <router-link to="newsDetail">
                <div class="left pull-left">
                    <div class="title">
                        <span class="flag">公告</span>2018年春节各类信息汇总-1月27日更新
                    </div>
                    <div class="info">
                        <span class="date">2018-01-27</span>
                        <span class="num">26532</span>
                    </div>
                </div>
                <div class="right pull-right">
                    <img src="http://img.hznzcn.com/upload_file/images/C1_olbn.jpg?v=20180404" alt="">
                </div>                  
              </router-link>

          </li>
          <li class="clearfix">
              <div class="left pull-left">
                  <div class="title">
                      <span class="flag">活动</span>绝地求生步枪已更新，M16A4被人唾弃
                  </div>
                  <div class="info">
                      <span class="date">2018-01-27</span>
                      <span class="num">26532</span>
                  </div>
              </div>
              <div class="right pull-right">
                  <img src="http://img0.imgtn.bdimg.com/it/u=3637455078,3497435464&fm=11&gp=0.jpg" alt="">
              </div>
          </li>
          <li class="clearfix">
              <div class="left pull-left">
                  <div class="title">
                      <span class="flag">市场</span>2018年春节各类信息汇总-1月27日更新
                  </div>
                  <div class="info">
                      <span class="date">2018-01-27</span>
                      <span class="num">26532</span>
                  </div>
              </div>
              <div class="right pull-right">
                  <img src="http://img0.imgtn.bdimg.com/it/u=3542654467,3862131819&fm=27&gp=0.jpg" alt="">
              </div>
          </li>
          <li class="clearfix">
              <div class="left pull-left">
                  <div class="title">
                      <span class="flag">视频</span>2018年春节各类信息汇总-1月27日更新
                  </div>
                  <div class="info">
                      <span class="date">2018-01-27</span>
                      <span class="num">26532</span>
                  </div>
              </div>
              <div class="right pull-right">
                  <!-- <img src="http://img.hznzcn.com/upload_file/images/C1_olbn.jpg?v=20180404" alt=""> -->
                  <div class="video-box">
                    <video>
                        <source src="https://cloud.video.taobao.com/play/u/2924243790/p/1/e/6/t/1/d/ld/50101350405.mp4" >
                    </video>
                    <span class="play" @click="play"></span>
                  </div>
              </div>
          </li>
          <li class="clearfix">
              <div class="left pull-left">
                  <div class="title">
                      <span class="flag">教程</span>2018年春节各类信息汇总-1月27日更新
                  </div>
                  <div class="info">
                      <span class="date">2018-01-27</span>
                      <span class="num">26532</span>
                  </div>
              </div>
              <div class="right pull-right">
                  <img src="http://img.hznzcn.com/upload_file/images/C1_olbn.jpg?v=20180404" alt="">
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
     return {

     } 
  },
  methods:{
      play(e) {
          e.target.parentNode.children[0].play();
          e.target.style.display = 'none';
          e.target.parentNode.children[0].controls = 'controls';
      }
  },
  mounted:function() {
      let flags = document.querySelectorAll('.flag');
      flags.forEach(e => {
          if (e.innerHTML ==='公告') {
              e.classList.add('gg');
          } else if (e.innerHTML ==='活动') {
              e.classList.add('hd');
          } else if (e.innerHTML ==='市场') {
              e.classList.add('sc');
          } else if (e.innerHTML ==='视频') {
              e.classList.add('sp');
          } else if (e.innerHTML ==='教程') {
              e.classList.add('jc');
          }
      });
  }
}
</script>

<style lang="scss" scoped>
    .banner {
        height: 330px;
        a {
            display: block;
            height: 100%;
            img {
                width:100%;
                height: 100%;
            }
        }
    }
    .main {
        li {
            height: 218px;
            background-color: #fff;
            border-bottom: 1px solid #eaeaea;
            padding-top: 31px;
            padding-bottom: 29px;
            padding-left: 32px;
            padding-right: 14px;
            box-sizing: border-box;
            .title {
                margin-top: 17px;                
                width:420px;
                font-weight: bold;
                font-size: 34px;
                color: #222;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                span {
                    display: inline-block;
                    width:55px;
                    height: 33px;
                    line-height: 33px;
                    text-align: center;
                    font-size: 24px;/*px*/
                    vertical-align: top;
                    margin-top: 3px;
                    margin-right: 10px;
                    border-radius: 6px;
                }

                    .gg {
                        background-color: #ffeadf;
                        color: #ff6c24;
                    }
                    .hd {
                        background-color: #ddffe9;
                        color:#0ec17b;      
                    }
                    .sc {
                        background-color: #dafaff;  //标签分类
                        color:#21b3cd;          
                    }
                    .sp {
                        background-color: #ecf0ff;
                        color:#6485ff;         
                    }
                    .jc {
                        background-color: #ffe5f2;
                        color:#ff3da1;        
                    }
            }
            .info {
                margin-top: 20px;
                color: #999;
                font-family: PingFang SC Medium;
                font-size: 22px;/*px*/
                span {
                    display: inline-block;
                    padding-left: 30px;
                }
                .date {
                    background: url('../assets/images/time.png') no-repeat left center;
                    background-size: 17px 17px ;/*px*/
                }
                .num {
                    background: url('../assets/images/see.png') no-repeat left center;
                    background-size: 26px 18px;/*px*/
                }
            }
            .right {
                img,video {
                    width:231px;
                    height: 159px;
                }
                .video-box {
                    position: relative;
                }
                .play {
                    display: inline-block;
                    position: absolute;
                    top:50%;
                    left:50%;
                    width:74px;
                    height: 74px;
                    margin-top: -37px;
                    margin-left: -37px;
                    border-radius: 50%;
                    background: url('../assets/images/play.png') no-repeat center;
                    background-size: 74px 74px;/*px*/
                }
            }
        }
    }
</style>
