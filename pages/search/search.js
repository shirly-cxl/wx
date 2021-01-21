// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: [{
        id: 0,
        name: '啦啦啦，我是卖报的小行家，不怕大风大雨满街跑',
      },
      {
        id: 1,
        name: '啦啦啦，啦啦啦，我是卖报的小行家，不怕大风大雨满街跑',
      },
      {
        id: 2,
        name: '啦啦啦,啦啦啦，啦啦啦，我是卖报的小行家，不怕大风大雨满街跑',
      },
      {
        id: 3,
        name: '啦啦啦，我是卖报的小行家，不怕大风大雨满街跑',
      },
      {
        id: 4,
        name: '啦啦啦，啦啦啦，我是卖报的小行家，不怕大风大雨满街跑',
      },
      {
        id: 5,
        name: '啦啦啦,啦啦啦，啦啦啦，我是卖报的小行家，不怕大风大雨满街跑',
      },
    ],
    isFous:false,
    inValue:'',
  },
  //防抖（防止多次发送请求） 定义全局定时器
  timeId: -1,
  bandleInput(e) {
    //1.获取输入框的值
    const {
      value
    } = e.detail;
    //2.检测合法性，trim去除字符串的头尾空格
    if (!value.trim()) {
      //不合法
      this.setData({isFous:false,goods:[]});
      return;
    }
    this.setData({isFous:true});
    clearTimeout(this.timeId);
    this.timeId = setTimeout(() => {
      //3.发送请求
      this.qsearch(value);
    }, 1000);
    console.log(e);
  },
  //发送请求获取搜索文字数据
  qsearch(query) {
    wx.request({
      url: 'url',
      data: {
        query
      },
      success: (res) => {
        console.log(res);
      }
    })
  },
  //
  cancel(){
    this.setData({inValue:'',isFous:false,goods:[]})
  }

})