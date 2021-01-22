// pages/demo/popup/popup.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
  },
  //消息提示框
  showok: function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  //模态弹窗
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //底部弹窗
  actioncnt: function () {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  //modal有输入框
  modalinput: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认  
  confirm: function () {
    this.setData({
      hiddenmodalput: true
    })
  },
  //loading 提示框
  loading(){
    wx.showLoading({
      title: '加载中',
     })
      
     setTimeout(function () {
      wx.hideLoading()
     }, 2000)
  },
  //自定义弹窗
  onReady: function () {
    //获得popup组件
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    this.popup.showPopup();
  },
  //取消事件
  error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  //确认事件
  success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
  }
})