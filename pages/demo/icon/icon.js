// pages/demo/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    gender:'',
    list:[
      {
        id:0,
        name:'苹果',
        value:'apple'
      },
      {
        id:1,
        name:'葡萄',
        value:'grape'
      },
      {
        id:2,
        name:'香蕉',
        value:'bananer'
      },
    ],
    checkList:[],

  },
  bindChange(e){
    // 获取单选框中的值
    let gender = e.detail.value;
    this.setData({
      gender
    })
  },
  checkBox(e){
    const checkList = e.detail.value;
    this.setData({
      checkList
    });
  },

})