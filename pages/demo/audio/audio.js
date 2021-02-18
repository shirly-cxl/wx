// pages/demo/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
    play_staus:true,
    present:0,
    play_time:"00:00",
    music_time:"00:00",
    play_modules_index:0,
    play_modules:["顺序","随机","单曲"]
  },
  //播放/暂停
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
    // this.setData({
    //   music_main:app.data.ge[options.id],
    //   music_index:parseInt(options.id)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();
  },
  // 进度条
  timeupdate:function(e){
    //播放时长
    var currentTime = e.detail.currentTime;
    //总时长
    var duration =  e.detail.duration;

   this.setData({
    present : Math.floor(currentTime / duration * 1000) / 10,
    play_time:this.formtime(currentTime),
    music_time:this.formtime(duration)
   });
  },
  /**
   * 切换
   */
  changeMod: function () {
   var index = this.data.play_modules_index;
   if(index == 2){
      index = 0;
   }else{
      index ++;
   }

   this.setData({
     play_modules_index:index
   })
  },

  formtime:function(time){
    var m = parseInt(time/60);
    var s = parseInt(time) - m * 60 ;
    m = m.toString();
    s = s.toString();
    m = m.length < 2 ? '0' + m : m;
    s = s.length < 2 ? '0' + s : s;
    return  m + ":" + s;
  },

  next:function(){
    var index;
    var modul = this.data.play_modules[play_modules_index];
    if(modul == "随机"){
     index = parseInt(Math.random()* 10) 
    }else{
      var music_index = this.data.music_index;
      if(music_index == 10-1){
        music_index = 0;
      }else{
        index = music_index +1;
      }
    }

    this.setData({
      music_index :index,
      play_staus:true,
      music_main:app.data.ge[index]
    })
    this.audioCtx.play();
  }
})