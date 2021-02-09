// pages/demo/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
    play_staus:true,
  },
  onplay:function(){
    var play_staus = this.data.play_staus;
    if(play_staus){
      this.setData({play_staus:false});
      this.audioCtx.pause();
    }else{
      this.setData({play_staus:true});
      this.audioCtx.play();
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();
  },
  timeupdate:function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
})