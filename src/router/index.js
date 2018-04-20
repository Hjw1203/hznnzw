import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import selectSource from '@/components/selectSource'
import brandNavigation from '@/components/brandNavigation'
import application from '@/components/application'
import mainCategory from '@/components/mainCategory'
import addCategory from '@/components/addCategory'
import selectSourceSearch from '@/components/selectSourceSearch'
import selectMarket from '@/components/selectMarket'
import pendingReview from '@/components/pendingReview'
import newGoods from '@/components/newGoods'
import newGoodsBox  from '@/components/newGoodsBox'
import lightningSend  from '@/components/lightningSend'
import similarityGoods  from '@/components/similarityGoods'
import newHeadlines  from '@/components/newHeadlines'
import newsDetail  from '@/components/newsDetail'
import myTracks  from '@/components/myTracks'
import noTracks  from '@/components/noTracks'
import category  from '@/components/category'
import productDetail  from '@/components/productDetail'
import editProduct  from '@/components/editProduct'
import getProductDate  from '@/components/getProductDate'
import texture from '@/components/texture'
import profile from '@/components/profile'
import style from '@/components/style'
import combine from '@/components/combine'
import uploading from '@/components/uploading'
import collectGoods from '@/components/collectGoods'
import browsingHistory from '@/components/browsingHistory'
import couponBox from '@/components/couponBox'
import myOrder from '@/components/myOrder'
import userAgreement from '@/components/userAgreement'
import searchResult from '@/components/searchResult'
import searchResults from '@/components/searchResults'
import searchResultBox from '@/components/searchResultBox'
import brandSearchResult from '@/components/brandSearchResult'
import findResults from '@/components/findResults'
import withoutHistory from '@/components/withoutHistory'
import advice from '@/components/advice'
import adviceWrite from '@/components/adviceWrite'




// import myAddress from '@/components/myAddress'
// import editAddress from '@/components/editAddress'
// import addAddress from '@/components/addAddress'
// import customerInformation from '@/components/customerInformation'
// import confirmOrder from '@/components/confirmOrder'
// import confirmOrderInfo from '@/components/confirmOrderInfo'
// import orderDetail from '@/components/orderDetail'
// import productService from '@/components/productService'

Vue.use(Router);
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'index', //首页
    //   component: index
    // },
      // {
      //   path:'/',
      //   name:'selectSource', //选择货源地
      //   component:selectSource
      // } 
      // {
      //   path:'/',
      //   name:'brandNavigation', //品牌导航
      //   component:brandNavigation
      // },
      // {
      //   path:'/',
      //   name:'application', //填写入驻申请表
      //   component:application
      // },
      {
        path:'/mainCategory',
        name:'mainCategory', //主营类别
        component:mainCategory
      },
      {
        path:'/addCategory',
        name:'addCategory', //输入主营类别
        component:addCategory
      },
      {
        path:'/selectSourceSearch',
        name:'selectSourceSearch', //选择货源地带搜索
        component:selectSourceSearch, 
      },
      {
        path:'/selectMarket',
        name:'selectMarket', //选择市场
        component:selectMarket,
      },
      {
        path:'/pendingReview',
        name:'pendingReview', //等待审核
        component:pendingReview
      },
      // {
      //   path:'/',
      //   name:'newHeadlines', //头条资讯
      //   component:newHeadlines
      // },
      {
        path:'/newsDetail',
        name:'newsDetail',  //资讯详情
        component:newsDetail,
      },
      // {
      //   path:'/',
      //   name:'myTracks',    //我的足迹
      //   component:myTracks,
      // },
      // {
      //   path:'/',
      //   name:'category', //分类
      //   component:category,
      // },
      // {
      //   path:'/',
      //   name:'noTracks',    //暂无浏览记录
      //   component:noTracks,
      // },
      // {
      //   path:'/',
      //   name:'newGoods',  //每日新款
      //   component:newGoods
      // },
      // {
      //   path:'/',
      //   name:'newGoodsBox', //每日新款方格展示
      //   component:newGoodsBox
      // },
      // {
      //   path:'/',
      //   name:'lightningSend', //闪电发货
      //   component:lightningSend,
      // },
      // {
      //   path:'/',
      //   name:'productDetail', //商品详情
      //   component:productDetail,
      // },
      // {
      //   path:'/',
      //   name:'editProduct', // 编辑商品
      //   component:editProduct
      // }, 
      {
        path:'/texture',
        name:'texture', //材质
        component:texture,
      },
      {
        path:'/profile',
        name:'profile', //廓形
        component:profile,
      },
      {
        path:'/style',
        name:'style', //风格
        component:style,
      },
      {
        path:'/combine',
        name:'combine', //组合形式
        component:combine,
      },
      {
        path:'/getProductDate',
        name:'getProductDate', //上架时间
        component:getProductDate,
      },
      // {
      //   path:'/',
      //   name:'collectGoods',  //商品收藏
      //   component:collectGoods,
      // },
      // {
      //   path:'/',
      //   name:'browsingHistory', //浏览记录
      //   component:browsingHistory,
      // },
      // {
      //   path:'/',
      //   name:'couponBox',   //我的优惠券
      //   component:couponBox,
      // },
      {
        path:'/',
        name:'myOrder',   //我的订单
        component:myOrder,
      }
      // {
      //   path:'/',
      //   name:'uploading',//上传中
      //   component:uploading, 
      // }
      // {
      //   path:'/',
      //   name:'similarityGoods', //相似商品
      //   component:similarityGoods,
      // }
    // {
    //   path: '/',
    //   name: 'userAgreement', //用户协议
    //   component: userAgreement
    // },
    //   {
    //   path: '/',
    //   name: 'searchResult', //搜索结果横排
    //   component: searchResult
    // },
    // {
    //   path: '/',
    //   name: 'searchResults', //搜索结果横排
    //   component: searchResults
    // },
    // {
    //   path: '/',
    //   name: 'searchResultBox', //搜索结果方格
    //   component: searchResultBox
    // }
    // {
    //   path: '/',
    //   name: 'brandSearchResult', //品牌搜索结果
    //   component: brandSearchResult
    // }
      // {
      //   path: '/',
      //   name: 'findResults', //搜索结果
      //   component: findResults
      // },
      // {
      //   path: '/',
      //   name: 'withoutHistory', //无历史记录
      //   component: withoutHistory
      // }
      // {
      //   path: '/',
      //   name: 'advice', //投诉建议
      //   component: advice
      // },
      // {
      //   path: '/',
      //   name: 'adviceWrite', //填写建议
      //   component: adviceWrite
      // }

























































      // {
      //   path: '/',
      //   name: 'myAddress', //管理收货地址(x)
      //   component: myAddress
      // }
      // {
      //   path: '/',
      //   name: 'editAddress', //编辑收货地址(x)
      //   component: editAddress
      // },
      // {
      //   path: '/',
      //   name: 'addAddress', //新增收货地址(x)
      //   component: addAddress
      // }
      // {
      //   path: '/',
      //   name: 'customerInformation', //自定义发货信息(x)
      //   component: customerInformation
      // },

      // {
      //   path: '/',
      //   name: 'confirmOrder', //确认订单(x)
      //   component: confirmOrder
      // },
      // {
      //   path: '/confirmOrderInfo',
      //   name: 'confirmOrderInfo', //确认订单详情(x)
      //   component: confirmOrderInfo
      // },
      // {
      //   path: '/orderDetail',
      //   name: 'orderDetail', //确认订单详情(x)
      //   component: orderDetail
      // },
      // {
      //   path:'/productService',
      //   name:'productService',
      //   component:productService //(x)
      // }    
  ]
})
