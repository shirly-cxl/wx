// index.js
import { request } from "../../request/index.js";
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperList:[
      {
        id:0,
        url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1657754395,2445593946&fm=26&gp=0.jpg',
      },
      {
        id:1,
        url:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3236684661,1102517451&fm=11&gp=0.jpg',
      },
      {
        id:2,
        url:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3412600186,2946149983&fm=11&gp=0.jpg',
      },
    ],
    cateList:[
      {
        name:'收藏',
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1025061145,93665083&fm=15&gp=0.jpg',
      },
      {
        name:'阅读',
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2705850485,251535981&fm=15&gp=0.jpg'
      },
      {
        name:'关注',
        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2411275993,1234329074&fm=15&gp=0.jpg'
      },
      {
        name:'音乐',
        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2192964119,80699433&fm=15&gp=0.jpg'
      },
    ],
    list:[
      {
        id:0,
        name:'时尚女孩',
        prpList:[
          {
            id:0,
            img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3157533875,3360200635&fm=26&gp=0.jpg'
          },
          {
            id:1,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3138449233,3774465882&fm=15&gp=0.jpg'
          },
          {
            id:2,
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3705804856,1602182255&fm=15&gp=0.jpg'
          },
          {
            id:3,
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951665699,1060809442&fm=15&gp=0.jpg'
          },
          {
            id:4,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=728607959,3104122966&fm=15&gp=0.jpg'
          },
        ]
      },
      {
        id:1,
        name:'户外活动',
        prpList:[
          {
            id:0,
            img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3157533875,3360200635&fm=26&gp=0.jpg'
          },
          {
            id:1,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3138449233,3774465882&fm=15&gp=0.jpg'
          },
          {
            id:2,
            img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=986320498,1461404074&fm=15&gp=0.jpg'
          },
          {
            id:3,
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1951665699,1060809442&fm=15&gp=0.jpg'
          },
          {
            id:4,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=728607959,3104122966&fm=15&gp=0.jpg'
          },
        ]
      },
      {
        id:0,
        name:'图片展示',
        prpList:[
          {
            id:0,
            img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3157533875,3360200635&fm=26&gp=0.jpg'
          },
          {
            id:1,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3138449233,3774465882&fm=15&gp=0.jpg'
          },
          {
            id:2,
            img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3705804856,1602182255&fm=15&gp=0.jpg'
          },
          {
            id:3,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1919711244,1335875457&fm=15&gp=0.jpg'
          },
          {
            id:4,
            img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=728607959,3104122966&fm=15&gp=0.jpg'
          },
        ]
      },
    ]
  },
  
  onLoad:function(options) {
    // wx.request({
    //   url: 'url',
    //   method:"GET",
    //   data:{},
    //   header:{'content-type':'application/x-www-form-urlencoded'},
    //   dataType:'json',
    //   responseType:'text',
    //   success:(res)=>{
    //     this.setData({
    //       swiperList:res.data.message
    //     })
    //   },
    //   fail:()=>{},
    //   complete:()=>{}
    // });
   this.getSwiper();
   console.log("onLoad");
  },
  getSwiper(){
    // request({url:''}).then(result=>{
    //   this.setData({
    //     swiperList:res.data.message
    //   });
    // }).then();
  },
  onReady(){
    console.log("onReady");
  },
  onShow(){
    console.log("onShow");
  }
})
